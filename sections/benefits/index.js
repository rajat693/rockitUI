import Heading from "@/elements/Heading";
import Card from "@/components/Card";
import { hireData1, hireData2 } from "./data";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center container lg:pt-16 pt-8">
      <div className="lg:px-20 lg:w-[910px] w-[288px] text-center">
        <Heading priority={2} color="text-black-500" line_height="leading-15">
          Benefits of Dedicated Team
        </Heading>
      </div>
      <div className="grid px-10 lg:grid-cols-3 grid-cols-1 lg:gap-x-[66px] gap-y-3 lg:gap-y-0 lg:pt-20 pt-10 lg:px-[120px]">
        {hireData1.map((item) => {
          return (
              <Card
                key={item.id}
                src={item.src}
                alt={item.alt}
                imgHeight={item.imgHeight}
                imgWidth={item.imgWidth}
                imgSize={item.imgSize}
                txtSize="md"
                txtColor="text-black-300"
                line_height="leading-10"
                fontWeight="font-semibold"              
                center
                gradient={item.gradientColor}
              >
                {item.txt}
              </Card>
          );
        })}
      </div>
      <div className="grid px-[70px] lg:grid-cols-2 grid-cols-1 gap-x-72 lg:gap-x-[66px] gap-y-3 lg:gap-y-0 lg:pt-16 pt-6 lg:pb-24 lg:px-[210px]">
        {hireData2.map((item) => {
          return (
              <Card
                key={item.id}
                src={item.src}
                alt={item.alt}
                imgHeight={item.imgHeight}
                imgWidth={item.imgWidth}
                imgSize={item.imgSize}
                txtSize="md"
                txtColor="text-black-300"
                line_height="leading-10"
                fontWeight="font-semibold"              
                center
                gradient={item.gradientColor}
              >
                {item.txt}
              </Card>
          );
        })}
      </div>
    </div>
  );
}
