import React from "react";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label from "./Label";
import Input from "../Input/Input";
import FlexContainer from "../FlexContainer/FlexContainer";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;
const InputTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const BasicLabel = Template.bind({});

BasicLabel.args = {
  htmlFor: "input",
  children: "input",
};

export const InputWithLabel = () => {
  return (
    <FlexContainer
      direction="column"
      justifyContent="start"
      alignItems="start"
      gap="0.5rem"
    >
      <Label htmlFor="input">input</Label>
      <Input id="input" onChange={() => {}} placeholder="input" value="hihi" />
    </FlexContainer>
  );
};
