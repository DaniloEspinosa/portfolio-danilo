import { ButtonDownload, ButtonOutline } from "./Button";
import TextoAnimado from "./TextoAnimado";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="lg:hidden md:block">
          <figure
            className="w-full max-w-[350px] m-auto bg-zinc-100/75
           rounded-[80px] mb-10
          overflow-hidden border-4 border-emerald-600"
          >
            <img
              src="/images/danilo-perfil.png"
              width={656}
              height={800}
              alt="Danilo Espinosa"
              className="w-full"
            />
          </figure>
        </div>

        <div className="lg:text-left">
          <div className="flex items-center  justify-center lg:justify-start gap-3 mb-10 ">
            <figure className="img-box w-10 h-10 rounded-lg">
              <img
                src="/images/avatar-danilo.webp"
                width={40}
                height={40}
                alt="Danilo Espinosa portrait"
                className="image-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>


            <TextoAnimado />


          <h2 className="headline-1  max-w-[1ch] mt-5 mb-8 lg:mb-10">
            I'm Danilo, a developer specializing in modern, scalable, and
            intuitive websites.
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <ButtonDownload
              label="Download CV"
              icon="download"
              href="/danilo-cv.pdf"
            />

            <ButtonOutline
              href="/danilo-cv.pdf"
              label="View CV"
              icon="visibility"
              target="_blank"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[420px] ml-auto bg-zinc-100/75
           rounded-[80px]
          overflow-hidden border-4 border-emerald-600"
          >
            <img
              src="/images/danilo-perfil.png"
              width={656}
              height={800}
              alt="Danilo Espinosa"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
