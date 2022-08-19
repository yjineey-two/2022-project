import React from "react";
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Jineey
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
