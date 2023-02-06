import React from 'react'

import FeelingData from '../data/feeling'
import styles from './Feeling.module.css'

import {feelingInl, moreInl} from '../data/fixedData'

const Feeling = ({inl}) => {
  const {locale} = inl
  return (
    
      <section className={styles.feelings}>
          <header className={styles.feelings__header}>
            <h2 className={styles.feelings__title}>{feelingInl[locale]}</h2>
          </header>

        <ul className={styles.feelings__items}>
          {FeelingData
          .filter(feeling => feeling.locale === locale)
          .map(feeling => (
            <li className={styles.feeling} key={feeling.id}>
              <div className={`${styles.feeling__emoji} feeling__emogi--dark`}>
                {feeling.emoji}
              </div>
              <h3 className={styles.feeling__title}>{feeling.title}</h3>
            </li>
          ))}
        </ul>

      </section>
  )
}

export default Feeling