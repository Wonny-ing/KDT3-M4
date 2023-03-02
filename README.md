# 4차 과제 : 스마트 스토어 만들기

배포
https://kdt3-m4-of-team4.netlify.app/

메인 디자인
https://www.behance.net/gallery/112849833/nowaste-online-store

서브 디자인(메인에 없는 경우 참고)
https://www.aromatica.co.kr/member/join.html

자료
https://theunwasteshop.com/collections/body-care

멤버: 강해경, 김혜인, 김지원, 홍혜원, 황이삭

## 프로젝트 목표

1. 리액트 라이브러리를 학습하고 익숙해지는 것
2. 다양한 리액트 라이브러리 경험
3. 디자인보다 기능 구현에 초점 맞춘 작업
4. 팀프로젝트를 통한 협업을 경험
   - 깃허브를 이용한 협업
   - 코드 컨벤션과 규격화
   - 문서화 등

## 사용

1. `React`

- `framer-motion` : 애니메이션 효과 구현
- `react-hook-form` : 각종 form의 state관리, 유효성검사
- `react-icons` : 아이콘 컴포넌트
- `react-query` : 서버에 데이터 요청, 캐싱으로 최적화
- `react-router-dom` : 라우팅 기능
- `recoil` : 전역 state 관리

2. `post CSS` : 디자인
3. `npm` : 패키지 매니저
4. `prettier` : formatter
5. `firebase` : 장바구니 기능 위한 서버구현

## 목표 기능구현

- [x] 상품 정보 객체 만들기
- [x] GNB
  - [x] 전체상품
  - [x] 베스트
  - [x] 농산물
  - [x] 수산물
- [x] 검색
  - [x] 낮은 가격순, 높은 가격순
- [x] 카테고리
- [ ] 제품 상세페이지
  - [ ] 장바구니
  - [x] 구매하기
  - [ ] 상세정보
- [ ] 제품리스트
- [x] 로그인
- [x] 회원가입,
- [x] 마이페이지
- [ ] 장바구니
  - [ ] 전체삭제
  - [ ] 상품당 삭제
  - [x] 주문하기
- [x] 구매하기
  - [ ] 배송지 선택
  - [x] 주문자 정보
  - [x] 결제수단
    - [x] 계좌결제
- [ ] 관리자 페이지
  - [x] 상품 관리
    - [x] 상품 추가
    - [x] 상품 수정
    - [x] 썸네일 이미지 없는 경우 처리
    - [x] 전체 선택
    - [x] 선택 삭제
    - [ ] 선택항목 매진 여부 토글
    - [ ] 상품목록 리셋
  - [ ] 판매 조회

## 이슈 발생과 해결

- 리액트 컴포넌트 간의 겹침문제 https://github.com/fastcampus-team4/KDT3-M4/issues/17
- git이 대소문자 구별하지 못하라 때 https://github.com/fastcampus-team4/KDT3-M4/issues/30
- 슬라이드 framer-motion 애니메이션 적용 안된 문제 https://github.com/fastcampus-team4/KDT3-M4/issues/65
- Link 버튼 누를때 의도치 않은 쿼리 fetch로 로딩되는 문제https://github.com/fastcampus-team4/KDT3-M4/issues/66

## 앞으로 도전해볼 과제

- [ ] typescript 템플릿을 적용하여 마이그레이션
- [ ] 리팩토링을 통해 코드 퀄리티, 통일성 높이기
- [ ] 에러 및 예외처리 코드 추가
- [ ] css프레임워크 도입하기
- [ ] 디자인 퀄리티 높이기 위한 작업
- [ ] 반응형 디자인 적용하기
- [ ] 애니메이션 효과 적용하기
- [ ] 백엔드를 자체적으로 구현하여 api 대체하기
- [ ] 서버사이드 랜더링
- [ ] 상세정보 섹션 개선
- [ ] 웹사이트에 더 많은 기능 추가하기
  - [ ] 알림 기능
  - [ ] 문의 기능
  - [ ] 네이버나 카톡을 통한 로그인 기능
  - [ ] 쿠폰/포인트 및 할인 기능
  - [ ] 리뷰 및 평점시스템
  - [ ] Q&A 페이지
  - [ ] 주간 판매 랭킹
  - [ ] 성능 최적화
  - [ ] 사용성 개선

