import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AlertModal from "./Modal";
import Button from "../Button/Button";

export default {
  title: "AlertModal",
  component: AlertModal,
} as ComponentMeta<typeof AlertModal>;

const Template: ComponentStory<typeof AlertModal> = (args) => (
  <AlertModal isOpen={args.isOpen}>
    <AlertModal.Header toggle={() => {}} />
    <AlertModal.Body>{args.children}</AlertModal.Body>
    <AlertModal.Footer>
      <Button size="lg" color="primary" onClick={() => console.log("1")}>
        확인
      </Button>
    </AlertModal.Footer>
  </AlertModal>
);

export const Modal = Template.bind({});

Modal.args = {
  isOpen: true,
  toggle: () => {},
  children: <div>123</div>,
};
