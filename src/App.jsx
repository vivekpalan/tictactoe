import React , { useState } from 'react'
import './App.css'
import Block from './components/Block'

function App() {
  const [state,setState] = useState(Array(9).fill(null));
  const [currentState,setCurrentState] = useState('X');
  const [winnerCount,setWinnerCount] = useState(0);
  const [gameOver,setGameOver] = useState(false);
  const [winChecker,setWinChecker] = useState(currentState)

  function checkWinner(state){
    if(winnerCount==1){
      setCurrentState('')
    }else{
      const win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
  
      for(let i=0;i<win.length;i++){
        const [a,b,c] = win[i]

        if(state[a]!==null  && state[a] === state[b] && state[a] === state[c]){
          setWinnerCount(1)
          return true
        } 
      }
      return false;
    }

  }

  function handleClick(index){
    if(winnerCount===1){
      setGameOver(true)
    }else{
        setGameOver(false)
        const stateCopy = Array.from(state);
        if(stateCopy[index] !== null) return;
    
        stateCopy[index] = currentState;
        setState(stateCopy);
        setCurrentState(currentState === 'X' ? '0' : 'X');
        if(checkWinner(stateCopy)){
          setState(stateCopy);
          setGameOver(true);
          setWinChecker(currentState)   
          setCurrentState('')
          
        }   
    }
    
  }

  function handleReplay(){
    setGameOver(false)
    setState(Array(9).fill(null))
    setCurrentState('X');
    setWinnerCount(0)
  }

  
  return (
    <>
    <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          <Block onClick={()=>handleClick(0)} value={state[0]}/>
          <Block onClick={()=>handleClick(1)} value={state[1]}/>
          <Block onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className="row">
          <Block onClick={()=>handleClick(3)} value={state[3]}/>
          <Block onClick={()=>handleClick(4)} value={state[4]}/>
          <Block onClick={()=>handleClick(5)} value={state[5]}/>
        </div>
        <div className="row">
          <Block onClick={()=>handleClick(6)} value={state[6]}/>
          <Block onClick={()=>handleClick(7)} value={state[7]}/>
          <Block onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
      </div>
      {gameOver ? <h2><span>{winChecker}</span> won the game 🎉</h2> : ""}
      {gameOver ? <button className='replay-btn' onClick={handleReplay}>Replay</button> : ''}



    </>
  )
}

export default App
