import Text from "@/elements/Text";

export default {  
  title: "element/Text",
  component: Text,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    fontWeight: {
        options: ["font-normal", "font-medium", "font-semibold"],
        control: { type: "select" },
      },
  },
};

const Template = (args) => <Text {...args} />;
export const Txt = Template.bind({});
Txt.args = {
  size: "lg",
  children: "hello world",
  color: "text-black-500",
  line_height: "leading-12",
  fontWeight: "font-semibold",
};