## 1차 프로젝트 회고

### 강해경

- 협업과제가 처음이라 초기 역할 분담과 디렉토리 구조를 잡는 부분이 어렵고 혼란스러웠다.
- 개인 과제하듯이 기능 구현을 위해 코드작성에 빠져버리면 내가 작성한 코드에 대한 설명이나 사용한 라이브러리, 진행상황을 문서화하고 공유해야하는 부분을 제때 공유할 수 없게 되었고 이로 인한 충돌이나 별도의 상의과정이 필요한 문제가 발생하였다.
- 리액트 사용이 처음이라 걱정했지만 다른 조원이 작성한 코드를 읽어보고 에러가 나는 부분에 대해 함께 이야기 하는 과정이 리액트를 익히고 리액트에 대한 이해도를 높이는데 도움이 되었다.

### 김혜인

#### ✅ 전체 상품

- 전체 상품 그리드 생성
- useEffect 를 이용하여 제품 조회 API 정보 가져오기
- 가져온 정보를 useState 를 이용하여 저장하고 반복적으로 화면에 출력
- useNavigate, Link 기능을 이용하여 주소로 이동하면서 데이터 전달

 <br />

#### ✅ 검색

- useSearchParams 를 이용하여 query 값을 탐지하고 검색어를 저장
- useEffect 를 이용하여 제품 검색 API 정보 가져와 [태그(채소), 일반검색어와 태그(유기농 채소), 일반검색어(유기농)] 으로 구분하여 저장
- 가져온 정보를 useState 를 이용하여 저장하고 검색어에 맞는 상품들을 반복적으로 화면에 출력
- 가져올 정보가 없다면 없다고 화면에 출력하고 빈 검색어를 검색하면 검색어를 입력하라고 alert 창 출력
- useNavigate 기능을 이용하여 주소로 이동하면서 데이터 전달

<br />

#### ✅ 구매하기

- 단일 상품 구매인 상세페이지와 다중 상품 구매인 장바구니에서 넘겨받은 제품을 각각 product 와 products 로 구분하여 정보를 저장하여 화면에 출력
- Recoil 로 저장된 user 정보를 받아 화면에 출력
- useEffect 로 계좌 목록 및 잔액 조회 API 정보를 받아와서 useState 로 정보 저장한 후 화면에 출력
- 출력한 각 계좌 클릭 시 결제할 때 보내줄 계좌 id 값 저장
- 제품 거래(구매) 신청 API 로 저장된 제품 id 와 계좌 id 값을 body 값으로 함깨 보내 결제 요청
- 장바구니의 다중 상품 구매 시 각 상품의 개수만큼 구매 API 를 실행
- 연결된 계좌가 없거나 선택된 계좌가 없을 때는 예외 처리
- 구매 API 실행 시 제품에 대한 결제만 가능하여 결제하기 버튼 클릭할 때 상품 결제가 완료된 후 배송비 상품을 추가하고, 응답받은 해당 상품 id 를 저장하여 결제하고, 삭제를 반복
- 응답 중 에러가 생길 경우 결제가 불가능하도록 예외처리
- 배송지정보 form 에 대한 구체적인 기능은 구현하지 못함

<br />

#### ✒ 느낀점 및 피드백 받고 싶은 부분

1. 느낀점

