import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ListItem from "./ListItem";

const Dropdown = ({ children, size, text }) => {
  const [displayItems, setDisplayItemsValue] = useState(false);
  return (
    <>
      <li
        onClick={() => setDisplayItemsValue(!displayItems)}
        className={`hidden text-black-500 py-1 border-b lg:border-none lg:py-0 font-bold cursor-pointer hover:text-primary relative lg:max-w-fit lg:flex items-center ${
          size == "sm"
            ? "text-xs lg:text-sm"
            : size == "md"
            ? "text-md"
            : "text-lg"
        } `}
      >
        {text}&nbsp;
        {/* <div className="hidden lg:block"> */}
        {displayItems ? (
          <>
            <AiFillCaretUp color="#91979d" size=".875em" display="none" />
            <ul
              className={`bg-white w-max right-0 absolute z-10 rounded-sm p-4 top-7 shadow-sm shadow-gray
          ${
            size == "sm"
              ? "text-xs lg:text-sm "
              : size == "md"
              ? "text-md "
              : "text-lg "
          }`}
            >
              {children}
              {/* {console.log(children, "children")} */}
            </ul>
          </>
        ) : (
          <>
            <AiFillCaretDown color="#91979d" size=".875em" />
          </>
        )}
        {/* </div> */}
      </li>
      <div className="block lg:hidden">
        <ListItem link={children[0].props?.link} size={size}>{text}</ListItem>
        {/* {console.log(children[0].props?.link, "link")} */}
      </div>
    </>
  );
};
export default Dropdown;
