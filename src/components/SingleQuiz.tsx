import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import "../scss/SingleQuiz.scss"

function SingleQuiz(props: any) {
    const [selectedOption, setSelectedOption] = useState("")
    const [allOptions, setAllOptions] = useState([] as Array<string>)

    useEffect(() => {
        if (props.revealAnswers === false) {
            const randomIndex = Math.ceil(Math.random() * 4)
            const allOptionsArray = props.quiz.incorrect_answers.slice(0, randomIndex)
            allOptionsArray.push(props.quiz.correct_answer)
            const remainingOptions = props.quiz.incorrect_answers.slice(randomIndex)
            if(remainingOptions.length > 0)
                allOptionsArray.push(...remainingOptions)
            setAllOptions(allOptionsArray)
            setSelectedOption("")
        }
    }, [props.revealAnswers, props.quiz.incorrect_answers])


    function optionColor(option: String) {
        const isOptionCorrect = props.quiz.correct_answer === option ? true : false
        if (isOptionCorrect)
            return "green"
        else if (selectedOption === option)
            return "red"
        else
            return ""
    }

    console.log(allOptions)

    const options = allOptions.map((option: string, index: number) => {
        const isSelected = selectedOption === option ? true : false
        const color = optionColor(option);
        return <button
            key={index}
            className={`option ${isSelected ? "selected" : ""} ${props.revealAnswers ? color : ""}`}
            onClick={() => { setSelectedOption(option) }}
        >
            {parse(option)}
        </button>
    })

    return (
        <div className="singlequiz-component">
            <p className="question">{parse(props.quiz.question)}</p>
            <div className={`options ${props.revealAnswers ? "revealed" : ""}`}>
                {options}
            </div>
        </div>
    )
}

export default SingleQuiz