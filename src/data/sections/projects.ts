import type { SectionInfo } from "./section"

import { TagId } from "../tags"

interface ProjectInfo {
  name: string
  subtitle?: string
  imgUrl: string
  tags: TagId[]
  description: string
  repositoryUrl?: string
  webUrl?: string
  addUrl?: string
  // TODO: add creation date?
}



const common = {
  erraticKeys: {
    name: 'Erratic Keys',
    imgUrl: 'erratic_keys.png',
    tags: [
      TagId.next, TagId.react, TagId.zustand,
      TagId.javascript, TagId.html, TagId.css
    ],
    repositoryUrl: 'https://github.com/Diego-0110/erratic-keys',
    webUrl: 'https://erratic-keys.pages.dev/'
  },
  googleTTSClient: {
    name: 'Google TTS Client',
    imgUrl: 'google_tts_client.png',
    tags: [
      TagId.next, TagId.react, TagId.zod,
      TagId.javascript, TagId.html, TagId.css
    ],
    repositoryUrl: 'https://github.com/Diego-0110/google-tts-client'
  },
  ultimateTicTacToe: {
    name: 'Ultimate Tic-Tac-Toe',
    imgUrl: 'ultimate_tic_tac_toe.png',
    tags: [
      TagId.react,
      TagId.javascript, TagId.html, TagId.css
    ],
    repositoryUrl: 'https://github.com/Diego-0110/ultimate-tic-tac-toe',
    webUrl: 'https://ultimate-tic-tac-toe-6x0.pages.dev/'
  },
} satisfies Record<string, Partial<ProjectInfo>>

const enProjects: ProjectInfo[] = [
  {
    ...common.erraticKeys,
    description: 'Web app to change the output of every keyboard key. For example: instead the key A write the character "a", this key write "😃"',
  },
  {
    ...common.googleTTSClient,
    description: 'Web app to convert text to speech using Google\'s API.',
  },
  {
    ...common.ultimateTicTacToe,
    description: 'Web to play locally "ultimate tic-tac-toe" (a tic-tac-toe variation).',
  },
]

const esProjects: ProjectInfo[] = [
  {
    ...common.erraticKeys,
    description: 'Aplicación web cambiar el texto de salida de cada tecla del teclado. Por ejemplo: en lugar de que la tecla A genere una "a", puede generar "😃".',
  },
  {
    ...common.googleTTSClient,
    description: 'Aplicación web para convertir texto a voz usando la API de Google.',
  },
  {
    ...common.ultimateTicTacToe,
    description: 'Web para jugar localmente al juego "súper tres en raya" (variación del tres en raya).',
  },
]

export const projects: SectionInfo<ProjectInfo[]> = {
  en: {
    title: 'Projects',
    content: enProjects
  },
  es: {
    title: 'Proyectos',
    content: esProjects
  }
}
