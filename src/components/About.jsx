const aboutItems = [
  {
    label: "Project done",
    number: 10,
    symbol: "+",
  },

  {
    label: "Motivation",
    number: 100,
    symbol: "%",
  },
  {
    label: "Years of experience",
    number: 3,
    symbol: "+",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up border-2 border-emerald-600">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Danilo Espinosa, a professional web developer
            focused on creating and designing highly functional and
            user-friendly websites. My top priority is ensuring user comfort by
            crafting intuitive and visually appealing web experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number, symbol }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-emerald-400 font-semibold md:text-3xl">
                    {symbol}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
