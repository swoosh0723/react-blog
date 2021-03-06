/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //ES6 destructuring 문법
  let [title, titleChange] = useState([
    "남자 추천 성수동 맛집",
    "남자 추천 강남 맛집",
    "남자 추천 상왕십리 맛집",
  ]);

  let [modal, modalChange] = useState(false);
  let [titleNumber, titleNumberChange] = useState(0);
  let [contents, contentsChange] = useState('');

  // react 반복문
  function testUI() {
    var array = [];

    for (var i = 0; i < 3; i++) {
      array.push(<div>안녕</div>)
    }

    return array
  }

  function openModal() {
    if (modal == false) {
      modalChange(true)
    } else {
      modalChange(false);
    }
  }

  function titleChangeGender() {

    // state는 복사본을 만들어서 수정하세요
    // 그런데 state는 deep copy를 합시다
    // const newArray = title; 이건 값 공유, reference data type 특징
    // title[0] = 21321; 이렇게 하면 안된다.
    // 이렇게 사용하면 복사해서 독자적으로 사용하는 것이 아니라 값공유임!

    // deep copy
    // 리액트의 대원칙: immutable data
    const newArray = [...title];
    // 1. 0번째 title값 변경
    // newArray[0] = '여자 추천 성수동 맛집'
    // 2. 응용 문제 정렬하기 성공!
    newArray.sort();

    titleChange(newArray)
  }



  let [likeCount, likeCountChange] = useState(0);
  // likeCountChange(100); likeCountChange는 함수


  // map()은 유사 반복문 입니다.
  const array = [2, 3, 4];

  const newArray = array.map(function (a) {
    return a * 2;
  })

  console.log(newArray);

  let posts = "강남 고기 맛집";
  // let style = { color: "pink", fontSize: "30px" };

  // UI 만드는법
  // 1. UI와 관련된 중요 정보들을 state로 저장해놓고
  // 2. state에 따라서 UI가 수정되게 만듬

  return (
    <div className="App">
      <div className="black-nav">Blog</div>
      <button
        type="button"
        onClick={titleChangeGender}
      >
        성별 필터 버튼
      </button>

      {
        // map에서 i는 0,1,2 ... 
        title.map((titleText, i) => {
          return (
            <div className="list" key={i}>
              <h3
                onClick={() => { titleNumberChange(i) }}
              >
                {titleText}

                <button
                  type="button"
                  onClick={() => { likeCountChange(likeCount + 1) }}
                >
                  ❤️
                </button>
                {likeCount}
              </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className="publish">
        <input
          onChange={(e) => { contentsChange(e.target.value) }}
        />
        <button
          type="button"
          onClick={() => {
            let arrayCopy = [...title];
            arrayCopy.unshift(contents);
            titleChange(arrayCopy)
          }}
        >
          저장
        </button>
      </div>

      <div className="publish">
        <input
          onChange={(e) => { contentsChange(e.target.value) }}
        />
        <button

          onClick={() => {
            let arrayChange = [...title];
            arrayChange.unshift(contents);
            titleChange(arrayChange);
          }}
        >
          저장
        </button>
      </div>


      {/* unshift 배열앞에 추가하는 문법 */}
      {/* 
      - input된 value 변수로 만들고
      - 저장버튼을 누르면 그 변수를 어디에 추가해야함 
      */}

      {/* {contents}
      <br />
      <input
        onChange={(e) => { contentsChange(e.target.value) }}
      /> */}

      {/* onChange, onInput 두개 있음 */}


      {/* 
      <button onClick={() => { titleNumberChange(0) }}>버튼1</button>
      <button onClick={() => { titleNumberChange(1) }}>버튼2</button>
      <button onClick={() => { titleNumberChange(2) }}>버튼3</button> 
      */}

      <button
        onClick={() => { modalChange(!modal) }}
      >
        모달버튼2
      </button>
      {/* <Test></Test> */}

      <Profile></Profile>

      {/* 
        javascript 사용하려면 사용하면 된다
        if문은 인식 못한다

        1 < 3 ? console.log('true') : console.log('false')

        1 < 3 if문의 조건식
        ? console.log('true') 실행할 코드
        : console.log('false') else 실행할 코드

        리액트의 관습 null
      */}


      {/* 
      App은 부모 컴포넌트
      Modal은 자식 컴포넌트
    
      App이 가진 state를 사용 가능하게 전송가능 

      이 문법의 이름은 props
      */}
      {
        modal === true
          ? <Modal title={title} titleNumber={titleNumber}></Modal>
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.title[props.titleNumber]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

function Test(props) {
  return (
    <>
      <div class="test">
        <h2>{props.title[props.titleNumber]}</h2>
      </div>
    </>
  )
}

export default App;

/*
// 220124 //
react 가장 큰 장점
데이터 바인딩이 쉽다
데이터 바인딩이란?
api로 넘어오는 데이터를 변수로 넣는다.
변수 이미지 함수 스타일 등등 .... 쉽게 넣을 수 있다
style은 중괄호 object 형식으로
*/

/*
// 220125 //
데이터는
1. 변수에 넣거나
2. state에 넣거나

state는 
1. 변수대신 사용하는 데이터 저장공간
2. useState()를 이용해 만들어야함
  2-1. [데이터, 데이터 변경]

state의 장점
웹이 App처럼 동작하게 만들고 싶어서
state는 변경되면 HTML이 자동으로 재렌더링 됩니다
그냥 변수로 데이토 만들고 사용하면 새로고침을 해야함
!!새로고침없이 스무스하게 만들고싶다!!! useState
자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 사용
*/


/*
// 220127 //
아래처럼은 사용 못한다.
return (
  <div>
  </div>
  <div>
  </div>
)

HTML 한단어로 줄여서 쓸 수 있는 방법: 리액트의 component 문법
*Component 유의사항*
1. 이름은 대괄호
2. return() 안에 있는건 태그하나로 묶어야함
  2-1. 아니면 의미없는 div를 쓰기 싫으시면 <> </> 이걸로 묶음

어떤것을 Component로 만드는게 좋을까
- 반복출현하는 UI
- 자주 변경되는 HTML UIemf
  - 성능적으로 이점이 있다

Compoent 많이 만들면 단점
- state 사용시 복잡해짐

필요한것을 적절히 Component 시켜야한다
*/



/*
  예전의 react 문법
  알아두는 이유
  예전 react 수정할때가 있다.
  
  1. state저장할 땐 constructor() 안에 this.state 라는 변수에 전부 보관하셔야합니다.
  2. 그리고 꺼내쓸 때는 this.state.state명 이렇게 쓰시면 됩니다.
*/

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'kim', age: 30 }
  }

  changeName = () => {
    this.setState({ name: 'park' })
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button
          onClick={this.changeName}
        >
          프로필 변경
        </button>
      </div>
    )
  }
}

