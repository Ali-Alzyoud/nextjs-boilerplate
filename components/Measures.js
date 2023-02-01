import React from 'react'

import Link from 'next/link'
import MeasuresData from '../data/measures'
import styles from './Measures.module.css'

const Measures = () => {
  return (
    <section className={styles.measures}>
      <header className={styles.measures__header}>
        <h2 className={styles.measures__title}>المقاييس النفسية</h2>
      </header>
      <ul className={styles.measures__items}>
        {MeasuresData.map(measure => (
          <li className={styles.measure}>
            <i>icon</i>
            <h3 className={styles.measure__title}>{measure.title}</h3>
            <Link href={`/measures/${measure.slug}`}>click here</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  )
}

export default Measures