import { useState, useEffect } from "react";

export default function TypewriterText() {
  const text = "Junior Front-End Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-[3rem] [1000px]:text-[6rem] font-bold text-white text-shadow-black leading-8 my-4">
      {displayedText}
      <span
        className={`inline-block w-[3px] h-[0.6em] bg-yellow-400 ml-1 ${
          isTypingComplete ? "animate-blink" : ""
        }`}
        style={{
          animation: isTypingComplete ? "blink 1s step-end infinite" : "none",
        }}
      />
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </h1>
  );
}
