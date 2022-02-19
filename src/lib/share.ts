import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { getStoredIsHighContrastMode } from './localStorage'
import { MAX_CHALLENGES } from '../constants/settings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
      generateEmojiGrid(guesses) + '\nhttps://levantdle.netlify.app'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      const isHighContrast = getStoredIsHighContrastMode()
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              if (isHighContrast) {
                return '\u202E🟧'
              }
              return '\u202E🟩'
            case 'present':
              if (isHighContrast) {
                return '\u202E🟦'
              }
              return '\u202E🟨'
            default:
              if (localStorage.getItem('theme') === 'dark') {
                return '\u202E⬛'
              }
              return '\u202E⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
