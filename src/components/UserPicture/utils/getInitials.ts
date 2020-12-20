export const getInitials = (name?: string) => {
  if (name) {
    const initialLettersArr = name
    .split(' ')
    .map(str => str.charAt(0).toUpperCase())

    const initials = (initialLettersArr.length > 1)
    ? `${initialLettersArr[0]}${initialLettersArr[initialLettersArr.length - 1]}`
    : initialLettersArr[0];

    return initials
  }

  return false
}