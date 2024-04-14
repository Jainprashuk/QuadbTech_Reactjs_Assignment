import React, { useEffect, useState } from "react";
import Image from "./QBTLogoBlack.png"; // Import your image (adjust the path accordingly)

function Starter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const originalText = "QUADB TECH";
    let index = 0;

    const intervalId = setInterval(() => {
      setText(originalText.slice(0, index + 1));
      index++;

      if (index === originalText.length) {
        clearInterval(intervalId);

        setTimeout(() => {
          setText("");
          index = 0;

          setInterval(() => {
            setText(originalText.slice(0, index + 1));
            index++;

            if (index === originalText.length) {
              clearInterval(intervalId);
            }
          }, 100);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <img
        src={Image}
        alt="logo image"
        width={600}
        height={400}
        className="w-22 md:w-36 pb-10 mb-10 mx-auto md:pb-0 object-contain rounded-full border-white border-2"
      />
      <div className="flex justify-center">
        <p className="animated-text my-auto font-extrabold text-5xl">{text}</p>
      </div>
    </div>
  );
}

export default Starter;
