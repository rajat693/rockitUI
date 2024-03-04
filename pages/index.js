import Layout from "@/layouts";
import HeroSection from "@/sections/HeroSection";
import DedicatedTeam from "@/sections/DedicatedTeam";
import Work from "@/sections/Work";
import Hire from "@/sections/Hire";
import Benefits from "@/sections/Benefits";
import Head from "next/head";
import Quote from "@/sections/Quote";

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Figma Rockit UI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div className="absolute top-80 w-64 h-64 -left-12">
        <Image
          fill
          className="object-contain"
          src="/Images/leftShade.svg"
          alt="logo_image"
          // width={257.36}
          // height={257.36}
        />
      </div>
      <div className="absolute top-[510px] w-64 h-64 -right-12">
        <Image
          fill
          className="object-contain"
          src="/Images/rightShade.svg"
          alt="logo_image"
        />
      </div> */}
      <Layout>
        <HeroSection />
        <DedicatedTeam />
        <Work />
        <Benefits />
        <Hire/>
        <Quote />
      </Layout>
    </div>
  );
}
