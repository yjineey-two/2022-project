/* eslint-disable */ 

import React, { useState, useReducer } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

// money 에 들어가 있는 state 값 값, action 은 reducer에게 변경해달라고 값 넣기
const reducer = (state, action) =>{
  console.log('reducer가 일을 합니다!', state, action);
  switch(action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload
    default:
      return state;
  }
}

function HookPage() {
  const ACTION_TYPES = {
    deposit: 'asdfasfd',
    withdraw: 'widthdraw'
  };
  const [number, setNumber] = useState(0);

  // useReducer는 2개의 인자를 받는다.
  // money state 는 reducer를 통해서만 가능하며, dispatch에 action 값을 넣어줘야 한다.
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
          <div>
            <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
            <p>잔고 : {money} 원</p>
            <input
              type="number"
              value={number}
              onchange={(e) => setNumber(parseInt(e.target.value))}
              step="1000"
            />
            {/* action 으로 타입 deposit을 넣어준거다 */}
            <button onClick={() => {
              dispatch({type: 'deposit', payload: number});
            }}>
              예금
            </button>
            <button onClick={() => {
              dispatch({type: 'withdraw', payload: number});
            }}>
            출금
            </button>
          </div>
      </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

