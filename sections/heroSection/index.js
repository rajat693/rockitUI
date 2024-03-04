import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "@/components/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="outerContainer relative before:hidden before:lg:block
    before:content-[url('/images/leftShade.svg')] 
    before:absolute before:left-0 before:top-48 after:hidden after:lg:block
    after:content-[url('/images/rightShade.svg')] 
    after:absolute after:right-0 after:top-[380px]">
      <div className="flex flex-col items-center text-center container relative before:hidden before:lg:block
      before:content-[url('/images/cloud.svg')] 
      before:absolute before:left-20 before:top-40 after:hidden after:lg:block
      after:content-[url('/images/rocket.svg')] 
      after:absolute after:right-16 after:top-[360px]
      ">

      <div className="relative pt-10 lg:pt-48 px-auto before:hidden before:lg:block
      before:content-[url('/images/hand.svg')] 
      before:absolute before:left-52 before:top-8
      ">
        <Heading priority={1} color="text-black-600" line_height="leading-15">
          Dedicated Team
        </Heading>
        {/* <Image src="/Images/hand.svg" alt="hand_Img" width={48} height={48} className="absolute top-8 left-52" /> */}
      </div>

      <div className="w-[335px] pt-5 lg:pt-12 pb-12 lg:pb-24 lg:w-[785px]">
        <Text
          size="xl"
          color="text-black-200"
          line_height="leading-12"
          fontWeight="font-semibold"
        >
          Upscale your business efficiency by hiring dedicated software
          developers with leverage to screen and manage the whole team.
        </Text>
      </div>

      <Button size="md" type="primary" link="https://www.google.com">
        Hire Us
      </Button>
    </div>
    </div>
  );
}