- 초기 세팅에 많이 신경을 쓰지 못해 충돌도 나고 폴더 구조나 파일 생성에 애로사항이 있었습니다.
- 리액트의 장점인 컴포넌트화를 잘 이용하지 못한 것 같아 아쉽습니다.
- 검색 기능 구현 시 검색어 구분 로직을 구현을 위한 로직을 구성하여 효율적이지 못한 코드를 작성한 것 같아 아쉬웠습니다.
- API 로만 기능들을 구현하다보니 로그인, 장바구니 같은 기능들을 완벽히 구현하지 못해 백엔드의 필요성을 느꼈습니다

2. 피드백 받고 싶은 부분

- 구매하기 기능 구현 시 구매 API 실행할 때 하나라도 에러가 생기면 결제가 되지 않도록 구현하고 싶습니다. 제 생각으로는 에러가 나면 이전에 결제한 값들을 저장하여 하나씩 결제를 취소해주는 것이 최선인데 이 방법 외의 좋은 방법이 있을까요?
- 배송지정보 form 은 시간 상 구현하지 못했는데 react-hook-form 라이브러리를 사용하는 것이 나을지 직접 로직을 작성해 구현하는 것이 나을지 궁금합니다.

 <br />

### 김지원

##### 맡은 부분

- header
- gnb
- sort button(가격순 정렬 버튼)
- recentlyViewed(최근 본 상품)
- myKeepProducts(구현 못 했어요 ㅜㅜ)

##### 프로젝트를 하며 느낀점

- 초기 프로젝트 세팅을 세심하게 할 필요성을 느꼈다. 프로젝트를 일단 시작하는 것에 급급해서 코드 컨벤션이나 컴포넌트 작업 방식에 대한 충분한 논의가 이루어지지 않아 추후 수정한 부분이 많았다.
- 문서화를 많이 하지 못 했다. 앞으로는 git issue를 적극적으로 활용해 발생한 문제점과 해결 과정을 적어야겠다.
- react 공부를 아주 아주 많이 해야겠다 .. 부족한 점이 많다. 다음 기회에는 api와 firebase를 활용하는 작업을 더 많이 해보고 싶다.

##### 질문사항

- gnb에 대한 질문입니다. 현재 gnb 컴포넌트에 호버할 경우 gnbDepth 컴포넌트를 보여주는데 이 동작을 구현하기 위해 targetGnb 변수를 사용합니다. 이 방식이 조금 복잡하게 느껴졌는데 다른 방법이 있을까요?
- 정확도순, 낮은가격순, 높은가격순으로 상품을 정렬하는 버튼에 대한 질문입니다. 현재는 버튼을 클릭할 경우, 기존의 제품 배열을 복사한 뒤 가격순으로 상품을 재정렬합니다. 지금은 상품 개수가 많지 않아 이 방법을 사용할 수 있었는데 현업에서 상품이 많을 때는 어떤 방식으로 상품을 정렬하나요?
- 현재는 최근 본 상품을 로컬스토리지에 저장해서 불러오고 있습니다. 현업에서는 최근 본 상품을 어디에 저장해서 어떻게 불러오나요?

### 홍혜원

⚙️ 기능 구현

1. 상품 상세페이지

- [x] 전체 상품에서 원하는 상품 클릭 시, id 전달받고 해당 id로 상품 detail api 불러옴
- [x] 상품이 soldOut일 때, 구매하기와 장바구니 버튼 안보이게 하고 품절 메세지 보이게 하기
- [x] 로그인이 되어있지 않을 때, alert창 나오고 로그인 페이지로 이동

2. 장바구니

- [x] 장바구니 처음 들어오면 무조건 전체 체크 되어 있음
- [x] 전체 체크 버튼 클릭 시, 개별 상품 체크 상태도 바뀜
- [x] 개별 상품이 전부 체크 되어 있을 경우, 전체 체크박스도 체크 됨
- [x] 품절 상품은 blur처리 해줌
- [x] 품절 상품은 수량 변경 불가능하게 하고, 구매페이지로 넘어가지 않음
- [x] 품절 상품이 장바구니에 담겨져 있을 경우, alert창 나옴
- [x] 상품 수량 조절 기능 추가
- [x] 상품 삭제 기능 추가
- [x] 선택 상품 삭제 기능 추가
- [x] 선택 상품만 구매페이지로 넘어갈 수 있게 함
- [x] 선택 상품의 총 가격 보여줌
- [ ] 선택된 상품이 구매가 되었을 경우, 장바구니에서 해당 상품 삭제됨

