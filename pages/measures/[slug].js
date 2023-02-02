import {useRef, useState, useEffect} from 'react'

import Link from 'next/link'
import MeasuresData from '../../data/measures'
import questions from '../../data/questions'
import styles from './[slug].module.css'

import { AnimatePresence, motion } from 'framer-motion'
import Questions from '@/components/Questions'

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
    const [showingResult, setShowingResult] = useState(false);
    // const selectedAnswer = useRef(null);
    const collectedData = useRef({});
    // derived states
    const question = questions[currentQuestion];

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
            <motion.div 
                initial={{opacity: 0.7}} 
                animate={{opacity: 1}} 
                transition={{duration: 0.5}}
                exit={{opacity: 0.7}}
            >
            <div className={styles.main} style={{backgroundColor: `${measure.background}`}}>
                <div className='container'>
                    <main>
                        <AnimatePresence>
                        <motion.div 
                            initial={{opacity: 0.5, scale: 0.5}} 
                            animate={{opacity: 1, scale: 1}} 
                            transition={{duration: 0.5}}
                            exit={{opacity: 0.5, scale: 0.5}}
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
                                        onClick={() => setQuestionsStart(questionsStart => !questionsStart)}
                                        >
                                            البدأ الآن
                                    </button>
                                </div>
                                ) : !showingResult? (
                                    <Questions handleAnswers={handleAnswers} question={question} measure={measure} />
                                ): (
                                    <div className={styles.result}>
                                        <h2 className={styles.result__title}>نتيجة المقياس</h2>
                                        <p className={styles.result__message}>صحتك النفسية تدعوا للإطمئنان وندعوك للأهتمام بزيادة الصحة النفسية من خلال النوم الصحي، وإضافة بعض المرح، والأكل الصحي، ولعب الرياضة.</p>
                                    </div>
                                )}
                            </section>
                        </motion.div>
                        </AnimatePresence>
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