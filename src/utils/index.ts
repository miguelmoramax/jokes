export const transformDates = (date: string) => {
  const timeStamp = date
  const formattedDate = new Date(timeStamp)
  const day = formattedDate.getDate()
  const month = formattedDate.toLocaleString('default', { month: 'short' })
  const year = formattedDate.getFullYear()
  return `${day} ${month} ${year}`
}

export const formatEmail = (email: string) => {
  const formattedEmail = email.replace(/(?<=@)[^.]+(?=\.)/g, '***')
  return formattedEmail
}


export const viewStyles = (views: number) => {
    let color = 'green'
    if (views < 26) {
      color = 'tomato'
    } else if (views < 51) {
      color = 'orange'
    } else if (views < 76) {
      color = 'yellow'
    }
    return { color: color }
  }