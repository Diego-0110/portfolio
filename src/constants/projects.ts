import { TagId } from "./tags"

interface ProjectInfo {
  name: string
  subtitle?: string
  imgUrl: string
  tags: TagId[]
  description: string
  repositoryUrl?: string
  webUrl?: string
  addUrl?: string
  // TODO: add creation date
}

export const projects: ProjectInfo[] = [
  {
    name: 'Google TTS Client',
    imgUrl: 'https://picsum.photos/200',
    tags: [
      TagId.next, TagId.react,
      TagId.javascript, TagId.html, TagId.css
    ],
    description: 'Aplicación web para convertir texto a voz usang la API de Google.',
    repositoryUrl: 'https://github.com/Diego-0110/google-tts-client'
  },
  {
    name: 'Ultimate Tic-Tac-Toe',
    imgUrl: 'https://picsum.photos/200',
    tags: [
      TagId.react,
      TagId.javascript, TagId.html, TagId.css
    ],
    description: 'Web para jugar localmente al juego "súper tres en raya" (variación del tres en raya).',
    repositoryUrl: 'https://github.com/Diego-0110/ultimate-tic-tac-toe'
  },
]
