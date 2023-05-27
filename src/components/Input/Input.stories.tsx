import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";
import FlexContainer from "../FlexContainer/FlexContainer";

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
  placeholder: "placeholder",
  disabled: false,
  width: "100%",
  fontSize: "1rem",
};

export const RoundInput = Template.bind({});

RoundInput.args = {
  weight: "md",
  size: "md",
  value: "value",
  type: "text",
  id: "input",
  onChange: () => {},
  placeholder: "placeholder",
  disabled: false,
  width: "100%",
  fontSize: "1rem",
  round: true,
};

export const InvalidInput = Template.bind({});

InvalidInput.args = {
  weight: "md",
  size: "md",
  value: "value",
  type: "text",
  id: "input",
  onChange: (e) => {
    e.target.value;
  },
  placeholder: "placeholder",
  disabled: false,
  fontSize: "1rem",
  invalid: true,
  invalidMessage: "invalid",
};

export const sizes = () => {
  return (
    <FlexContainer direction="column" gap="1rem">
      <FlexContainer direction="column" gap="0.5rem">
        <div className="description">md</div>
        <Input
          value="value"
          size="md"
          placeholder="value"
          onChange={() => {}}
        />
      </FlexContainer>
      <FlexContainer direction="column" gap="0.5rem">
        <div className="description">lg</div>
        <Input
          value="value"
          size="lg"
          placeholder="value"
          onChange={() => {}}
        />
      </FlexContainer>
      <FlexContainer direction="column" gap="0.5rem">
        <div className="description">xl</div>
        <Input
          value="value"
          size="xl"
          placeholder="value"
          onChange={() => {}}
        />
      </FlexContainer>
    </FlexContainer>
  );
};
