import React, { useEffect, useState } from 'react'
import "../scss/Quiz.scss"
import quizData from "../QuestionData"
import SingleQuiz from './SingleQuiz'

function Quiz() {

    const [allQuiz, setAllQuiz] = useState(quizData)
    const [revealAnswers, setRevealAnswers] = useState(false)

    useEffect(() => {
        if(revealAnswers===false)
            setAllQuiz(prevAllQuiz => prevAllQuiz.map((quiz: any) => ({ ...quiz, selectedOption: "none" })))
    }, [revealAnswers])

    const quizes = allQuiz.map((quiz: any) => {
        return(
        <SingleQuiz
            key={quiz.id}
            quiz={quiz}
            revealAnswers={revealAnswers}
            handleClick={optionClick}
        />
    )})

    function optionClick(quizId: any, option: String) {
        setAllQuiz(prevAllQuiz => prevAllQuiz.map((quiz: any) => {
            console.log(quiz.id, quizId, option)
            return quizId === quiz.id ? { ...quiz, selectedOption: option } : quiz
        }))
    }

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