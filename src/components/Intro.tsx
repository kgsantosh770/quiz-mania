import React from 'react'
import '../scss/Intro.scss'

function Intro(props: any) {
    return (
        <div className='intro-component'>
            <h1>Quiz Mania</h1>
            <h3>Start the quizzing experience here !!!</h3>
            <button onClick={props.handleClick}>
                Start Quiz
            </button>
        </div>
    )
}

export default Intro