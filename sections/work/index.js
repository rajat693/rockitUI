import Heading from "@/elements/Heading";
import Text from "@/elements/Text";

export const Work = () => {
  return (
    <div className="relative outerContainer before:hidden before:lg:block flex flex-col items-center lg:items-left
    before:content-[url('/images/leftHalf.png')] 
    before:absolute before:left-0 before:-top-48
    ">
      <div className="container">
      <div className="text-center">
        <Heading priority={2} color="text-black-500" line_height="leading-15">
          How does it work?
        </Heading>
      </div>
      <div className="lg:py-18 lg:px-[84px] py-6 px-1 text-center lg:text-left">
        <Text
          size="lg"
          color="text-black-100"
          line_height="leading-11"
          fontWeight="font-medium"
        >
          We commence by analyzing your project scope, expectations and
          conducting an internal meeting making sure the right set of
          individuals are placed into the team. After that, we provide you the
          team as per your project needs and your likings so that you will
          receive the top-notch business experience and desired results.
          <br />
          <br />
          For hassle-free and effective communication, the client will be
          assigned project managers who will remain in touch with them providing
          all the latest updates about the ongoing project and estimated time
          for the completion of the same.
        </Text>
      </div>
    </div>
    </div>
  );
};
export default Work;
