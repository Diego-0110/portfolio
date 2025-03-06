import { groupBy } from '../utils/misc';
import type { ColorType } from './colors';
type TagType = 'Languages' | 'Frameworks';

interface Tag {
  id: string
  name: string
  type: TagType
  icon: string
  color: ColorType
}

export const tags: Tag[] = [
  // Languages
  {
    id: 'ts',
    name: 'TypeScript',
    type: 'Languages',
    icon: 'catppuccin:typescript',
    color: 'blue'
  },
  {
    id: 'js',
    name: 'JavaScript',
    type: 'Languages',
    icon: 'catppuccin:javascript',
    color: 'yellow'
  },
  {
    id: 'html',
    name: 'HTML',
    type: 'Languages',
    icon: 'catppuccin:html',
    color: 'red'
  },
  {
    id: 'css',
    name: 'CSS',
    type: 'Languages',
    icon: 'catppuccin:css',
    color: 'mauve'
  },
  // Frameworks
  {
    id: 'next',
    name: 'Next JS',
    type: 'Frameworks',
    icon: 'catppuccin:next',
    color: 'lavender'
  },
  {
    id: 'astro',
    name: 'Astro',
    type: 'Frameworks',
    icon: 'catppuccin:astro',
    color: 'red'
  },
  {
    id: 'remix',
    name: 'Remix',
    type: 'Frameworks',
    icon: 'catppuccin:remix',
    color: 'lavender'
  }
]
export const groupedTags = groupBy<Tag>(tags, 'type')
