import Link from "next/link";

const ListItem = ({ children, link, size, color, fontWeight, line_height }) => {
  return (
    <li
      className={` ${color ? color : "text-black-500"} ${line_height} ${fontWeight ? fontWeight : "font-bold"} list-none  ${size == "sm" ? "text-xs lg:text-sm border-b lg:border-0" : size == "md" ? "text-xs lg:text-sm" : "text-lg"} `}
    >
      { link ? <Link href={link} className="cursor-pointer hover:text-primary">{children}</Link> : <>{children}</> }
    </li>
  )
};

ListItem.defaultProps = {
  size: "sm",
  children: "Our Work",
  color: "text-black-500",
  fontWeight: "font-bold",
};
export default ListItem;