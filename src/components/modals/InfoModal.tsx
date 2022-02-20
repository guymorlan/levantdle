import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 8 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ت"
          status="correct"
        />
        <Cell value="ف" />
        <Cell value="ك" />
        <Cell value="ي" />
        <Cell value="ر" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ت is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ز" />
        <Cell value="م" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ل"
          status="present"
        />
        <Cell value="ا" />
        <Cell value="ء" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ل is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="إ" />
        <Cell value="ن" />
        <Cell value="ص" />
        <Cell isRevealing={true} isCompleted={true} value="د" status="absent" />
        <Cell value="م" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter د is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is based on an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here.
        </a>{' '}
      </p>
      Levantine Arabic version by Guy Mor-Lan
    </BaseModal>
  )
}
