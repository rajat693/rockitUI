import Heading from "@/elements/Heading";
import ListItem from "@/components/ListItem";

export default function Right() {
    return (
        <div className=" w-full flex flex-col lg:w-1/2 lg:flex-row p-[30px]">
            <div className="lg:pl-16">
            <Heading priority={7} color="text-white-100" line_height="leading-10">
              THE COMPANY
            </Heading>
            <ul className="h-[270px] lg:h-[330px] pt-3 lg:pt-9 pl-5 flex flex-col justify-between">
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">About Us</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Our Work</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Services</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Solutions</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">What we do</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Blogs</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Contact Us</ListItem>
            </ul>
            </div>
            <div className="lg:pl-40 pt-8 lg:pt-0">
            <Heading priority={7} color="text-white-100" line_height="leading-10">
              HIRE US
            </Heading>
            <ul className="h-[325px] lg:h-[375px] pt-4 lg:pt-9 pl-5 flex flex-col justify-between">
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">React Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">React Native Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Angular Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Laravel Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Node Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Flutter Developer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">UX Designer</ListItem>
              <ListItem size="md" color="text-gray-200" fontWeight="font-semibold" line_height="leading-10">Business Analyst</ListItem>
            </ul>
            </div>
          </div>
    )
}