/** @jsxImportSource @emotion/react */
import Button from "./Button";
import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});

primaryButton.args = {
  children: "Primary",
  theme: "primary",
};

export const linkButton = Template.bind({});

linkButton.args = {
  children: "link",
  theme: "link",
};

export const basicButton = Template.bind({});

basicButton.args = {
  children: "구글 로그인",
  theme: "basic",
};

export const darkButton = Template.bind({});

darkButton.args = {
  children: "dark",
  theme: "dark",
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
        <div className="description">sm</div>
        <Button size="sm">BUTTON</Button>
      </div>
      <div>
        <div className="description">md</div>
        <Button size="md">BUTTON</Button>
      </div>
      <div>
        <div className="description">lg</div>
        <Button size="lg">BUTTON</Button>
      </div>
      <div>
        <div className="description">xl</div>
        <Button size="xl">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled theme="basic">
          BASIC
        </Button>
      </div>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="link">
          Link
        </Button>
      </div>
      <div>
        <Button disabled theme="dark">
          DARK
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
