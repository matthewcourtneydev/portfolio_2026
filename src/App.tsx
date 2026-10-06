import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";

import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Experience } from "./sections/Experience/Experience";
import { Work } from "./sections/Work/Work";
import { HowIBuild } from "./sections/HowIBuild/HowIBuild";
import { Contact } from "./sections/Contact/Contact";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <Intro
          onComplete={() => {
            setIntroComplete(true);
          }}
        />
      )}

      <Header introComplete={introComplete} />

      <main id="top">
        <Hero introComplete={introComplete} />
        <About />
        <Experience />
        <Work />
        <HowIBuild />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;