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
        <div className={styles.main}>
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

                        <button className={styles.measure__button}>البدأ الآن</button>
                    </section>

                </main>
            </div>
        </div>
        </>
    )
}

export default Meausre