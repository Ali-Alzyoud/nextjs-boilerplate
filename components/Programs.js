import React from 'react'

import Image from 'next/image'

import PropgramsData from '../data/programs'
import {programsInl, programsMessionInl, moreInl} from '../data/fixedData'
import styles from './Programs.module.css'

const Programs = ({inl}) => {
  const {locale} = inl
  return (
    <section className={styles.programs}>
        <header className={styles.programs__header}>
          <h2 className={styles.programs__title}>{programsInl[locale]}</h2>
          <p>{moreInl[locale]}</p>
        </header>

        <ul className={styles.programs__items}>
          {PropgramsData
          .filter(program => program.locale === locale)
          .map(program => (
            <li key={program.id}>
              <div className={styles.program} style={{backgroundImage: `url(${program.background})`}}>
                <div className={styles.program__overlay}></div>
                <div className={styles.program__info}>
                  <h2 className={styles.program__title}>{program.title}</h2>
                  <p className={styles.program__count}>{program.count} {programsMessionInl[locale]}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Programs