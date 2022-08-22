/* eslint-disable */ 

import React, { useState } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

function HookPage() {
  
  const [state, setState] = useState(true)
  const [name, setName] = useState('2022.08')

  const [title, useTitle] = useState(['React', 'const [state, setState] = useState(true)', '[a, b] 형태 === [텍스트, 텍스트를 변경하기위한 함수]']) 
  const [count, setCount] = useState(0)

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
          <div style={{ color:'blue', fontSize:'30px', fontWeight: 'bold' }}>
            <span style={{marginRight: '10px'}}>{name}</span>
            <button onClick={() => {
              let temp = state;
          
              if(temp) {
                setState(false)
                setName('study 시작 !')
              }
              else {
                setState(true)
                setName('2022.08')
              };
            }}>👌
            </button>
          </div>

          <div className= 'list'>
            <h3> { title[0] } 
              <span onClick= {() => {
                setCount(count + 1);
                }
              }> 👍
              </span>
              {count}
            </h3>
            <hr/>
          </div>

          <div className= 'list'>
            <h3> { title[1] } </h3>
            <hr/>
          </div>
          <div className= 'list'>
            <h3> { title[2] } </h3>
            <hr/>
          </div>
        </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

