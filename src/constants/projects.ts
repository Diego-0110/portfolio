interface ProjectInfo {
  name: string
  subtitle?: string
  imgUrl: string
  tags: string[]
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
    tags: ['ts', 'next', 'js', 'html', 'css'],
    description: 'Aplicación web para convertir texto a voz usang la API de Google.',
    repositoryUrl: 'https://github.com/Diego-0110/google-tts-client'
  }
]
