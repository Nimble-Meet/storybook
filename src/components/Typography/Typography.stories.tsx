import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Text = Template.bind({});

Text.args = {
  weight: "md",
  size: "md",
  color: "gray700",
  value: "안녕하세요",
};
