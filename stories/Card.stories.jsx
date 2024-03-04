import Card from "@/components/Card";

export default {  
  title: "component/Card",
  component: Card,
  argTypes: {
    txtSize: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    fontWeight: {
        options: ["font-normal", "font-medium", "font-semibold"],
        control: { type: "select" },
      },
      gradient: {
        options: ["blue", "pink", "yellow", "purple"],
        control: { type: "select" },
      },
      row: {
        options: [true, false],
        control: { type: "radio" },
      },
  },
};

const Template = (args) => <Card {...args} />;
export const Cards = Template.bind({});
Cards.args = {
    src: "Images/developers.svg",
    alt: "developers_Img",
    imgHeight: 54,
    imgWidth: 35,
    txtSize: "md",
    children: "hello world",
    txtColor: "text-black-300",
    line_height: "leading-10",
    fontWeight: "font-semibold",
    row:false,
    // gradient: "blue",
};