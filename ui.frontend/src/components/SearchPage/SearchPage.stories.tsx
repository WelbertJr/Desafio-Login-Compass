import React from "react";
import { BrowserRouter } from "react-router-dom";
import SearchPage from "./Search";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Página de Busca",
  component: SearchPage,
  argTypes: {
    searchLogo: {
      control: {
        type: "file",
        disable: true,
      },
    },
    searchImage: {
      control: {
        type: "file",
        disable: true,
      },
    },
    searchTitle: {
      control: {
        type: "text",
      },
    },
    searchParagraph: {
      control: {
        type: "text",
      },
    },
    searchButtonColor: {
      control: {
        type: "color",
      },
    },
  },
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = (args) => (
  <BrowserRouter>
    <SearchPage {...args} />
  </BrowserRouter>
);

export const DefaultSearchPage = Template.bind({});
DefaultSearchPage.args = {
  searchTitle: "Busca",
  searchParagraph: "Para encontrar o usuário desejado digite seu nome abaixo.",
  searchButtonColor: "#cf2e0e",
};
