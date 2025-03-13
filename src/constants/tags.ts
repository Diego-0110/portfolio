import type { ColorType } from './colors';
type TagType = 'Languages' | 'Frameworks';

export enum TagId {
  // Languages
  typescript = 'ts',
  javascript = 'js',
  html = 'html',
  css = 'css',
  // Frameworks
  react = 'react',
  next = 'next',
  astro = 'astro',
  remix = 'remix',
}

interface Tag {
  name: string
  type: TagType
  icon: string
  color: ColorType
}

export const tags: Record<TagId, Tag> = {
  // Languages
  [TagId.typescript]: {
    name: 'TypeScript',
    type: 'Languages',
    icon: 'catppuccin:typescript',
    color: 'blue'
  },
  // Frameworks
  [TagId.javascript]: {
    name: 'JavaScript',
    type: 'Languages',
    icon: 'catppuccin:javascript',
    color: 'yellow'
  },
  [TagId.html]: {
    name: 'HTML',
    type: 'Languages',
    icon: 'catppuccin:html',
    color: 'red'
  },
  [TagId.css]: {
    name: 'CSS',
    type: 'Languages',
    icon: 'catppuccin:css',
    color: 'mauve'
  },
  // Frameworks
  [TagId.react]: {
    name: 'React',
    type: 'Frameworks',
    icon: 'catppuccin:typescript-react',
    color: 'blue'
  },
  [TagId.next]: {
    name: 'Next JS',
    type: 'Frameworks',
    icon: 'catppuccin:next',
    color: 'lavender'
  },
  [TagId.astro]: {
    name: 'Astro',
    type: 'Frameworks',
    icon: 'catppuccin:astro',
    color: 'red'
  },
  [TagId.remix]: {
    name: 'Remix',
    type: 'Frameworks',
    icon: 'catppuccin:remix',
    color: 'lavender'
  }
}

function groupTags () {
  const res: Record<string, Record<string, Tag>> = {}
  for (const [key, value] of Object.entries(tags)) {
    if (!res[value.type]) {
      res[value.type] = {}
    }
    res[value.type][key] = value
  }
  return res
}

export const groupedTags = groupTags()
