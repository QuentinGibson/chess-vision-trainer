import './App.css';
import Chessboard from 'chessboardjsx';
import checkmark from './imgs/check.png';
import xmark from './imgs/remove.png';
import { useTimer } from 'react-timer-hook';
import {useState} from 'react'

function App() {
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  let {
    seconds,
    minutes,
    start,
    restart,
    isRunning,
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => console.warn('onExpire called') })

  if (seconds < 10) {
    seconds = "0" + seconds
  }

  let [score, setScore] = useState(0)
  let [record, setRecord] = useState([])
  let [square, setSquare] = useState(null)

  let generateSquare = () => {
    let randomInt = () => Math.floor(Math.random() * 7)
    console.log(randomInt())
    const row = ["a","b","c","d","e","f","g","h"]
    const column = ["1","2","3","4","5","6","7","8"]
    
    const chessRow = row[randomInt()]
    const chessColumn = column[randomInt()]
    console.log(chessRow + chessColumn)
    setSquare(chessRow + chessColumn)
  }

  const handleClick = (pickedSquare) => {
    if (isRunning) {
      if (pickedSquare === square) {
        setScore(prevState => prevState + 1)
        setRecord(prevState => [...prevState, {square: square, correct: true}])
      } else {
        setRecord(prevState => [...prevState, {square: square, correct: false}])
      }
      generateSquare()
    }
  }

  const recordElements = record.map(record => {
    if (record.correct) {
      return (
      <div className="score-board--record-data">
        <img className="score-board--record_correct_logo" alt="Check mark" src={checkmark} />
        <span className="score-board--record_correct_square">{record.square}</span>
      </div>
      )
    } else {
      return (
      <div className="score-board--record-data">
        <img className="score-board--record_wrong_logo" alt="X Mark" src={xmark} />
        <span className="score-board--record_wrong_square">{record.square}</span>
      </div>
      )
    }
  }      
)

  return (
    <div className="App">
      <main className="App-header">
        <span className="App-Title text-gray-800 dark:text-gray-100 text-5xl font-bold mb-8">Chess Vision Trainer</span>
        <span className="App-score">Click On: {square}</span>
        <div className="App-game">
          <Chessboard showNotation={false} onSquareClick={handleClick} />
          <section className="score-board w-full bg-white dark:bg-gray-800 py-5 flex items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
            <span className="score-board--title text-gray-800 dark:text-gray-100 text-lg font-bold">
              Score : {score}
            </span>

            <span className="score-board--timer text-gray-800 dark:text-gray-100 text-lg font-bold">{minutes}:{seconds}</span>
            <div className="score-board--record">
              {recordElements}
            </div>
            <button onClick={() => {
              generateSquare()
              setScore(0)
              setRecord([])
              start()
              if (isRunning) restart(expiryTimestamp)
            }}
              className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-16 py-4 text-xl">
              Start
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
