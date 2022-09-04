import React, { useEffect, useState } from 'react'
import "../scss/Quiz.scss"
import quizData from "../QuestionData"
import SingleQuiz from './SingleQuiz'

function Quiz() {

    const [allQuiz, setAllQuiz] = useState(quizData)
    const [revealAnswers, setRevealAnswers] = useState(false)

    const quizes = allQuiz.map((quiz: any) => {
        return(
        <SingleQuiz
            key={quiz.id}
            quiz={quiz}
            revealAnswers={revealAnswers}
        />
    )})

    function checkAnswers() {
        if(revealAnswers)
            setRevealAnswers(false)
        else
            setRevealAnswers(true)
    }

    return (
        <div className='quiz-component'>
            {quizes}
            <button className="submit-quiz-btn" onClick={checkAnswers}>
                {revealAnswers ? "New Mania" : "Check Answers"}
            </button>
        </div>
    )
}

export default Quiz