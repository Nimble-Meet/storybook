import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AlertModal from "./AlertModal";

export default {
  title: "AlertModal",
  component: AlertModal,
} as ComponentMeta<typeof AlertModal>;

const Template: ComponentStory<typeof AlertModal> = (args) => (
  <AlertModal {...args} />
);

export const Modal = Template.bind({});

Modal.args = {
  isOpen: true,
  toggle: () => {},
  children: <div>123</div>,
};
