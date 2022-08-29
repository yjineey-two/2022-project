/* eslint-disable */ 
import React, { useState, useReducer } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"
const useCallback = () => {
  return (
    <>
    <IndexHeader />
    <div className="section profile-content">
      <Container>
        <div>　</div>
        <div>　</div>


        
      </Container>
    </div>
    <IndexFooter />      
  </>
  );
};

export default useCallback;