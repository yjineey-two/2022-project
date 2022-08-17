/*!
=========================================================
* Jineey React - v1.0
* Start Date - 2022.08
=========================================================
*/

import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes/index.js";
import Index from "views/Index.js";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// APP 을 그려줄건데 root 가 있는 index.html에 그려줄거야 (index.html 파일에서 ID가 root인 엘리먼트를 찾아 뿌려줌)
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>

    <Index/>
    <Routes/>
  </BrowserRouter>,
  document.getElementById("root")
);
