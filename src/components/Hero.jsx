import { ButtonDownload, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg">
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
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Hi, I'm Danilo, a developer of modern, scalable and intuitive
            websites.
          </h2>
          <div className="flex items-center gap-3">
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
            className="w-full max-w-[480px] ml-auto
          bg-gradient-to-t from-zinc-50 via-45% via-zinc-400/40 to-95% rounded-[80px]
          overflow-hidden"
          >
            <img
              src="/images/hero-banner.png"
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
