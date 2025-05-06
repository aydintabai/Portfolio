type ProjectCardProps = {
    image: string;
    title: string;
    subtitle: string;
    link?: string;
    tags?: string[];
  };
  
  const ProjectCard = ({ image, title, subtitle, link, tags = [] }: ProjectCardProps) => {
    return (
      <div className="rounded-2xl overflow-hidden shadow border border-black/10 hover:shadow-lg transition-all bg-white">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-black-500 mt-1">{subtitle}</p>
          {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((t, i) => (
              <span
                key={i}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        )}

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-block">
              View Project →
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  