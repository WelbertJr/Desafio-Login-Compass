import React from "react";
import { Button } from "./Buttons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Buttons",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const BotãoContinuar: Story = {
  render: () => <Button type='submit' text='Continuar' />,
};

export const BotãoAcessarBusca: Story = {
  render: () => <Button type='button' text='Acessar Busca' />,
};

export const BotãoLogout: Story = {
  render: () => <Button type='button' text='Logout' />,
};

export const BotãoDeslogar: Story = {
  render: () => <Button type='button' text='Deslogar' />,
};

export const BotãoVoltarParaInicial: Story = {
  render: () => <Button type='button' text='Voltar para página inicial' />,
};

export const BotãoBuscar: Story = {
  render: () => <Button type='button' text='Buscar' />,
};

export const BotãoVerMais: Story = {
  render: () => <Button type='button' text='VER MAIS' />,
};

export const BotãoRepositórios: Story = {
  render: () => <Button type='button' text='Repositórios' />,
};

export const BotãoFavoritos: Story = {
  render: () => <Button type='button' text='Favoritos' />,
};

export const BotãoCompartilhar: Story = {
  render: () => <Button type='button' text='COMPARTILHAR' />,
};

export const BotãoVoltar: Story = {
  render: () => <Button type='button' text='VOLTAR' />,
};
