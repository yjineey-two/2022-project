/* eslint-disable */ 

import React, {useEffect, useState} from 'react';

const practice = () => {
  
  const [count, setCount] = useState([0, 0]);
  const [name, setName] = useState('스터디');
  const [nameStatus, setNameStatus] = useState(true);

  // useEffect는 화면 랜더링/ mount / unmount 될 때 모두 실행됨 [{함수}, {리스트}]
  // 리스트가 빈값이면, mount와 랜더링때만 실행되고 unmount 될 때는 x
  // 리스트에 값이 있으면, 해당 값에서는 unmount 도 ok
  useEffect(()=> {
    console.log('랜더링 / Mount 실행')

    return () => {
      console.log('unMount 실행')
    }
  }, [name]);
  
  const addCount  = (n) => {
    console.log('n >> ', n);

    let newCnt = [...count];
    console.log('newCnt >> ', newCnt);

    newCnt[n] = count[n] + 1;
    console.log('newCnt[n] >> ', newCnt[n]);

    setCount(newCnt)
  }

  const changeEffect = () => {
    if (nameStatus) {
      setName('파이팅')
      setNameStatus(false)

      
    } else {
      setName('스터디')
      setNameStatus(true)
    }
  }
  return (
    <>
      　　
      <div>
      　<button onClick={()=> addCount(0)}>좋아요 ⭕ </button> 
        <span>　{count[0]}</span>
      </div>
      　　
      <div>
      　<button onClick={()=> addCount(1)}>싫어요 ❌</button> 
        <span>　{count[1]}</span>
      </div>
      　　
      <div>　<button onClick={()=> changeEffect()}>{name}</button></div>
    </>
  );
};

export default practice;