import React from 'react'

const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59e391" : "white"
    }

  return (
    <>
        <button 
            style={styles} 
            className='die-face'
            onClick={props.hold}
            aria-pressed = {props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld} ? "held" : "not held"`}
        >{props.value}</button>
    </>
  )
}

export default Die