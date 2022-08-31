// 22.08.30 (화) - 예습

/* eslint-disable */ 
import React, { useState, useMemo, useEffect } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

const memoization = () => {
  const [number, setNumber] = useState(1);
  const [isKorea, setIsKorea] = useState(true);

  // 원시타입 (string, number, null, undefined 등등)
  // 객체타입 (object, array)

  // const location = isKorea ? '한국' : '외국';
  // lovation 주소가 계속해서 바뀌기 떄문에 이전값과 다른값으로 인식 (ex)useEffect가 계속 호출되는것을 볼 수 있음
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    } 
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출')
  }, [location]);

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>

          <h2>하루에 몇끼 먹어요?</h2>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <hr />
          <h2>어느 나라에 있어요?</h2>
          <p> 나라 : {location.country}</p>
          <button onClick={()=> setIsKorea(!isKorea)}> 비행기 타자 ! </button>

        </Container>
      </div>
    <IndexFooter />      
  </>
  );
};

export default memoization;