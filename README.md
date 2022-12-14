

# 블로그 검색 서비스 (Frontend)
## 목차
- `개요`
- `프로젝트 구성`
- `프로그램 실행방법`
- `테스트 방법`
- `접근/해결방식`
- `외부 라이브러리`
- `결과 화면`

---

## 개요
블로그 검색 서비스
1. 계정 로그인, 회원가입
2. 블로그 검색 (카카오 API 연동)
3. 인기검색어
4. 북마크 즐겨찾기
---

## 프로젝트 구성
분야| stack |
--|--|
 |언어 | Vue, ES6 |
 |서버 | Node |
 |API 테스트 툴 | Swagger |
 | IDE | VS CODE
 | 기술 | vuex, vue-router, axios
 | 테스트 | JEST,  VUE test-utils


---

## 프로그램 실행방법
### 터미널 환경
- Git, Vue 는 설치되어 있다고 가정.
```
마스터 브랜치 기준
$ git clone https://github.com/moonsungwan/search-blog-frontend.git
$ cd search-blog-frontend
$ npm install
$ npm run serve

계정정보 (ID, 비밀번호 - 기본값으로 설정됨)
1. account1, 1234
```
- 접속 URI: [http://localhost:3000/](http://localhost:3000/)

### 테스트 방법
```
서버 실행 후 진행
$ cd search-blog-frontend
$ npm test Login.test.js
```
---

## 외부 라이브러리
* ### FE
    * vue-pagination-2 (페이징 처리)
    * vue-toastification (토스트 경고창)

---
## 접근/해결방식
* ### 계정 인증
    * 로그인 유효성 검사
      * 테스트를 위해 기본값 설정
        * account1 (아이디) / 1234 (비밀번호)
      * 아이디 : 영문(소문자) + 숫자 조합 (6~12 글자)
      * 비밀번호 : 아무 글자 가능 (4~15 글자)
    * 회원가입 유효성 검사
      * 테스트를 위해 기본값 설정
        * account2 (아이디) / 1234 (비밀번호) / 회원가입테스트 (닉네임)
      * 아이디 : 영문 + 숫자 조합 (6~12 글자)
      * 비밀번호 : 아무 글자 가능 (4~15 글자)
      * 닉네임 : 아무 글자 가능 (최대 15 글자)
* ### 블로그 검색
    * 검색어 입력시 sessionStorage 저장
    * 검색어 필수, 특수 문자 입력 불가 (Feign Client escape)
    * 기본 검색 조건 
      * '정확도순'
      * 최초 진입시 검색결과가 없으면 목록 출력 하지 않음
    * 검색시 인기검색어 등록 API 호출
    * 페이지 이동 및 정렬순서 변경시 인기검색어 목록 갱신
    * 블로그 검색 목록에서 25개 단위로 페이징 출력
    * 블로그 제목 클릭시 북마크 URL 새창 열기
* ### 인기 검색어
    * 검색어 입력시 저장
    * 왼쪽 영역에 검색어 카운트 순으로 조회 (최대10개)
    * 인기 검색어 클릭시 검색 기능
* ### 북마크 즐겨찾기
    * 북마크 목록 클릭시 로그인 한 정보에 맞는 북마크 목록 이동
    * 블로그 삭제 클릭시로그인 한 정보로 삭제 처리
    * 블로그 중복 등록시 예외처리
    * 북마크 제목 클릭시 북마크 URL 새창 열기 
---
## 결과화면
* ### 로그인
![image](https://user-images.githubusercontent.com/18672444/184065827-f8fbae9c-33e9-49fe-9379-c4a9c3fafc9f.png)

* ### 회원가입
![image](https://user-images.githubusercontent.com/18672444/184065901-0f886a9f-72f8-46b3-bfa0-81faf73c4f86.png)

* ### 블로그 검색 (캡처를 위해 10개 표시 - 기본 25개)
![image](https://user-images.githubusercontent.com/18672444/183687422-11d1545a-bcab-4d83-82e9-d8487daeaae6.png)

* ### 북마크
![image](https://user-images.githubusercontent.com/18672444/183687500-e5eafa4e-7997-42f4-b726-7c20b855449d.png)
