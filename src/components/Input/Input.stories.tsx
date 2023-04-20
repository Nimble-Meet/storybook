import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});

BasicInput.args = {
  weight: "md",
  size: "md",
  value: "value",
  type: "text",
  id: "input",
  onChange: () => {},
  //   theme = "primary",
  placeholder: "placeholder",
  disabled: false,
  width: "100%",
  fontSize: "1rem",
};
