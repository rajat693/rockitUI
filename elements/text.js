const TextStyle = ({ size, color, line_height, fontWeight,  ...props }) => {
    return (
      <p className={`${color} ${fontWeight} ${
          size == "xs"
            ? "text-3xs lg:text-xs"
            : size == "sm"
            ? "text-2xs lg:text-sm"
            : size == "md"
            ? "text-2xs lg:text-lg"
            : size == "lg"
            ? "text-xs lg:text-xl"
            : size == "xl"
            ? "text-xs lg:text-2xl"
            : " text-3xl"
        }   ${
          line_height == "leading-16"
            ? "leading-10 lg:leading-16"
            : line_height == "leading-15"
            ? "leading-10 lg:leading-15"
            : line_height == "leading-14"
            ? "leading-10 lg:leading-14"
            : line_height == "leading-13"
            ? "leading-10 lg:leading-13"
            : line_height == "leading-12"
            ? "leading-9 lg:leading-12"
            : line_height == "leading-11"
            ? "leading-9 lg:leading-11"
            : "leading-9 lg:leading-10"
        }   
        `}
      >
        {props.children}
      </p>
    );
  };
  
  export default function Text({ size, color, children, line_height, fontWeight }) {
    return (
        <TextStyle size={size} color={color} line_height={line_height} fontWeight={fontWeight}>
          {children}
        </TextStyle>
    );
  }

  Text.defaultProps = {
    size: "lg",
    children: "hello world",
    color: "text-black-500",
    line_height: "leading-12",
    fontWeight: "font-semibold",
  };
  