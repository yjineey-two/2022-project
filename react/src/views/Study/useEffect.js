// 22.08.18 (목) - 스터디

/* eslint-disable */ 
import React, { useState } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"
import Timer from "./components/timer.js"

function HookPage() {

  const [showTimer, setShowTimer] = useState(false);
  
  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
      <Container>
        <div>　</div>
        <div>　</div>
        {/* false 이면 재렌더링이 이뤄지지 않는다, true 여야만 */}
        {showTimer && <Timer />}
        <div style={{ fontSize:'30px', fontWeight: 'bold' }}>
          <button onClick={()=>{
            setShowTimer(!showTimer)
          }}> 
            Toogle Timer
          </button>
        </div>
      </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

