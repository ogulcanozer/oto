export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'game' | 'asset' | 'tool';
  tags: string[];
  url?: string;
  releaseDate: string;
};

export const projects: Project[] = [
  {
    id: 'pixel-adventure',
    title: 'Pixel Adventure',
    description: 'A retro-style platformer game with pixel art graphics and challenging levels.',
    imageUrl: '/images/placeholder-game.jpg',
    category: 'game',
    tags: ['Steam', 'Platformer', 'Pixel Art'],
    url: 'https://store.steampowered.com',
    releaseDate: '2023-08-15',
  },
  {
    id: 'space-shooter',
    title: 'Galaxy Defender',
    description: 'An arcade-style space shooter with procedurally generated levels and power-ups.',
    imageUrl: '/images/placeholder-game.jpg',
    category: 'game',
    tags: ['Steam', 'Arcade', 'Space'],
    url: 'https://store.steampowered.com',
    releaseDate: '2022-11-20',
  },
  {
    id: 'optimization-toolkit',
    title: 'Performance Optimization Toolkit',
    description: 'A collection of tools for optimizing Unity games, improving framerate and reducing memory usage.',
    imageUrl: '/images/placeholder-asset.jpg',
    category: 'asset',
    tags: ['Unity', 'Optimization', 'Performance'],
    url: 'https://assetstore.unity.com',
    releaseDate: '2023-02-10',
  },
  {
    id: 'procedural-terrain',
    title: 'Procedural Terrain Generator',
    description: 'A powerful terrain generation system with customizable biomes, erosion simulation, and vegetation placement.',
    imageUrl: '/images/placeholder-asset.jpg',
    category: 'asset',
    tags: ['Unity', 'Procedural', 'Terrain'],
    url: 'https://assetstore.unity.com',
    releaseDate: '2022-05-22',
  },
  {
    id: 'build-automator',
    title: 'Build Automation Pipeline',
    description: 'A comprehensive CI/CD solution for game development teams to automate building, testing, and deployment.',
    imageUrl: '/images/placeholder-tool.jpg',
    category: 'tool',
    tags: ['Automation', 'CI/CD', 'DevOps'],
    releaseDate: '2023-06-08',
  },
  {
    id: 'asset-optimizer',
    title: 'Asset Optimization Suite',
    description: 'A suite of tools for automatically optimizing textures, models, and audio files for game development.',
    imageUrl: '/images/placeholder-tool.jpg',
    category: 'tool',
    tags: ['Optimization', 'Assets', 'Automation'],
    releaseDate: '2022-09-14',
  }
];

export function getProjectsByCategory(category: Project['category']) {
  return projects.filter(project => project.category === category);
}

export function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}