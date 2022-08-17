/* eslint-disable */ 

import React, { useState } from 'react'
import { Container, Row } from "reactstrap"
import IndexHeader from "components/Headers/IndexHeader.js"
import IndexFooter from "components/Footers/IndexFooter.js"

function HookPage() {
  
  let [name, setName] = useState('집에가쟈!')
  //[a,b]형태; a: 텍스트, b: 텍스트를 변경하기위한 함수
  let [title,changeTitle] = useState(['남자 코트 추천','남자 바지 추천', '남자 티 추천']) 
  let [cont,changeCont] = useState(['1번글','2번글', '3번글'])
  let [cnt,changeCnt] = useState(0)
  let [state, chagneState] = useState(false)

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
          <div style={{ color:'blue', fontSize:'50px', fontWeight: 'bold' }}><span style={{marginRight: '10px'}}>{name}</span>
            <button onClick={() => {
              let temp = state;
          
              if(temp) {
                chagneState(false)
                setName('OK!')
              }
              else {
                chagneState(true)
                setName('집에가쟈!')
              };
            }}>👌
            </button>
          </div>

          <div className='list'>
            <h3> {title[0]} <span onClick={()=>{changeCnt(cnt+1);}}>👍</span> {cnt} </h3>
            <p> {cont[0]} </p>
            <hr/>
          </div>
          <div className='list'>
            <h3> {title[1]} </h3>
            <p> {cont[1]} </p>
            <hr/>
          </div>
          <div className='list'>
            <h3> {title[2]} </h3>
            <p> {cont[2]} </p>
            <hr/>
          </div>
        </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

