import React from 'react'

import Image from 'next/image'

import PropgramsData from '../data/programs'
import styles from './Programs.module.css'

const Programs = () => {
  return (
    <section className={styles.programs}>
      <header className={styles.programs__header}>
        <h2 className={styles.programs__title}>البرامج العلاجية</h2>
      </header>
      <ul className={styles.programs__items}>
        {PropgramsData.map(program => (
          <li className={styles.program}>
            <i>icon</i>
            <h3 className={styles.program__title}>{program.title}</h3>
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  )
}

export default Programs