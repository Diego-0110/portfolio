export function groupBy<T extends Record<string, any>> (arr: T[], key: string) {
  const res: Record<string, T[]> = {}
  for (let i = 0; i < arr.length; i++) {
    if (!res[arr[i][key]]) {
      res[arr[i][key]] = []
    }
    res[arr[i][key]].push(arr[i])
  }
  return res
}
