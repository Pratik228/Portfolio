import { motion } from "framer-motion";
import { styles } from "../styles";
import { CyberpunkHovercarCanvas } from "./canvas";
import CanvasLoader from "./Loader";
import { Suspense, useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-hero-pattern`}
        style={{ backgroundImage: "url('/src/assets/herobg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-left via-gradient-bottom to-gradient-right opacity-80"></div>
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div>
          <motion.h1 className={`${styles.heroHeadText} text-white`}>
            <TypingText text="Hi, I'm Pratik" />
          </motion.h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Welcome! I am an aspiring developer{" "}
            <br className="sm:block hidden" /> who loves to convert coffee into
            code.
          </p>
        </div>
      </div>
      {!isMobile && (
        <Suspense fallback={<CanvasLoader />}>
          <CyberpunkHovercarCanvas />
        </Suspense>
      )}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#ffdf00] flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
                backgroundColor: ["#a29bfe", "#ff6b6b", "#a29bfe"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

const TypingText = ({ text }) => {
  const characters = text.split("");
  const totalDuration = characters.length * 0.1;
  const repeatDelay = 5; // Time to wait before starting to type again

  return (
    <div className="relative inline-block">
      {characters.map((char, index) => {
        const isSpace = char === " ";
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.1,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "restart",
                repeatDelay: totalDuration + repeatDelay,
              },
            }}
            className={`inline-block ${isSpace ? "whitespace-pre" : ""}`}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default Hero;
