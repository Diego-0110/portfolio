import type { SectionInfo } from "./section"

interface EducationInfo {
  title: string
  institutionName: string
  startDate: DateObject
  endDate?: DateObject
  details?: string
  certificateUrl?: string
}

const enEd: EducationInfo[] = [
  {
    title: 'Computer Science',
    institutionName: 'Complutense University of Madrid (UCM)',
    startDate: {
      month: 9, year: 2020
    },
    endDate: {
      month: 9, year: 2024
    },
    details: 'Award for outstanding record. Mean grade: 8.84.'
  },
  {
    title: 'Full Stack Developer',
    institutionName: 'Full Stack Open (University of Helsinki)',
    startDate: {
      month: 10, year: 2023
    },
    endDate: {
      month: 7, year: 2024
    },
    details: 'Web fundamentals, React, Redux, Express, Testing Web, GraphQL, TypeScript.',
    certificateUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/3a6d35cfc04ab3e5b4e8f4903d35ab98'
  }
]

const esEd: EducationInfo[] = [
  {
    title: 'Ingeniería Informática',
    institutionName: 'Universidad Complutense de Madrid (UCM)',
    startDate: {
      month: 9, year: 2020
    },
    endDate: {
      month: 9, year: 2024
    },
    details: 'Premio al mejor expediente académico. Nota media: 8,84.'
  },
  {
    title: 'Full Stack Developer',
    institutionName: 'Full Stack Open (Universidad de Helsinki)',
    startDate: {
      month: 10, year: 2023
    },
    endDate: {
      month: 7, year: 2024
    },
    details: 'Fundamentos Web, React, Redux, Express, Testing Web, GraphQL, TypeScript.',
    certificateUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/3a6d35cfc04ab3e5b4e8f4903d35ab98'
  }
]

export const education: SectionInfo<EducationInfo[]> = {
  en: {
    title: 'Education',
    content: enEd
  },
  es: {
    title: 'Estudios',
    content: esEd
  }
}
