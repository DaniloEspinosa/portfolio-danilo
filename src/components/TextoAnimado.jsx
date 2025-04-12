import { TypeAnimation } from "react-type-animation";

const TextoAnimado = () => {
  return (
    <div className="headline-1  max-w-[1ch] mt-5">
      <TypeAnimation
        sequence={[
          "Hi world...",
          1000,
          "Hi friends...",
          1000,
          "Hi everyone!",
          1500,
        ]}
        wrapper="span"
        speed={30}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextoAnimado;
