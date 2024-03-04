import Heading from "@/elements/Heading";

export default {  
  title: "element/Heading",
  component: Heading,
  argTypes: {
    priority: {
      options: [1,2,3,4,5,6],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => <Heading {...args} />;
export const Headings = Template.bind({});
Headings.args = {
  priority: 1,
  children: "hello world",
  color: "text-black",
  line_height: "leading-16"
};