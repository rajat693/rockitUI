
export default function Heading({ priority, color, children, line_height }) {
  const HeadingStyle = `h${priority}`;
  return (
    <HeadingStyle
      priority={priority}
      color={color}
      line_height={line_height}
      className={`${color} ${
        priority == 1
          ? "font-black text-xl lg:text-9xl"
          : priority == 2
          ? "font-bold text-xl lg:text-8xl "
          : priority == 3
          ? "font-bold text-5xl"
          : priority == 4
          ? "font-bold text-4xl"
          : priority == 5
          ? "font-bold text-sm lg:text-2xl"
          : priority == 6
          ? "font-bold text-xl"
          : "font-bold text-sm"
      }  ${
        line_height == "leading-16"
          ? "leading-10 lg:leading-16"
          : line_height == "leading-15"
          ? "leading-11 lg:leading-15"
          : line_height == "leading-14"
          ? "leading-10 lg:leading-14"
          : line_height == "leading-13"
          ? "leading-10 lg:leading-13"
          : line_height == "leading-12"
          ? "leading-9 lg:leading-12"
          : line_height == "leading-11"
          ? "leading-10 lg:leading-11"
          : "leading-10 lg:leading-10"
      }    
      `}
    >
      {children}
    </HeadingStyle>
  );
}

Heading.defaultProps = {
  priority: 2,
  children: "hello world",
  color: "text-black-500",
  line_height: "leading-12",
};
