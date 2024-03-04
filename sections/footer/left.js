import Text from "@/elements/Text";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { footerData } from "./data";
import ImageWrapper2 from "@/elements/ImageWrapper2";

export default function Left() {
  return (
    <div className="pt-[60px] pb-[30px] px-[30px] lg:p-0 w-full border-b lg:border-0 lg:border-r border-gray-100 lg:w-1/2 ">
      <Link href="/">
        <ImageWrapper2 src="/Images/logo2.png" alt="logo_Img" size="2xl" />
      </Link>
      <div className="pt-3 pb-8 lg:pt-6 lg:pb-14">
        <Text
          size="sm"
          color="text-gray-100"
          line_height="leading-10"
          fontWeight="font-semibold"
        >
          Where Technical Chaos Meets Excellence.
        </Text>
      </div>
      <div className="w-[282px] h-[121px] lg:w-[357px] lg:h-[150px] flex flex-col justify-between">
        {footerData.map((item) => {
          return (
            <Card
              key={item.id}
              src={item.src}
              alt={item.alt}
              imgSize="xs"
              txtSize="sm"
              txtColor="text-white-100"
              line_height="leading-10"
              fontWeight="font-semibold"
              row
            >
              {item.txt}
            </Card>
          );
        })}
      </div>
      <div className="flex justify-between w-[46px] lg:w-[72px] ml-9 mt-6 lg:mt-9 lg:ml-16">
        <Link href="https://www.linkedin.com/">
          <ImageWrapper2
            src="/Images/linkedIn.png"
            alt="linkedIn_Img"
            size="sm"
          />
        </Link>
        <Link href="https://www.facebook.com/">
          <ImageWrapper2
            src="/Images/facebook.png"
            alt="facebook_Img"
            size="sm"
          />
        </Link>
      </div>
    </div>
  );
}
