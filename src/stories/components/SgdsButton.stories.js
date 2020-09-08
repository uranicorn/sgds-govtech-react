import React from "react";
import SgdsButton from "../../components/Button";

const Template = (args) => <SgdsButton {...args}>Click Me</SgdsButton>;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
};

export default {
  title: "Components/SGDS Button",
  component: SgdsButton,
};
