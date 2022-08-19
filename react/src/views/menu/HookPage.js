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
        <button onClick={()=>{
          setShowTimer(!showTimer)
        }}> 
          Toogle Timer
        </button>
      </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

