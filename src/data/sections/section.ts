import type { Datai18n } from "../../i18n/utils"

export type SectionInfo<T> = Datai18n<{
  title: string
  subtitle?: string
  content: T
}>
