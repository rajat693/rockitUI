import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import ImageWrapper from "@/elements/ImageWrapper";
import ImageWrapper2 from "@/elements/ImageWrapper2";

export const DedicatedTeam = () => {
  return (
    <div className="text-center container py-16 lg:py-32 px-auto flex flex-col items-center" >
      <div className="w-[267px] lg:w-[820px]">
        <Heading priority={2} color="text-black-500" line_height="leading-15">
          What is a Dedicated Team?
        </Heading>
      </div>
      <div className="lg:w-3/4 pt-6 lg:pt-10 lg:px-20 w-[335px]">
        <Text size="lg" color="text-black-100" line_height="leading-11" fontWeight="font-medium">
          A dedicated team is a concept of hiring resources and tech enthusiasts
          for a particular project, it can be for a short period or a long term.
        </Text>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:pb-28 lg:pt-16 pt-5">
        <div className="lg:w-1/2 pt-20 lg:pl-20 lg:text-left w-[313px] px-auto">
          <Text size="lg" color="text-black-100" line_height="leading-11" fontWeight="font-medium">
            This team of specialists and technical experts are screened,
            interviewed, and managed by the client. The client itself will
            decide the final team members and not just that, they can also add
            or remove the teammates as per their project requirements or needs.
          </Text>
        </div>
        <div className="lg:w-1/2 w-full order-first lg:order-last flex items-center justify-center lg:pl-20 pt-1 lg:pt-0">
          <div className="relative hidden lg:block">
          <ImageWrapper2
            src="/Images/meeting2.svg"
            alt="meeting_Img"
            // width={407}
            // height={348}
            size="3xl"
          />
          <div className="absolute rounded-[40px] lg:rounded-[70px] bg-gradient-to-br -z-10 from-yellow-200 to-pink-200 h-[228.76px] w-[228.76px] top-[31.14px] left-[33px] lg:h-[368.15px] lg:w-[368.15px] lg:top-14 lg:-left-[72px]"></div>
          </div>
          <div className="relative block lg:hidden">
          <ImageWrapper2
            src="/Images/meeting4.png"
            alt="meeting_Img"
            // width={407}
            // height={348}
            size="3xl"
          />
          <div className="absolute rounded-[40px] lg:rounded-[70px] bg-gradient-to-br -z-10 from-yellow-200 to-pink-200 h-[228.76px] w-[228.76px] top-[31.14px] left-[33px] lg:h-[368.15px] lg:w-[368.15px] lg:top-14 lg:-left-[72px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DedicatedTeam;
