import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-2.jpg",
    title: "CreArt ONG app",
    tags: ["MIGRATION", "SPA", "DESIGN"],
    projectLink: "https://web-creart-2.onrender.com/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Musician app",
    tags: ["Development", "API"],
    projectLink: "https://chelosueldo.netlify.app/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "La botiga de cafè",
    tags: ["Web-design", "Development"],
    projectLink: "https://botigadecafe.netlify.app/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://www.linkedin.com/in/danilo-espinosa-web/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Renting moto-bike app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://practicas-cief-next.vercel.app/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://www.linkedin.com/in/danilo-espinosa-web/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
