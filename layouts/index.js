import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}