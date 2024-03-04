import DropDownItem from "@/elements/DropDownItem";
import Dropdown from "@/components/DropDown";
import ListItem from "@/components/ListItem";

export default function Menu() {
  return (
    <ul className="flex lg:flex-row flex-col h-60 lg:h-10 lg:items-center justify-between list-none lg:w-1/2 pt-3 ">
        <Dropdown size="sm" text="What we do">
        <DropDownItem link="https://www.google.com" size="sm">Dedicated Team</DropDownItem>
        <DropDownItem link="https://www.google.com" size="sm">Staff Augmentation</DropDownItem>
        </Dropdown>

        <ListItem link="https://www.google.com" size="sm">Our Work</ListItem>

        <Dropdown size="sm" text="Solutions">
        <DropDownItem link="https://www.google.com" size="sm">Solutions 1</DropDownItem>
        <DropDownItem link="https://www.google.com" size="sm">Solutions 2</DropDownItem>
        <DropDownItem link="https://www.google.com" size="sm">Solutions 3</DropDownItem>
        </Dropdown>

        <Dropdown size="sm" text="Services">
        <DropDownItem link="https://www.google.com" size="sm">Services 1</DropDownItem>
        <DropDownItem link="https://www.google.com" size="sm">Services 2</DropDownItem>
        <DropDownItem link="https://www.google.com" size="sm">Services 3</DropDownItem>
        </Dropdown>

        <Dropdown size="sm" text="Hire Us">
        <DropDownItem size="sm">Hire Us 1</DropDownItem>
        <DropDownItem size="sm">Hire Us 2</DropDownItem>
        <DropDownItem size="sm">Hire Us 3</DropDownItem>
        </Dropdown>
        
        <Dropdown size="sm" text="More">
        <DropDownItem size="sm">More 1</DropDownItem>
        <DropDownItem size="sm">More 2</DropDownItem>
        <DropDownItem size="sm">More 3</DropDownItem>
        </Dropdown>
    </ul>
  );
}
