interface ExperienceInfo {
  role: string
  companyName: string
  startDate: DateObject
  endDate?: DateObject
  details?: string
}

export const experience: ExperienceInfo[] = [
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
