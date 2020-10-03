import React from "react";
import { formatCode } from "../lib/utils";
import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { Footer } from "../../src/components";
import {
  Footer as FooterComposable,
  FooterTop,
  FooterBottom,
} from "../../src/components/standard";
import { default as SgdsContainer } from "../../src/components/Container";
import Row from "../../src/components/Row";
import Col from "../../src/components/Col";
import { Page, Title, Divider } from "../shared-styles";

const links = {
  privacy: " ",
  termsOfUse: " ",
  contact: " ",
  feedback: " ",
};
const code1 = `
import { Footer } from 'sgds-govtech-react' 

<Footer title="Singapore Design Systems" date="15 Aug 2019" />

`;
const code2 = `
import { Footer } from 'sgds-govtech-react' 

<Footer title="Singapore Design Systems" date="15 Aug 2019" isFluid/>

`;
const code3 = `
const links = {
  privacy: " ",
  termsOfUse: " ",
  contact: " ",
  feedback: " "
};

<Footer title="Singapore Design Systems" date="15 Aug 2019" links={links}/>
`;
const code4 = `
const links = {
  privacy: " ",
  termsOfUse: " ",
  contact: " ",
  feedback: " "
};
<Footer title="Singapore Design Systems" date="15 Aug 2019" links={links}>
<div className="col is-3">
    <p className="has-text-white"><b>Category 1</b></p>
    <p><a href="">Link</a></p>
    <p><a href="">Link</a></p>
</div>
<div className="col is-3">
    <p className="has-text-white"><b>Category 2</b></p>
    <p><a href="">Link</a></p>
    <p><a href="">Link</a></p>
</div>
</Footer>
`;

const MyCustomLink = (props) => {
  return <a href={props.href || props.to || ""}>{props.children}</a>;
};

const FooterStories = (props) => {
  return (
    <Page>
      <Title>
        <h2>Footer</h2>
      </Title>
      <section className="sgds-section">
        <h3>
          The footer provides secondary navigation, guiding users to information
          about the website, organisation or product
        </h3>
        <p>
          The footer is a DSS component. It should be present in all 'gov.sg'
          websites.
        </p>

        <Divider />

        <h4>Default Footer</h4>
        <Footer title="Singapore Design Systems" date="15 Aug 2019"></Footer>
        <SyntaxHighlighter>{formatCode(code1)}</SyntaxHighlighter>

        <Divider />

        <h4>Fluid Footer</h4>
        <Footer
          title="Singapore Design Systems"
          date="15 Aug 2019"
          isFluid
        ></Footer>
        <SyntaxHighlighter>{formatCode(code2)}</SyntaxHighlighter>

        <Divider />

        <h4>Footer with necessary links</h4>

        <Footer
          title="Singapore Design Systems"
          date="15 Aug 2019"
          links={links}
        ></Footer>
        <SyntaxHighlighter>{formatCode(code3)}</SyntaxHighlighter>

        <Divider />

        <h4>Footer with navigational links and required links</h4>
        <Footer
          title="Singapore Design Systems"
          date="15 Aug 2019"
          links={links}
        >
          <div className="col is-3">
            <p className="has-text-white">
              <b>Category 1</b>
            </p>
            <p>
              <a href="">Link</a>
            </p>
            <p>
              <a href="">Link</a>
            </p>
          </div>
          <div className="col is-3">
            <p className="has-text-white">
              <b>Category 2</b>
            </p>
            <p>
              <a href="">Link</a>
            </p>
            <p>
              <a href="">Link</a>
            </p>
          </div>
        </Footer>
        <SyntaxHighlighter>{formatCode(code4)}</SyntaxHighlighter>

        <Divider />

        <h4>Composable Footer</h4>
        
        <FooterComposable>
          <FooterTop
            title="Design System"
            builtInLinks={[
              <MyCustomLink to="/contact">Contact</MyCustomLink>,
              <a href="/feedback">Feedback</a>,
            ]}
          >
            <SgdsContainer>
              <Row>
                <Col is={3}>
                  <p>A description of this site</p>
                </Col>
                <Col is={3}>
                  <strong style={{ color: "white" }}>Links</strong>
                  <p>
                    <a href="https://www.example.com">An external site</a>
                  </p>
                  <p>
                    <MyCustomLink to="/another-page">Another page</MyCustomLink>
                  </p>
                </Col>
              </Row>
            </SgdsContainer>
          </FooterTop>
          <FooterBottom
            builtInLinks={[
              <a href="https://example.com" target="_blank">
                Report vulnerability
              </a>,
              <MyCustomLink to="/terms">Terms of Use</MyCustomLink>,
            ]}
          >
            <SgdsContainer>
              <Row>
                <Col>
                  <div>
                    <span className="sgds-icon sgds-icon-facebook"></span>
                    <span className="sgds-icon sgds-icon-instagram"></span>
                    <span className="sgds-icon sgds-icon-linkedin"></span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="has-text-right-desktop has-text-right-tablet has-text-left-mobile">
                  <p className="is-hidden-touch">
                    © 2020 Government of Singapore. Last Updated 23 Sep 2020
                  </p>
                  <p className="is-hidden-desktop">
                    © 2020 Government of Singapore
                  </p>
                  <p className="is-hidden-desktop last-updated">
                    Last Updated 23 Sep 2020
                  </p>
                </Col>
              </Row>
            </SgdsContainer>
          </FooterBottom>
        </FooterComposable>
      </section>
    </Page>
  );
};

export default FooterStories;
