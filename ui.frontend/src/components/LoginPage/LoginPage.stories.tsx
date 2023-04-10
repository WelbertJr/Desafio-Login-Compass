import React from "react";
import LoginPage from "./LoginPage";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Página de Login",
  component: LoginPage,
  argTypes: {
    loginTitle: {
      control: {
        type: "text",
      },
    },
    loginParagraph: {
      control: {
        type: "text",
      },
    },
    loginButtonColor: {
      control: {
        type: "color",
      },
    },
    loginImage: {
      control: {
        type: "file",
        disable: true,
      },
    },
    loginLogo: {
      control: {
        type: "file",
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const DefaultLoginPage = Template.bind({});
DefaultLoginPage.args = {
  loginTitle: "Olá,",
  loginParagraph:
    "Para continuar navegando de forma segura, efetue o login na rede.",
  loginButtonColor: "#cf2e0e",
};
