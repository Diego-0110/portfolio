import type { ColorType, TextColorType } from '../styles/colors';
import type { Datai18n } from '../i18n/utils';
export type TagType = 'lang' | 'framework' | 'libs';
export const tagTypes: Datai18n<Record<TagType, string>> = {
  en: {
    lang: 'Languages',
    framework: 'Frameworks',
    libs: 'Libraries',
  },
  es: {
    lang: 'Lenguajes',
    framework: 'Frameworks',
    libs: 'Librerías',
  }
}

export enum TagId {
  // Languages
  typescript = 'ts',
  javascript = 'js',
  html = 'html',
  css = 'css',
  // Frameworks
  react = 'react',
  svelte = 'svelte',
  next = 'next',
  astro = 'astro',
  remix = 'remix',
  vite = 'vite',
  // Libraries
  zod = 'zod',
  zustand = 'zustand',
  tailwind = 'tailwind'
}

interface Tag {
  name: string
  type: TagType
  icon: string
  color: ColorType | TextColorType
}

export const tags: Record<TagId, Tag> = {
  // Languages
  [TagId.typescript]: {
    name: 'TypeScript',
    type: 'lang',
    icon: 'catppuccin:typescript',
    color: 'blue'
  },
  [TagId.javascript]: {
    name: 'JavaScript',
    type: 'lang',
    icon: 'catppuccin:javascript',
    color: 'yellow'
  },
  [TagId.html]: {
    name: 'HTML',
    type: 'lang',
    icon: 'catppuccin:html',
    color: 'red'
  },
  [TagId.css]: {
    name: 'CSS',
    type: 'lang',
    icon: 'catppuccin:css',
    color: 'mauve'
  },
  // Frameworks
  [TagId.react]: {
    name: 'React',
    type: 'framework',
    icon: 'catppuccin:typescript-react',
    color: 'blue'
  },
  [TagId.svelte]: {
    name: 'Svelte',
    type: 'framework',
    icon: 'catppuccin:svelte',
    color: 'red'
  },
  [TagId.next]: {
    name: 'Next JS',
    type: 'framework',
    icon: 'catppuccin:next',
    color: 'text'
  },
  [TagId.astro]: {
    name: 'Astro',
    type: 'framework',
    icon: 'catppuccin:astro',
    color: 'red'
  },
  [TagId.remix]: {
    name: 'Remix',
    type: 'framework',
    icon: 'catppuccin:remix',
    color: 'text'
  },
  [TagId.vite]: {
    name: 'Vite',
    type: 'framework',
    icon: 'catppuccin:vite',
    color: 'teal'
  },
  // Libraries
  [TagId.tailwind]: {
    name: 'Tailwind',
    type: 'libs',
    icon: 'catppuccin:tailwind',
    color: 'blue'
  },
  [TagId.zod]: {
    name: 'Zod',
    type: 'libs',
    icon: 'catppuccin:lib',
    color: 'blue'
  },
  [TagId.zustand]: {
    name: 'Zustand',
    type: 'libs',
    icon: 'catppuccin:lib',
    color: 'peach'
  },
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
