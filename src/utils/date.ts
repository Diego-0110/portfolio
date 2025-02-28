interface DateParams {
  day?: number
  month: number
  year?: number
}
export function getDateStr({
  day, month, year, locale = 'es-ES'
}: DateParams & { locale?: string }) {
  const date = new Date(year || 2000, month - 1, day || 1)
  let resStr = ''
  if (day) {
    resStr = `${day} `
  }
  const monthStr = date.toLocaleString(locale, { month: 'short' })
  resStr += `${monthStr.substring(0, 1).toUpperCase()}${monthStr.substring(1)}.`
  if (year) {
    resStr += ` ${year}`
  }
  return resStr
}

export function getDateIntervalStr({
  dateStart, dateEnd, locale = 'es-ES'
}: { dateStart: DateParams, dateEnd: DateParams, locale?: string }) {
  let dateStartYear = dateStart.year
  if (dateStart.year === dateEnd.year) {
    dateStartYear = undefined
  }
  const dateStartStr = getDateStr({ ...dateStart, year: dateStartYear, locale })
  const dateEndStr = getDateStr({ ...dateEnd, locale })
  return `${dateStartStr} - ${dateEndStr}`
}
