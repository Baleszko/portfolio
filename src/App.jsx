import { useState, useEffect } from "react";

import Header from "./components/Header";
import Technology from "./components/Technology";
import Projects from "./components/Projects";

function App() {
  const [navSize, setnavSize] = useState("h-48");
  const [navColor, setnavColor] = useState("transparent");
  const [displayScroller, setDisplayScroller] = useState("opacity-100");
  const [displayScrollerY, setDisplayScrollerY] = useState("translate-y-0");

  const listenScrollEvent = () => {
    window.scrollY > 1
      ? setnavColor("2xl:bg-zinc-900")
      : setnavColor("2xl:transparent");
    window.scrollY > 1 ? setnavSize("2xl:h-20") : setnavSize("2xl:h-48");
    window.scrollY > 1
      ? setDisplayScroller("opacity-0")
      : setDisplayScroller("opacity-100");
    window.scrollY > 1
      ? setDisplayScrollerY("translate-y-12")
      : setDisplayScrollerY("translate-y-0");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    // #212529
    <div>
      <div
        id="kezdőlap"
        className="bg-it-background h-screen w-full  text-gray-300"
      >
        <div className="bg-slate-900 bg-opacity-90 w-full h-screen">
          <Header navSize={navSize} navColor={navColor}></Header>
          <main className="absolute left-20 top-96 ">
            <div>
              <p data-aos="fade-right" className="lg:text-9xl font-roboto-mono">
                Tóth Bálint
              </p>
              <p data-aos="fade-up" className="lg:text-7xl font-roboto-serif ">
                Junior Frontend Fejlesztő
              </p>
            </div>
          </main>
          <div
            className={`absolute bottom-6 w-full ${displayScroller} flex justify-center ${displayScrollerY} transition-all duration-500`}
          >
            <div className="w-8 h-16 border-2 rounded-full flex justify-center">
              <div className=" w-4 h-4 mt-2 bg-gray-300 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
      <Technology></Technology>
      <Projects></Projects>
      {/* <div className="h-96"></div> */}
    </div>
  );
}

export default App;
