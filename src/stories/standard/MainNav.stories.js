import React, { useState } from "react";
import {
  MainNav,
  MainNavBrand,
  MainNavBurger,
  MainNavDropdown,
  MainNavItem,
  MainNavMenu,
  MainNavMenuStart,
  MainNavMenuEnd,
} from "../../components/MainNavNew";
import Row from "../../components/Row";
import Col from "../../components/Col";

const MyCustomLinkComponent = (props) => {
  return (
    <a href={props.to} className={props.className}>
      {props.children}
    </a>
  );
};
const MyMenuHeader = (props) => {
  return <strong className={props.className}>{props.children}</strong>
}

const Template = (args) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <MainNav {...args}>
      <MainNavBrand>
        <MainNavItem>My Brand</MainNavItem>
        <MainNavBurger
          onClick={() => setShowNavMenu(!showNavMenu)}
          expand={showNavMenu}
        />
      </MainNavBrand>
      <MainNavMenu expand={showNavMenu}>
        <MainNavMenuStart>
          <MainNavItem href="#!">Who we are</MainNavItem>
          <MainNavItem href="#!" isUpperCase>isUpperCase</MainNavItem>
          <MainNavItem href="#!" isTab>isTab</MainNavItem>
          <MainNavDropdown
            label="Who we are"
            onClick={() => console.log("Clicked!")}
          >
            <MainNavItem>Dropdown item 1</MainNavItem>
            <MainNavItem as={MyCustomLinkComponent} to="/dropdown-item-2">
              Dropdown item 2
            </MainNavItem>
          </MainNavDropdown>
        </MainNavMenuStart>
        <MainNavMenuEnd>
          <MainNavDropdown label="Mega Dropdown" isMega>
            <Row>
              <Col size={4}>
                <MainNavItem as={MyMenuHeader}>Mega menu column 1</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
              </Col>
              <Col size={4}>
                <MainNavItem as={MyMenuHeader}>Mega menu column 2</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
              </Col>
              <Col size={4}>
                <MainNavItem as={MyMenuHeader}>Mega menu column 3</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
                <MainNavItem>Mega menu link</MainNavItem>
              </Col>
            </Row>
          </MainNavDropdown>
          <MainNavItem href="www.example.com">External Link</MainNavItem>
          <MainNavItem>Not a link</MainNavItem>
          <MainNavItem></MainNavItem>
        </MainNavMenuEnd>
      </MainNavMenu>
    </MainNav>
  );
};

// Each story then reuses that template
export const MainNavigation = Template.bind({});

MainNavigation.args = {};

export default {
  title: "Standard Components/Main navigation",
  component: MainNav,
};
