import React, {useState} from 'react'

import styles from './Questions.module.css'

const Questions = ({handleAnswers, question, measure}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const selectAnswerHandle = (answer) => {
    // selectedAnswer.current = answer
    setSelectedAnswer(answer)
  }


  return (
    <div>
      <form className={styles.question} onSubmit={(e) => handleAnswers(e, selectedAnswer)}>
        <div className={styles.fixedTitle}>
            اي من الاعراض تكرر لديك خلال الاسبوعين الماضيين؟
        </div>
        <h2 className={styles.question__title}>
            {question.title}
        </h2>
        <div className={styles.answers}>
            {question.options.map(option => (
                <div key={option.id}>
                    <label 
                    htmlFor={option.id} 
                    className={`${styles.answer} 
                    ${(selectedAnswer === option.id)? styles.activeAnswer: ''}`}
                    style={{borderColor: `${(selectedAnswer === option.id) ? measure.background: ''}`}}
                    >
                        {option.title}
                        <input 
                            className={styles.answer__input}
                            type='radio' 
                            value={option.value} 
                            id={option.id} 
                            name={question.id}
                            onChange={() => selectAnswerHandle(option.id)}
                            checked={selectedAnswer === option.id}
                            hidden
                        />
                    </label>
                </div>
            ))}
        </div>
        <button 
            className={styles.question__button} 
            style={{backgroundColor: `${measure.background}`}}
            disabled={!selectedAnswer}
            >
                التالي
        </button>
      </form>
    </div>
  )
}

export default Questions