3. 라우터 경로 보호

- [x] 어드민 계정 설정함
- [x] 어드민 계정일 경우만 어드민 페이지 UI가 보임
- [x] 어드민 계정이 아닐 경우, 주소창에 어드민 페이지 주소 입력하면 홈으로 되돌아감
- [x] 로그인이 되어있지 않을 경우, 주소창에 수기로 장바구니, 구매페이지 입력해도 홈으로 되돌아감

#### 아쉬웠던 점 및 어려웠던 점

- 협업하는데 있어 어려움이 많았습니다.
- 프로젝트 시작 전에, 프로젝트 트리를 만들지 않고 시작하여 어떤 기능을 구현해야 할지 바로 생각나지 않아 아쉬웠습니다.
  - 프로젝트 폴더 구조를 어떻게 정해야 할지
  - 페이지 단위 혹은 큰 로직 단위로 구분하여 역할을 분배하였는데, 어떤 세부 기능을 구현해야 할지 문서화 하지 않아 프로젝트를 진행하는데 있어 어려웠습니다.
- 실력 부족으로 인해, 다른 사람의 코드를 바로 이해하기에도 어려웠고 볼 시간도 부족했습니다.
  - 문서화를 통해 팀원들끼리 어떻게 구현했는지 공유하자고 했으나, 문서화 작성도 어떤식으로 해야할지 감이 안잡혔고 자세히 적자니 시간이 너무 많이 소비되었습니다.
- 자바스크립트 대신 리액트로 프로젝트를 진행하는데 있어 장단점
  - 장점 : 그 때마다 필요한 라이브러리를 도입하여 프로젝트 진행시간이 매우 빨라짐
  - 단점 : 아직 자바스크립트가 완벽하지 않은데 너무 라이브러리에 의존적인거 같아 불안감이 생겼습니다. 이럴경우 계속 리액트를 공부해야할지 아니면 다시 자바스크립트 공부를 해야할지 고민이 됩니다.

### 황이삭

- 역할 분담이 엄격하게 이루어지지 않은 것 같다.
- 초기 프로젝트 세팅에 신경 써야 될 것 같다. 각자가 세팅에 손을 대면서 충돌이 너무 심하게 났다. 세팅을 미리 정하고 한명이 만들어서 배포하면 다른사람들이 받는 방식으로 바꿔야 할 듯
- 코드 컨벤션 정하기 어려웠다.
  - 모두가 사용할 코드 형식이 무엇인지 정하는 게 힘들었고, 작업 효율성과 엄밀함 사이에서 밸런스 잡는 것이 까다로웠다.
- 문서화의 어려움
  - 문서화 하는 것이 시간이 너무 많이 걸린다.
  - 문서화를 잘 안하려고 한다
  - 이미지도 넣고 싶기도 하고, 더 자세하게 적고 싶을 때도 있었지만 시간적 압박과 문서가 쓸데없이 길어지는 문제도 같이 생겼다.
  - 플랫폼을 정하기 어려웠다. issues 게시판, 노션을 이용했는데 문서가 너무 파편화 되었다.
  - 코딩하느라 잠시 놓으면 뭘 문서화 할지 모르게 돼버린다. 그렇다고 이 둘을 병행하니 작업 효율이 너무 안나왔다.
  - 작성해도 잘 안읽는 거 같다 (좀 더 읽을만한 내용으로 개선해야 할 듯)
- 리액트로 컴포넌트 별로 작업을 나눠서 맡으니까 충돌도 별로 없고 협업하기 좋았던 것 같다.
- 깃허브에 좀 더 익숙해진 것 같다
