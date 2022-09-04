import React from 'react'
import "../scss/SingleQuiz.scss"

function SingleQuiz(props: any) {

    function optionColor(option: String) {
        const isOptionCorrect = props.quiz.options[props.quiz.correctOption-1] === option ? true : false
        if(isOptionCorrect)
            return "green"
        else if(props.quiz.selectedOption === option)
            return "red"
        else
            return ""
    }

    const options = props.quiz.options.map((option: string, index: number) => {
        const isSelected = props.quiz.selectedOption === option ? true : false
        const color = optionColor(option);
        return <button
            key={index}
            className={`option ${isSelected ? "selected": ""} ${props.revealAnswers ? color : ""}`}
            onClick={() => { props.handleClick(props.quiz.id, option) }}
        >
            {option}
        </button>
    })

    return (
        <div className="singlequiz-component">
            <p className="question">{props.quiz.question}</p>
            <div className={`options ${props.revealAnswers ? "revealed" : ""}`}>
                {options}
            </div>
        </div>
    )
}

export default SingleQuiz