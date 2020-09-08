import React from "react";
import SgdsMasthead from "../../components/Masthead";

const Template = (args) => <SgdsMasthead {...args} />;

// Each story then reuses that template
export const Masthead = Template.bind({});

Masthead.args = {};

export default {
  title: "Standard Components/Masthead",
  component: SgdsMasthead,
};
