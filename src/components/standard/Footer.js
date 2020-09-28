import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export function Footer({ children }) {
  return <footer className="sgds-footer">{children}</footer>;
}

export function FooterTop({ children, title, builtInLinks = [] }) {
  return (
    <div className="top-section">
      <Container>
        {title ? (
          <Row>
            <Col>
              <h5>
                <strong style={{ color: "white" }}>{title}</strong>
              </h5>
            </Col>
          </Row>
        ) : null}
        {children}
        {builtInLinks.length > 0 ? (
          <Row>
            <Col className="is-right-desktop-only">
              <ul>
                {builtInLinks.map((link, index) => {
                  return (
                    <li key={index} className="is-inline-block-desktop-only">
                      {link}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
}
FooterTop.propTypes = {
  builtInLinks: PropTypes.arrayOf(PropTypes.element),
};

export function FooterBottom({ children, builtInLinks = [] }) {
  return (
    <div className="bottom-section">
      <Container>
        <Row isMultiline>
          <Col>
            <ul>
              {builtInLinks.map((link, index) => {
                return <li key={index}>{link}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
      {children}
    </div>
  );
}
FooterBottom.propTypes = {
  builtInLinks: PropTypes.arrayOf(PropTypes.element),
};
