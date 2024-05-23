export const getHours = (date: Date, hour12: boolean = false): string => {
  const formatter = Intl.DateTimeFormat('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12
  })

  return formatter.format(date)
}
