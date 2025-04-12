import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-ualki-landing.jpg",
    title: "Landing Page UALKI (MERN)",
    tags: [
      "/images/logo-next.js.svg",
      "/images/logo-typescript.svg",
      "/images/logo-expressjs.svg",
      "/images/logo-react.svg",
      "/images/logo-postgresql.svg",

    ],
    projectLink: "https://ualki.com/es",
  },
  {
    imgSrc: "/images/project-ualki-blog.jpg",
    title: "Blog UALKI",
    tags: [
      "/images/logo-wordpress.svg",
      "/images/logo-php.svg",
      "/images/logo-mysql.svg",
      "/images/logo-javascript.svg",
    ],
    projectLink: "https://blog.ualki.com/",
  },
  {
    imgSrc: "/images/project-chefgpt.jpg",
    title: "ChefGPT web APP (MERN)",
    tags: [
      "/images/logo-react.svg",
      "/images/logo-nodejs.svg",
      "/images/logo-vite.svg",
      "/images/logo-chatgpt.svg",
      "/images/logo-qwen.svg",
    ],
    projectLink: "https://chef-gpt-v2.vercel.app/",
  },
  {
    imgSrc: "/images/project-creart-ong.jpg",
    title: "CreArt NGO website (MERN)",
    tags: [
      "/images/logo-typescript.svg",
      "/images/logo-mysql.svg",
      "/images/logo-expressjs.svg",
      "/images/logo-react.svg",
      "/images/logo-nodejs.svg",
    ],
    projectLink: "https://web-creart-2.onrender.com/",
  },
  {
    imgSrc: "/images/project-moto2go.jpg",
    title: "Renting moto-bike app",
    tags: [
      "/images/logo-typescript.svg",
      "/images/logo-react.svg",
      "/images/logo-expressjs.svg",
      "/images/logo-nodejs.svg",
    ],
    projectLink: "https://practicas-cief-next.vercel.app/",
  },
  {
    imgSrc: "/images/project-botiga.jpg",
    title: "La botiga de cafè",
    tags: [
      "/images/logo-html.svg",
      "/images/logo-css3.svg",
      "/images/logo-javascript.svg",
      "/images/logo-figma.svg",

    ],
    projectLink: "https://botigadecafe.netlify.app/",
  },
  {
    imgSrc: "/images/project-martina.jpg",
    title: "Personal page",
    tags: [
      "/images/logo-figma.svg",
      "/images/logo-react.svg",
      "/images/logo-tailwindcss.svg",
      "/images/logo-vite.svg",
    ],
    projectLink: "https://psicologa-michielan.netlify.app/",
  },
  {
    imgSrc: "/images/project-chelo.jpg",
    title: "Musician page",
    tags: [
      "/images/logo-html.svg",
      "/images/logo-css3.svg",
      "/images/logo-bootstrap.svg",
      "/images/logo-javascript.svg",
    ],
    projectLink: "https://chelosueldo.netlify.app/",
  },
  {
    imgSrc: "/images/project-marketplace.jpg",
    title: "Marketplace (MERN)",
    tags: [
      "/images/logo-mongodb.svg",
      "/images/logo-expressjs.svg",
      "/images/logo-react.svg",
      "/images/logo-nodejs.svg",
    ],
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
