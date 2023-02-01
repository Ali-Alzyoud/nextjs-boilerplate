import React from 'react'

import Link from 'next/link'
import MeasuresData from '../data/measures'
import styles from './Measures.module.css'

import { getIcon } from '@/utils/utils'

const Measures = () => {
  return (
    <section className={styles.measures}>
      <header className={styles.measures__header}>
        <h2 className={styles.measures__title}>المقاييس النفسية</h2>
      </header>
      <ul className={styles.measures__items}>
        {MeasuresData.map(measure => (
          <li key={measure.id}>
            <Link href={`/measures/${measure.slug}`} className={styles.measure} style={{backgroundColor: measure.background}}>
              <header className={styles.measure__header}>
                <div className={styles.measure__right}>
                  {getIcon(measure.icon)}
                </div>
                <div className={styles.measure__left}>
                  <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M20 30 L8 16 20 2" />
                  </svg>
                </div>
              </header>
              <h2 className={styles.measure__title}>{measure.title}</h2>
            </Link>
          </li>
        ))}
        <li></li>
      </ul>
    </section>
  )
}

export default Measures