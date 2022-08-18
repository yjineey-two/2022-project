/* eslint-disable */ 

import React, { useEffect } from 'react';

function Timer(props) {
  useEffect(() => {
    const timer = setInterval(()=>{
      console.log('타이머 돌아가는중..')
    },1000);

    // 리턴값으로 함수 주기
    return() =>{
      clearInterval(timer);
      console.log('타이머가 종료되었습니다')
    }
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
}

export default Timer;



