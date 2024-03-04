import Heading from "@/elements/Heading";
import Card from "@/components/Card";
import { hireData } from "./data";

export default function Hire() {
  return (
    <div
      className="relative outerContainer before:hidden before:lg:block
    before:content-[url('/images/rightHalf.png')] 
    before:absolute before:right-0 before:-top-[88px]
    "
    >
      <div className="flex flex-col items-center container pt-20">
        <div className="lg:px-20 lg:w-[910px] w-[288px] text-center">
          <Heading priority={2} color="text-black-500" line_height="leading-15">
            When should you hire a dedicated team?
          </Heading>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-14 pt-16 pb-36 lg:pb-48 px-11 lg:px-[80px]">
          {hireData.map((item) => {
            return (
              <Card
                key={item.id}
                src={item.src}
                alt={item.alt}               
                imgSize="md"
                txtSize="md"
                txtColor="text-black-300"
                line_height="leading-10"
                fontWeight="font-semibold"                
              >
                {item.txt}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
