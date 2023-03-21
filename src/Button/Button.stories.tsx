/** @jsxImportSource @emotion/react */
import Button from "./Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icon/Icon";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components|Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});

button.args = {
  children: "Click",
};

button.story = {
  name: "Default",
};

export const primaryButton = Template.bind({});

primaryButton.args = {
  children: "Primary",
  theme: "primary",
};

export const secondaryButton = Template.bind({});

secondaryButton.args = {
  children: "SECONDARY",
  theme: "secondary",
};

export const tertiaryButton = Template.bind({});

tertiaryButton.args = {
  children: "TERTIARY",
  theme: "tertiary",
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="sm">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="md">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="lg">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="link">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <Button size="sm">
          <Icon icon="heart" />
          LIKE
        </Button>
        <Button>
          <Icon icon="heart" />
          LIKE
        </Button>
        <Button size="lg">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
    </div>
  );
};
