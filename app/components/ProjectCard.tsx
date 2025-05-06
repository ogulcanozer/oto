import { formatDate } from '../lib/utils';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  showViewButton?: boolean;
}

export default function ProjectCard({ project, showViewButton = true }: ProjectCardProps) {
  return (
    <div className="retro-card">
      <div className="aspect-video relative w-full border border-black mb-4">
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          {project.category === 'game' ? '[Game Screenshot]' : 
           project.category === 'asset' ? '[Asset Preview]' : 
           '[Tool Screenshot]'}
        </div>
      </div>
      
      <h2 className="text-xl font-bold border-none pb-0 mb-2">{project.title}</h2>
      <div className="pixel-divider"></div>
      
      <p className="my-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs border border-black px-2 py-1">{tag}</span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm">Released: {formatDate(project.releaseDate)}</p>
        {showViewButton && project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="retro-button"
          >
            {project.category === 'game' ? 'VIEW GAME' : 
             project.category === 'asset' ? 'VIEW ASSET' : 
             'VIEW TOOL'}
          </a>
        )}
      </div>
    </div>
  );
}