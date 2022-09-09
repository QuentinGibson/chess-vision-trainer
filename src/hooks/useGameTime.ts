import { useTimer } from 'use-timer'
import { useContext } from 'react'
import GameContext from '../GameContext'
import { endGame } from '../reducers/gameReducer'
export default function useGameTime() {
  const { dispatch } = useContext(GameContext)
  const endGameAction = endGame()
  const { start, reset, pause, status, time } = useTimer({ endTime: 0, initialTime: 60, timerType: "DECREMENTAL", onTimeOver: () => { dispatch(endGameAction) } })
  return { start, reset, pause, status, time }
}
