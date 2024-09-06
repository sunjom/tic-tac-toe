# 개요
Tic-tac-toe게임을 만들어 봤습니다.

# 실행 방법

```
npm run dev
```

# 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜GameBoard.jsx
 ┃ ┣ 📜GameOver.jsx
 ┃ ┣ 📜Log.jsx
 ┃ ┗ 📜Player.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜index.jsx
 ┗ 📜winning-combinations.js
```

폴더(파일)명 | 설명
--|--|
App.jsx | Player의 이름과 게임 테이블 데이터가 있는 파일로 누구의 차례인지, 누가 이겼는지/졌는지 알려주고 변화가 발생 할때마다 업데이트를 해주는 곳이다.
components/Player | Player 각각의 데이터가 이용되는 곳으로, 이름을 바꿔서 App.js파일로 데이터를 주는 역할을 한다.
components/Log | Player가 공간을 클릭할 경우, 어떤 플레이어가 어떤 장소를 클릭했는지 사용자가 볼 수 있다..
components/GameOver | 부모에게 승리유무를 받고, 게임을 초기화하는 역할을 한다.
components/GameBoard | 공간을 클릭시 발생하는 이벤트를 담당하는 역할로, 부모에게 어떤 공간이 클릭됬는지 App.js파일에게 알려주고 중복 클릭을 방지하는 역할을 한다.


