import Link from 'next/link'
import MeasuresData from '../../data/measures'
import styles from './[slug].module.css'

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

    return (
        <>
        <div className={styles.main} style={{backgroundColor: `${measure.background}`}}>
            <div className='container'>
                {/* <header>
                    <button className={styles.homeButton}>{'<'}</button>
                </header> */}
                <main>

                    <section className={styles.meausre}>
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

                        <button className={styles.measure__button} style={{backgroundColor: `${measure.background}`}}>البدأ الآن</button>
                    </section>

                </main>
            </div>
        </div>
        <Link href='/' className={styles.backButton}>
            <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M12 30 L24 16 12 2" />
            </svg>
        </Link>
        </>
    )
}

export default Meausre