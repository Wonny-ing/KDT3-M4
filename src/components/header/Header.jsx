import { useRecoilState, useRecoilValue } from 'recoil';
import { authUrl, HEADERS_USER } from '../../data/API';
import { loginState, userInfoState, alternativeImg, getCookie, deleteCookie } from '../../data/LoginData';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import { BiSearch } from 'react-icons/bi';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isAdmin, setIsAdmin] = useState(false);
  const accessToken = getCookie('accessToken');



  useEffect(() => {
    if (!accessToken) {
      setIsLoggedIn(false);
    }
    if(userInfo.email === 'admin@admin.com'){
      setIsAdmin(true);
    }
  }, []);

  const onClick = async () => {
    try {
      const res = await fetch(`${authUrl}/logout`, {
        method: 'POST',
        headers: { ...HEADERS_USER, Authorization: accessToken },
      });
      const json = await res.json();
      if (json) {
        deleteCookie('accessToken');
        setIsLoggedIn(false);
        setUserInfo({
          email: '',
          displayName: '',
          profileImg: '',
        });
      }
      document.location.href = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  const [value, setValue] = useState('');

  const onKeyDown = (event) => {
    let inputValue = event.target.value;
    if (event.key === 'Enter' && !event.isComposing) {
      if (inputValue !== '') {
        setValue(inputValue.trim());
      } else {
        alert('검색어를 입력해주세요');
      }
    }
  };

  return (
    <header className={style.header}>
      <div className={style.headerLogoUtil}>
        <div className={`${style.inner}`}>
          <div className={style.logo}>
            <Link to="/" className={style.naver}>
              <span>NAVER</span>
            </Link>
            <Link to="/" className={style.shopping}>
              <span>네이버 쇼핑</span>
            </Link>
          </div>
          <div className={style.util}>
            {isLoggedIn ? (
              <>
                <Link to="/mypage" className={style.util_list}>
                  마이페이지
                </Link>
                { isAdmin ? <Link to="/admin/products"> 관리자 페이지 </Link> : null}
                <Link to="/mycart" className={style.util_list}>
                  장바구니
                </Link>
                <span className={style.util_list}>{userInfo.displayName}님</span>
                <img src={userInfo.profileImg ? userInfo.profileImg : alternativeImg} className={style.image}></img>
                <span className={style.util_list} onClick={onClick}>
                  로그아웃
                </span>
              </>
            ) : (
              <>
                <Link to="/login" className={style.util_list}>
                  로그인
                </Link>
                <Link to="/signup" className={style.util_list}>
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={style.linkInput}>
        <div className={`${style.inner}`}>
          <div className={`${style.linkBox}`}>
            <img
              src="https://shop-phinf.pstatic.net/20191031_145/1572507325623D6htg_PNG/9868064258605110_767066992.png?type=m120"
              alt="장바구니"
            />
            <p>맛그레이드하세요↗ 식품전문가 프레시멘토의 큐레이션 서비스</p>
            <span className={style.customerNumber}>관심고객수 117,891</span>
          </div>
          <form action="/search" className={style.form}>
            <input onKeyDown={onKeyDown} type="search" name="s" placeholder="검색어를 입력해보세요" />
            <BiSearch className={style.searchIcon} />
          </form>
        </div>
      </div>
      <div className={style.mainLogo}>
        <Link to="/">
          <img
            src="https://shop-phinf.pstatic.net/20191031_66/15725072755036s6lm_PNG/60561378898368862_1948914938.png?type=w640"
            alt="FRESH MENTOR"
          />
        </Link>
      </div>
    </header>
  );
}
