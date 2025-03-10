export function getDateStr({
  day, month, year, locale = 'es-ES'
}: DateObject & { locale?: string }) {
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
  startDate, endDate, locale = 'es-ES'
}: { startDate: DateObject, endDate?: DateObject, locale?: string }) {
  let dateStartYear = startDate.year
  if (endDate && startDate.year === endDate.year) {
    dateStartYear = undefined
  }
  const dateStartStr = getDateStr({ ...startDate, year: dateStartYear, locale })
  if (!endDate) {
    return `${dateStartStr} - ...`
  }
  const dateEndStr = getDateStr({ ...endDate, locale })
  return `${dateStartStr} - ${dateEndStr}`
}
