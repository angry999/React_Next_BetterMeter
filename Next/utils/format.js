export const formatNumber = (value) => new Intl.NumberFormat().format(value)

export const formatNumberShort = (num, digits = 0) => {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']

  for (let i = units.length - 1; i >= 0; i--) {
    let decimal = Math.pow(1000, i + 1)

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i]
    }
  }

  return num
}

export const formatFullName = (firstName, lastName) => {
  let fullName = ''

  if (firstName && lastName) {
    fullName = firstName + ' ' + lastName
  } else if (firstName || lastName) {
    fullName = firstName || lastName
  }

  return fullName
}

export const formatMinutes = (value) => {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  const secondsStr = seconds < 10 ? `${seconds}0` : seconds

  return `${minutes}:${secondsStr}`
}
