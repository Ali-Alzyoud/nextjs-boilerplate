import {useRef, useState, useEffect} from 'react'

import questionsData from '../data/questions'
import styles from './Measure.module.css'
import {measureMessageInl, measureNoteInl, measureStartButtonInl, resultTitleInl, resultMessageInl} from '../data/fixedData'

import { motion } from 'framer-motion'
import Questions from '@/components/Questions'

function Meausre({measure, closeModal, inl}) {
    const [questionsStart, setQuestionsStart] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showingResult, setShowingResult] = useState(false);
    const collectedData = useRef({});
    // derived states
    const {locale} = inl
    let questions = questionsData
    questions = questions.filter(question => question.locale === locale);
    const question = questions[currentQuestion];

    const progress = (100/questions.length) * currentQuestion

    const handleAnswers = (e, selectedAnswer) => {
        e.preventDefault()
        if(question && selectedAnswer && currentQuestion < questions.length - 1) {
            collectedData.current[question] = selectedAnswer
            setCurrentQuestion(prev => prev + 1)
        }

        if(currentQuestion >= questions.length - 1) {
            setShowingResult(true)
        } else {
            setShowingResult(false)
        }
        
    }
    return (
        <>
            <div className={styles.modal} style={{backgroundColor: `${measure.background}`}}>
                <div className='container'>
                    <motion.div
                        initial={{opacity: 0.5, scale: 0.5}} 
                        animate={{opacity: 1, scale: 1}} 
                        transition={{duration: 0.3}}
                        exit={{opacity: 0.5, scale: 0.5}}
                    > 
                        <section className={styles.measure}>
                            <header className={styles.measure__header}>
                                <button className={styles.closeButton} onClick={() => closeModal()}>
                                    <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M12 30 L24 16 12 2" />
                                    </svg>
                                </button>

                                <button className={styles.closeButton}>
                                    <svg id="i-activity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
                                    </svg>
                                </button>
                            </header>
                        {!questionsStart? (
                            <div>
                                <h2 className={styles.measure__title}>
                                    {measure.title}
                                </h2>
                                <p className={styles.measure__description}>
                                    {measure.description}
                                </p>

                                <p className={styles.measure__message}>
                                    {measureMessageInl[locale]}
                                </p>

                                <p className={styles.measure__note}>
                                    {measureNoteInl[locale]}
                                </p>

                                <p className={styles.measure__refrence}>
                                    المرجع: إعداد الأطباء روبرت إل سبيتزر، جانيت بي دبليو وليامز، آيرت آرونك والزملاء، بمنحة تعليمية من شرآة.
                                </p>
                                <button 
                                    className={styles.measure__button} 
                                    style={{backgroundColor: `${measure.background}`}}
                                    onClick={() => setQuestionsStart(questionsStart => !questionsStart)}
                                    >
                                        {measureStartButtonInl[locale]}
                                </button>
                            </div>
                            ) : !showingResult? (
                                <Questions inl={inl} handleAnswers={handleAnswers} question={question} measure={measure} progress={progress} />
                            ): (
                                <>
                                    <div className={styles.result}>
                                        <h2 className={styles.result__title}>{resultTitleInl[locale]}</h2>
                                        <p className={styles.result__message}>{resultMessageInl[locale]}</p>
                                    </div>
                                    <div className={styles.progress}>
                                    <div 
                                        className={styles.progress__completed} 
                                        style={{width: `${100}%`}}
                                        ></div>
                                    </div>
                                </>
                            )}
                        </section>
                    </motion.div>
                </div>
            </div>
            <button className={styles.backButton} onClick={() => closeModal()}>
                <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M12 30 L24 16 12 2" />
                </svg>
            </button>
        </>
    )
}

export default Meausre