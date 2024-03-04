import Text from "@/elements/Text";
import Button from "@/components/Button";
import Heading from "@/elements/Heading";

export default function Quote() {
  return (
    <div className="bg-gradient-to-tr from-pink-200 to-yellow-200">
      <div className="flex items-center justify-center  p-6 lg:p-14 outerContainer">
        <Heading priority={5} color="text-black-300" line_height="leading-12">
          Get a free quote today.
        </Heading>
        <div className="w-6 lg:w-9"></div>
        <Button size="lg" type="primary" link="https://www.google.com" shadow>
          Let's Talk
        </Button>
      </div>
    </div>
  );
}
