// import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Menu from "./menu";
import { useState } from "react";
import ImageWrapper from "@/elements/ImageWrapper";
import ImageWrapper2 from "@/elements/ImageWrapper2";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between pt-5 pb-4 lg:px-3 container w-full px-5 ">
      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <ImageWrapper2
            src="/Images/cross.png"
            alt="cross_Img"
            // width={20}
            // height={20}
            size="2xs"
          />
        ) : (
          <ImageWrapper2
            src="/Images/hamburger.svg"
            alt="hamburger_Img"
            // width={20}
            // height={20}
            size="2xs"
          />
        )}
      </div>

      <div
        className={` ${
          open
            ? "flex flex-col w-full absolute z-10 bg-white top-14 left-0 lg:flex-row lg:static"
            : "hidden lg:flex"
        } lg:items-center justify-between w-full container py-10 lg:py-0 pl-4 pr-10 lg:pr-0 lg:pl-0`}
      >
        <Link href="/" className="hidden lg:block">
          <ImageWrapper2
            src="/Images/logo1.png"
            alt="logo_Img"
            // width={135}
            // height={45}
            size="xl"
          />
        </Link>

        <Menu />

        <div className="lg:pt-3 pt-7">
          <Button size="sm" type="tertiary" link="https://www.google.com">
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
