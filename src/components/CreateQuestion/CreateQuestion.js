import React, { useContext, useRef, useState } from 'react';
import { QuizContext } from '../../App';
import './CreateQuestion.css';

const CreateQuestion = () => {

    const [questions, setQuestions] = useState([]);
    const [createdQuestions, setCreatedQuestions] = useContext(QuizContext);

    const quesRef = useRef();
    const opt1Ref = useRef();
    const opt2Ref = useRef();
    const opt3Ref = useRef();
    const opt4Ref = useRef();
    const ansRef = useRef();


    const handleSubmit = e =>{
        const newQuestion = {
            id: questions.length + 1,
            ques: quesRef.current.value,
            opt1: opt1Ref.current.value,
            opt2: opt2Ref.current.value,
            opt3: opt3Ref.current.value,
            opt4: opt4Ref.current.value,
            ans: ansRef.current.value
        }
        const allQuestions = [...questions, newQuestion]
        setQuestions(allQuestions);
        setCreatedQuestions(allQuestions)

        console.log(questions)
        e.preventDefault()
        
        // quesRef.current.value = '';
        // opt1Ref.current.value = '';
        // opt2Ref.current.value = '';
        // opt3Ref.current.value = '';
        // opt4Ref.current.value = '';
        // ansRef.current.value = '';
    }
    return (
        <div className='create-question'>
            <form onSubmit={handleSubmit}>
                <input className='question' ref={quesRef} type="text" placeholder='Enter your question...' required />
                <br /><br />
                <label htmlFor="option">Enter options</label>
                <br />
                <input className='option' ref={opt1Ref} type="text" required />
                <input className='option' ref={opt2Ref} type="text" required />
                <input className='option' ref={opt3Ref} type="text" required  />
                <input className='option' ref={opt4Ref} type="text" required  />
                <br /><br />
                <label htmlFor="option">Enter correct answer</label>
                <br />
                <input className='answer' ref={ansRef} type="text" required />
                <br />
                <button type="submit"  onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
};

export default CreateQuestion;