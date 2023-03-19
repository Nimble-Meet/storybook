import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "components|Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Hello, world!</Typography>
);

export const Text = Template.bind({});

Text.args = {
  font: "Line_Rg",
  color: "black",
};
