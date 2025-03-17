import type { SectionInfo } from './section';

interface ExperienceInfo {
  role: string
  companyName: string
  startDate: DateObject
  endDate?: DateObject
  details?: string
}

const enExp = [
  {
    role: 'Internship',
    companyName: 'Gazai Transformación Digital',
    startDate: {
      month: 2,
      year: 2024
    },
    endDate: {
      month: 6,
      year: 2024
    },
    details: 'Web development with WordPress, software audit and SEO.'
  }
]

const esExp = [
  {
    role: 'Prácticas',
    companyName: 'Gazai Transformación Digital',
    startDate: {
      month: 2,
      year: 2024
    },
    endDate: {
      month: 6,
      year: 2024
    },
    details: 'Desarrollo web con WordPress, auditorías de software y SEO.'
  }
]

export const experience: SectionInfo<ExperienceInfo[]> = {
  en: {
    title: 'Experience',
    content: enExp
  },
  es: {
    title: 'Experiencia',
    content: esExp
  }
}
