import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-800/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors border-2 border-emerald-600 " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} className="img-cover" loading="lazy" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className=""
              >
                <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 transition-colors">
                  <img src={label} alt={label} width={32} height={32} />
                </figure>
              </span>
            ))}
          </div>
        </div>


      </div>

      <a href={projectLink} className="absolute inset-0" target="_blank"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
