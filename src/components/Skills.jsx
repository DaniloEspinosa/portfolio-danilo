import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/logo-html.svg",
    label: "HTML",
    desc: "Language",
  },
  {
    imgSrc: "/images/logo-javascript.svg",
    label: "JavaScript",
    desc: "Language",
  },
  {
    imgSrc: "/images/logo-typescript.svg",
    label: "TypeScript",
    desc: "Superset of JavaScript",
  },
  {
    imgSrc: "/images/logo-php.svg",
    label: "PHP",
    desc: "Language",
  },

  {
    imgSrc: "/images/logo-react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "/images/logo-next.js.svg",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/logo-nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/logo-expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/logo-wordpress.svg",
    label: "WordPress",
    desc: "CMS",
  },
  {
    imgSrc: "/images/logo-mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/logo-mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/logo-postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/logo-css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/logo-bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/logo-tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/logo-figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Here are some of the main tools and technologies I use daily as a
          full-stack developer.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
