import React from 'react'

import Image from 'next/image'

import PropgramsData from '../data/programs'
import styles from './Programs.module.css'

const Programs = () => {
  return (
    <section className={styles.programs}>
      <header className={styles.programs__header}>
        <h2 className={styles.programs__title}>البرامج العلاجية</h2>
        <p>عرض المزيد</p>
      </header>
      <ul className={styles.programs__items}>
        {PropgramsData.map(program => (
          <li key={program.id}>
            <div className={styles.program} style={{backgroundImage: `url(${program.background})`}}>
              <div className={styles.program__overlay}></div>
              <div className={styles.program__info}>
                <h2 className={styles.program__title}>{program.title}</h2>
                <p className={styles.program__count}>{program.count} مراحل</p>
              </div>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  )
}

export default Programs