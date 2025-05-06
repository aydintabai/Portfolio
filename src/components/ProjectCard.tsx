type ProjectCardProps = {
    image: string;
    title: string;
    subtitle: string;
    link?: string;
  };
  
  const ProjectCard = ({ image, title, subtitle, link }: ProjectCardProps) => {
    return (
      <div className="rounded-2xl overflow-hidden shadow border border-black/10 hover:shadow-lg transition-all bg-white">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-black-500 mt-1">{subtitle}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
              View Project →
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  