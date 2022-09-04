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

    function scrollPageToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const quizes = allQuiz.map((quiz: any, index: number) => {
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
            scrollPageToTop()
        }
        else
            setRevealAnswers(true)
    }

    const style = {
        height: loading ? "calc(100vh - 65px)" : ""
    }

    return (
        <div className='quiz-component' style={style}>
            {loading ? <img className='loading' src="/loading-circles.gif"/> :
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