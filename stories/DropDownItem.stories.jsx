import DropDownItem from "@/elements/DropDownItem";

export default {  
  title: "element/DropDownItem",
  component: DropDownItem,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    children: {
      options: ["Services", "Hire Us", "More"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <DropDownItem {...args} />;
export const Item = Template.bind({});
Item.args = {
  size: "lg",
  children: "Services",
  link: "https://www.google.com/",
};