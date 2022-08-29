/* eslint-disable */ 
import React, { useState, useRef, useEffect } from 'react'
import { Container } from "reactstrap"
// import TestUseMemo from "./useMemo.js"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

const App = () => {
  const [renderer, setRenderer] = useState(0);

  // 리렌더링, 렌더링을 발생시키지 않아야 되는 상황에서 사용
  const countRef = useRef(0);
  const inputRef = useRef();
  const apple = useRef();
  const banana = useRef();
  let countVar = 0;

  // 2번째 인자 공백일때, unmount 는 실행시키지 않는다.
  useEffect(()=> {
    console.log('렌더링 - inputRef >>> ', inputRef);
    inputRef.current.focus();
  }, []);

  const login = () =>{
    // TestUseMemo
    alert (`환영합니다 ${inputRef.current.value}!`)
  }

  // 렌더링 누르면, REF 값은 변화하지 않는다.
  const doRendering = () => {
    setRenderer(renderer + 1);
    console.log('렌더링 >>> ', renderer)
  }
  
  const increareRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref >>> ' , countRef.current)
  }

  const increareVar = () => {
    countVar = countVar + 1;
    console.log('ref >>> ' , countVar)
  }

  const printResults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`)
  }

  const checkbox = [];
  const changeHandler = (checked, name) => {
    console.log(`apple >> ${apple.current.checked}`)
    console.log(`banana >> ${banana.current.checked}`)
    
    if (checked === true) {
      checkbox.push({checked, name});
    } else {
      checkbox.pop({checked, name});
    }

    console.log('checkbox >>> ',checkbox);
    console.log('--------------------------')
  }

  return (
    <>
    <IndexHeader />
    <div className="section profile-content">
      <Container>
        <div>　</div>
        <input ref = {inputRef} type="text" placeholder='userNmae' />
        <button onClick = {login}> 로그인 </button>

        <div>　</div>
        <p>Ref : {countRef.current}</p>
        <p>State : {countVar}</p>
        <button onClick= {doRendering} > 렌더!</button>
        <button onClick= {increareRef} > Ref 올려</button>
        <button onClick= {increareVar} > state 올려</button>
        <button onClick= {printResults} > Ref Var 값 출력</button>
        
        <div>　</div>
        <input type='checkbox' ref={apple} onChange={(e)=>{ changeHandler(e.currentTarget.checked, 'apple')}}/>  사과　
        <input type='checkbox' ref={banana} onChange={(e)=>{ changeHandler(e.currentTarget.checked, 'banana')}} /> 바나나

      </Container>
    </div>
    <IndexFooter />      
  </>
  );
};

export default App;
