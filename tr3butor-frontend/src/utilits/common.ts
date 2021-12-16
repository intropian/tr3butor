export function shuffle (array: Record<any, any>) {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export const randomItemFromArray = (array: Record<any, any>) =>
  array[Math.floor(Math.random() * array.length)]

export const cutSentences = (str: string, maxLen: number, separator = ' ') => {
  if (str.length <= maxLen) return str
  return str.substring(0, str.lastIndexOf(separator, maxLen)) + '...'
}
