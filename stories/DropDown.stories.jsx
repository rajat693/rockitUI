import Dropdown from "@/components/DropDown";
import DropDownItem from "@/elements/DropDownItem";

export default {  
  title: "component/Dropdown",
  component: Dropdown,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    text: {
      options: ["Solutions", "Services"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;
export const Item = Template.bind({});
Item.args = {
  size: "lg",
  children: [<><DropDownItem size="sm">Hire Us 1</DropDownItem><DropDownItem size="sm">Hire Us 2</DropDownItem><DropDownItem size="sm">Hire Us 3</DropDownItem></>],
  text: "What we do",
};