import {useRef, useState} from 'react'

import Link from 'next/link'
import MeasuresData from '../../data/measures'
import questions from '../../data/questions'
import styles from './[slug].module.css'

import { motion } from 'framer-motion'

export async function getServerSideProps({params}) {
    const {slug} = params
    const measure = MeasuresData.find(m => m.slug === slug)
    return {
        props: {
            measure,
        }
    }
}

function Meausre({measure}) {
    const [questionsStart, setQuestionsStart] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = useRef(null);
    const collectedData = useRef({});
    // derived states
    const question = questions[currentQuestion];
    console.log("hey", question)

    const selectAnswerHandle = (answer) => {
        selectedAnswer.current = answer
    }

    const handleAnswers = (e) => {
        e.preventDefault()
        if(question && selectedAnswer) {
            collectedData.current[question] = selectedAnswer
            if(currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1)
                selectedAnswer.current = null;
            }
        }
    }

    return (
        <motion.div 
            initial={{opacity: 0.7}} 
            animate={{opacity: 1}} 
            transition={{duration: 0.5}}
        >
        <div className={styles.main} style={{backgroundColor: `${measure.background}`}}>
            <div className='container'>
                <main>
                    <motion.div 
                        initial={{opacity: 0.5, scale: 0.5}} 
                        animate={{opacity: 1, scale: 1}} 
                        transition={{duration: 0.5}}
                    >
                    <section className={styles.meausre}>
                    {!questionsStart? (
                        <div>
                            <h2 className={styles.measure__title}>
                                {measure.title}
                            </h2>
                            <p className={styles.measure__description}>
                                {measure.description}
                            </p>

                            <p className={styles.measure__message}>
                                في الأسئلة التالية نرجوا ان تخبرنا اي من الاعراض التي تتكرر لديك خلال الاسبوعيين الماضيين
                            </p>

                            <p className={styles.measure__note}>
                                تنويه: هذه الاختبارات ليست أداة تشخيص او اداة علاجية ولا تغنى عن جلسة الطبيب او العلاج النفسي.
                            </p>
                            <button 
                                className={styles.measure__button} 
                                style={{backgroundColor: `${measure.background}`}}
                                onClick={() => setQuestionsStart(!questionsStart)}
                                >
                                    البدأ الآن
                            </button>
                        </div>
                        ) : (
                            <motion.div 
                                initial={{opacity: 0}} 
                                animate={{opacity: 1}} 
                                transition={{duration: 0.7}}
                            >
                            <form className={styles.question} onSubmit={handleAnswers}>
                                <h2 className={styles.question__title}>
                                    {question.title}
                                </h2>
                                <div className={styles.answers}>
                                    {question.options.map(option => (
                                        <div key={option.id}>
                                            <label htmlFor={option.id} className={styles.answer}>
                                                {option.title}
                                                <input 
                                                    className={styles.answer__input} 
                                                    type='radio' 
                                                    value={option.value} 
                                                    id={option.id} 
                                                    name={question.id}
                                                    onChange={selectAnswerHandle(option.id)}
                                                    // checked={selectedAnswer.current === option.id}
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button 
                                className={styles.measure__button} 
                                style={{backgroundColor: `${measure.background}`}}
                                disabled={!selectedAnswer}
                                >
                                    التالي
                            </button>
                            </form>
                            </motion.div>
                        )}
                    </section>
                    </motion.div>

                </main>
            </div>
        </div>
        <motion.div 
            initial={{x: -20, y: -20}} 
            animate={{x: 0, y: 0}} 
            transition={{duration: 0.5}}
        >
            <Link href='/' className={styles.backButton}>
                <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M12 30 L24 16 12 2" />
                </svg>
            </Link>
        </motion.div>
    </motion.div>
    )
}

export default Meausre