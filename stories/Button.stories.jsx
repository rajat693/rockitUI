import Button from "../components/Button";

export default {  
  title: "component/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    children: {
      options: ["Click Me", "hello World", "Let's Talk"],
      control: { type: "select" },
    },
    shadow: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Btn = Template.bind({});
Btn.args = {
  type: "primary",
  size: "lg",
  children: "Let's Talk",
  link: "https://www.google.com/",
  shadow: false,
};