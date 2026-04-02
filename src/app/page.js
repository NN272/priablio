import Image from "next/image";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Expertise from "./components/Expertise/Expertise";
import Carousel from "./components/Carousel/Carousel";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main></Main>
      <Expertise />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}
// Checking a new branch