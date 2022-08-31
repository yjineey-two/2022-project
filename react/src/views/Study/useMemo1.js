// 22.08.30 (화) - 예습

/* eslint-disable */ 
import React, { useState, useMemo, useEffect } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

const hardCalculate = (number) => {
  console.log('어려운계산')
  for (let i=0; i<9999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log('쉬운 계산')
  return number + 1;
};

// 해당 함수를 렌더링 시키면 안에 변수 값이 초기화가 되므로 useMemo 는 밖에 보관
const memoization1 = () => {
  
  // state 값이 바뀐다는 말은, useMemo 컴포넌트(함수)가 다시 실행된다는 말
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  
  // useMemo 안에 변수 값이 초기화 되면서 아래의 hardSum, easySum 값이 초기화 되면서 다시 계산
  // const hardSum = hardCalculate(hardNumber);
  // const easySum = easyCalculate(easyNumber);
  
  // 렌더링 되면서 hardSum과 easySum 모두 렌더링 되는데 비효율적이다!! 필요한 것만!!! --> useMemo
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  useEffect(() => {
    console.log('useEffect 호출')
  }, []);

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
          <h3>어려운계산기</h3>
          <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(e.target.value)}
          />
          <span> + 10000 = {hardSum}</span>
          <hr />
          <h3>쉬운계산기</h3>
          <input
            type="number"
            value={easyNumber}
            onChange={(e) => setEasyNumber(e.target.value)}
          />
          <span> + 1 = {easySum}</span>
        </Container>
      </div>
    <IndexFooter />      
  </>
  );
};

export default memoization1;