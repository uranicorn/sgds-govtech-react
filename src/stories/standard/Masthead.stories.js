import React from "react";
import SgdsMasthead from "../../components/Masthead";

const Template = (args) => <SgdsMasthead {...args} />;

export const Masthead = Template.bind({});

Masthead.args = {};

export default {
  title: "Standard Components/Masthead",
  component: SgdsMasthead,
};
