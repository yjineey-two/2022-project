import React from "react";

// core components
import IndexNavbar from "components/Navbars/indexNavbar.js";
import MainIndex from "views/Main/index.js";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <MainIndex />
      <div className="main"></div>
    </>
  );
}

export default Index;
