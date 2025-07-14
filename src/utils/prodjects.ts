import { Projects } from '../data/projects';

export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  Projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet);
};
