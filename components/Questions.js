import React, {useState} from 'react'

import styles from './Questions.module.css'
import { motion } from 'framer-motion'


const Questions = ({handleAnswers, question, measure, inl, progress}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const {locale} = inl

  const selectAnswerHandle = (answer) => {
    setSelectedAnswer(answer)
  }


  return (
    <div>
        <motion.div
            key="measure"
            initial={{opacity: 0.5}} 
            animate={{opacity: 1}} 
            transition={{duration: 0.3}}
            exit={{opacity: 0.5}}
        > 
      <form className={styles.question} onSubmit={(e) => handleAnswers(e, selectedAnswer)}>
        <div className={styles.fixedTitle}>
            اي من الاعراض تكرر لديك خلال الاسبوعين الماضيين؟
        </div>
        <h2 className={styles.question__title}>
            {question.title}
        </h2>
        <div className={styles.answers}>
            {question.options
            .map(option => (
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
        <div className={styles.progress}>
          <div 
            className={styles.progress__completed} 
            style={{backgroundColor: `${measure.background}`, width: `${progress}%`}}
            ></div>
        </div>
        <button 
            className={styles.question__button} 
            style={{backgroundColor: `${measure.background}`}}
            disabled={!selectedAnswer}
            >
                التالي
        </button>

      </form>
      </motion.div>
    </div>
  )
}

export default Questions
