import ListItem from "@/components/ListItem";

export default {  
  title: "component/ListItem",
  component: ListItem,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    children: {
      options: ["Our Work", "hello World"],
      control: { type: "select" },
    },
    fontWeight: {
      options: ["font-medium", "font-semibold", "font-bold"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <ListItem {...args} />;
export const Item = Template.bind({});
Item.args = {
  size: "lg",
  children: "Our Work",
  color: "text-gray-200",
  fontWeight: "font-bold",
  link: "https://www.google.com/",
  line_height: "leading-10",
};