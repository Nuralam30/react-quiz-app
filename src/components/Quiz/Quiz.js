import React, { useContext } from 'react';
import { QuizContext } from '../../App';
import './Quiz.css';

const Quiz = () => {

    const [createdQuestions, setCreatedQuestions] = useContext(QuizContext);



    return (
        <div className='quiz'>
            {
                createdQuestions.map(qu => qu && 
                <div className='ques' key={qu.id}> 
                    <h2>{qu.ques}</h2>
                    <input type="radio" id="option1" name="option" value={qu.opt1} />
                    <label htmlFor="option1">{qu.opt1}</label>

                    <input type="radio" id="option1" name="option" value={qu.opt2} />
                    <label htmlFor="option1">{qu.opt2}</label>

                    <input type="radio" id="option1" name="option" value={qu.opt3} />
                    <label htmlFor="option1">{qu.opt3}</label>

                    <input type="radio" id="option1" name="option" value={qu.opt4} />
                    <label htmlFor="option1">{qu.opt4}</label><br/>
                </div>)
            }
        </div>
    );
};

export default Quiz;