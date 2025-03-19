import type { SectionInfo } from './section';

interface CoverInfo {
  intro: string
  github: string
  linkedin: string
}

const common = {
  github: 'https://github.com/Diego-0110',
  linkedin: 'https://www.linkedin.com/in/diego-quiroga-jald%C3%ADn/',
} satisfies Partial<CoverInfo>

export const cover: SectionInfo<CoverInfo> = {
  en: {
    title: 'Diego Quiroga Jaldín',
    subtitle: 'Front-end Developer/Computer Scientist',
    content: {
      ...common,
      intro: 'Graduated in computer science with an outstanding record. Self-taught web developer with more than 1 year of experience programming personal web apps.',
    }
  },
  es: {
    title: 'Diego Quiroga Jaldín',
    subtitle: 'Desarrollador Fron-end/Ingeniero Informático',
    content: {
      ...common,
      intro: 'Graduado en ingeniería informática con el mejor expediente de la promoción. Formado en desarrollo web por cuenta propia y con más de 1 año de experiencia programando aplicaciones web personales.'
    }
  }
}
