import React from 'react'

import styles from './Business.module.css'

const Business = ({inl}) => {
  const {locale} = inl

  return (
    <div>
        <article className={styles.business}>
            <div className={styles.business__left}>
            <div className={styles.business__icon}>
                <svg id="i-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
                    <circle cx="16" cy="16" r="4" />
                </svg>
            </div>
            {locale === 'ar-AR'? (
                <div className={styles.business__content}>
                    <h2 className={styles.business__title}>كيورا للأعمال</h2>
                    <p className={styles.business__description}>حزمة من خدمات الرفاهية النفسية المدعومة للموظفين.</p>
                </div>
            ) : (
                <div className={styles.business__content}>
                    <h2 className={styles.business__title}>Cura for Business</h2>
                    <p className={styles.business__description}>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
            )}
            </div>
            <div className={styles.business__arrow}>
                <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M20 30 L8 16 20 2" />
                </svg>
            </div>
        </article>
    </div>
  )
}

export default Business