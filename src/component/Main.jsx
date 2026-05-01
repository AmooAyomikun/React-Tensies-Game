import React from 'react'
import { useRef, useEffect } from 'react'
import Die from './Die'
import ReactConfetti from 'react-confetti'

const Main = () => {
    const [dice, setDice] = React.useState(() => generateAllNewDice())
    const buttonRef = useRef(null)
    
    const gameWon = dice.every(die => die.isHeld) && 
                    dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if(gameWon){
            buttonRef.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice(){
        const newDice = []
        for (let i = 0; i < 10; i++) {                              
            newDice.push({
                value: Math.ceil(Math.random() * 6 ), 
                isHeld: false,
                id: i
            })  
        }
        return newDice
    }

    const diceElements = dice.map((dieObj, index) => {
        return <Die 
                    key={dieObj.id} 
                    value={dieObj.value} 
                    isHeld={dieObj.isHeld} 
                    hold={() => hold(dieObj.id)}
                />
    })

    function rollDice(){
        if(!gameWon){
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ? die : {...die, value:Math.ceil(Math.random() * 6 )}
            ))
        }else {
            setDice(generateAllNewDice())
        }
    }

    function hold(id){
        setDice(oldDice => {
            return oldDice.map(die => {
                return die.id === id ?
                    {...die, isHeld: !die.isHeld} : die
            })
        })
    }


  return (
    <main>
        {gameWon && <ReactConfetti />}
        <div aria-live='polite' className='sr-only'>
            {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
        <div className="dice-container">
            {diceElements} 
        </div>
        <button ref={buttonRef} className='roll-dice' onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default Main