import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FlexContainer from "./FlexContainer";

export default {
  title: "FlexContainer",
  component: FlexContainer,
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args} />
);

export const BasicFlexContainer = Template.bind({});

BasicFlexContainer.args = {
  direction: "column",
  justifyContent: "start",
  alignItems: "start",
  gap: "0.5rem",
  children: (
    <>
      <div>Box1</div>
      <div>Box2</div>
      <div>Box3</div>
    </>
  ),
};
