import Link from "next/link";

const DropDownItem = ({ children, link, size }) => {
  return (
    <li
      className={`text-black-500 list-none font-bold ${size == "sm" ? "text-xs lg:text-sm" : size == "md" ? "text-md" : "text-lg"} `}
    >
      { link ? <Link href={link} className="cursor-pointer hover:text-primary">{children}</Link> : <>{children}</> }
    </li>
  )
};

DropDownItem.defaultProps = {
  size: "sm",
  children: "Dedicated Team",
};
export default DropDownItem;