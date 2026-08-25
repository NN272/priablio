"use client"

import Image from "next/image";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Expertise from "./components/Expertise/Expertise";
import Carousel from "./components/Carousel/Carousel";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useWindowSize from "@rooks/use-window-size";
import MHeader from "./components/Header/Mobile/MHeader";
import MElements from "./components/Header/Mobile/MElements";
import { useState } from "react";

export default function Home() {
  const { innerWidth, outerWidth } = useWindowSize();
  const [displayValue, setDisplayValue] = useState('none');

  function handleDisplayValue(data) {
    setDisplayValue(data);
  }

  return (
    <div>
      {outerWidth > 450 ? <Header /> : <MHeader sendDisplayValue={handleDisplayValue} />}
      {displayValue == 'block' ? <MElements /> : ''}
      <Main></Main>
      <Expertise />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}
// Checking a new branch