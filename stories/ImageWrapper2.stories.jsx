import ImageWrapper2 from "@/elements/ImageWrapper2";

export default {  
  title: "element/ImageWrapper2",
  component: ImageWrapper2,
  argTypes: {
    size: {
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <ImageWrapper2 {...args} />;
export const Img = Template.bind({});
Img.args = {
  size: "lg",
  src: "Images/logo1.png",
  alt: "logo_Img",
};