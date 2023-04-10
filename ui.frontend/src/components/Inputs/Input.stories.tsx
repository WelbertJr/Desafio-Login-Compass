import React from "react";
import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Inputs",
  component: Input,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputUsuário: Story = {
  render: () => <Input type='text' placeholder='Usuário' />,
};

export const InputSenha: Story = {
  render: () => <Input type='password' placeholder='Senha' />,
};

export const InputBusca: Story = {
  render: () => <Input type='text' placeholder='Ex: Thauany' />,
};
