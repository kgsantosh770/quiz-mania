import { wait } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import "../scss/Quiz.scss"
// import quizData from "../QuestionData"
import SingleQuiz from './SingleQuiz'

function Quiz() {

    const [allQuiz, setAllQuiz] = useState([] as any)
    const [revealAnswers, setRevealAnswers] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (revealAnswers === false) {
            fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy")
                .then(res => res.json())
                .then(data => setAllQuiz(data.results))
                .then(() => setLoading(false))
        }
    }, [revealAnswers])

    const quizes = allQuiz.map((quiz: any, index: number) => {
        console.log("dammaaal")
        return (
            <SingleQuiz
                key={index}
                quiz={quiz}
                revealAnswers={revealAnswers}
            />
        )
    })

    function checkAnswers() {
        if (revealAnswers){
            setRevealAnswers(false)
            setLoading(true)
        }
        else
            setRevealAnswers(true)
    }

    return (
        <div className='quiz-component'>
            {loading ? <div>loading...</div> :
                <>
                    {quizes}
                    <button className="submit-quiz-btn" onClick={checkAnswers}>
                        {revealAnswers ? "New Mania" : "Check Answers"}
                    </button>
                </>
            }

        </div>
    )
}

export default Quiz