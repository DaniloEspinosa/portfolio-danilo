import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextoAnimado = () => {
  return (
    <div className="headline-1  max-w-[1ch] mt-5">
      
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Hi world...",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Hi friends...",
          1000,
          "Hi everyone!",
          1500,
        ]}
        wrapper="span"
        speed={30}
        style={{  display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextoAnimado;
