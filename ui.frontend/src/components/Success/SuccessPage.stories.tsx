import React from "react";
import { BrowserRouter } from "react-router-dom";
import SuccessPage from "./SuccessPage";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Página de Sucesso",
  component: SuccessPage,
  argTypes: {
    successLogo: {
      control: {
        type: "file",
        disable: true,
      },
    },
    successImage: {
      control: {
        type: "file",
        disable: true,
      },
    },
    successColorTitleMultifield: {
      control: {
        type: "color",
        disable: true,
      },
    },
  },
  successTexts: {
    control: {
      type: "array",
      items: {
        type: "object",
        properties: {
          successTitleMultifield: {
            type: "string",
          },
          successDescriptionMultifield: {
            type: "string",
          },
        },
      },
    },
  },
} as ComponentMeta<typeof SuccessPage>;

const Template: ComponentStory<typeof SuccessPage> = (args) => (
  <BrowserRouter>
    <SuccessPage {...args} />
  </BrowserRouter>
);

export const DefaultSuccessPage = Template.bind({});
DefaultSuccessPage.args = {
  successTexts: [
    {
      successTitleMultifield: "Our mission is",
      successDescriptionMultifield: "Nossa missão é",
      successColorTitleMultifield: "#C12D18",
    },
    {
      successTitleMultifield: "to transform the world",
      successDescriptionMultifield: "transformar o mundo",
      successColorTitleMultifield: "#C12D18",
    },
    {
      successTitleMultifield: "building digital experiences",
      successDescriptionMultifield: "construindo experiências digitais",
      successColorTitleMultifield: "#C12D18",
    },
    {
      successTitleMultifield: "that enable our client's growth",
      successDescriptionMultifield:
        "que permitam o crescimento dos nossos clientes",
      successColorTitleMultifield: "#C12D18",
    },
  ],
};
