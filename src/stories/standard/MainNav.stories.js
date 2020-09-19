import React from "react";
import {
  MainNav,
  MainNavBrand,
  MainNavItem,
  MainNavBurger,
  MainNavMenu
} from "../../components/MainNavNew";

const Template = (args) => (
  <MainNav {...args}>
    <MainNavBrand>
      <MainNavItem>Brand</MainNavItem>
      <MainNavBurger></MainNavBurger>
    </MainNavBrand>
    <MainNavMenu>

    </MainNavMenu>
  </MainNav>
);

// Each story then reuses that template
export const Masthead = Template.bind({});

Masthead.args = {};

export default {
  title: "Standard Components/Main navigation",
  component: MainNav,
};
