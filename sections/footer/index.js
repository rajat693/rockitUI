import Text from "@/elements/Text";
import Right from "./right";
import Left from "./left";

export const Footer = () => {
  return (
    <div className="bg-tertiary">
      <div className=" outerContainer lg:pt-[89px] lg:pb-7 lg:px-[60px]">
        <div className="flex flex-col lg:pb-24 lg:flex-row">
          <Left />
          <Right />
        </div>
        <div className="text-center py-[20px] lg:p-0 lg:text-left ">
          <Text
            size="xs"
            color="text-gray-100"
            line_height="leading-10"
            fontWeight="font-semibold"
          >
            Copyright © 2021 rockIT - All Rights Reserved.
          </Text>
        </div>
      </div>
    </div>

  );
};
export default Footer;
