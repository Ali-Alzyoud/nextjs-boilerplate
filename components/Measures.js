import React, { useState } from 'react'

import Measure from './Measure'
import MeasuresData from '../data/measures'
import {measuresInl} from '../data/fixedData'
import styles from './Measures.module.css'

import { getIcon } from '@/utils/utils'

const Measures = ({modalHandle, inl}) => {
  const {locale} = inl

  return (
    <div>
      <section className={styles.measures}>
          <header className={styles.measures__header}>
            <h2 className={styles.measures__title}>{measuresInl[locale]}</h2>
          </header>
          <ul className={styles.measures__items}>
            {MeasuresData
            .filter(measure => measure.locale === locale)
            .map(measure => (
              <li key={measure.id}>
                <article
                className={styles.measure} 
                style={{backgroundColor: measure.background}}
                onClick={() => modalHandle(measure.slug)}
                >
                  <header className={styles.measure__header}>
                    <div className={styles.measure__right}>
                      {getIcon(measure.icon)}
                    </div>
                    <div className={styles.measure__left}>
                      <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M20 30 L8 16 20 2" />
                      </svg>
                    </div>
                  </header>
                  <h2 className={styles.measure__title}>{measure.title}</h2>
                  <p className={styles.measure__duration}>{measure.duration}</p>
                </article>
              </li>
            ))}
          </ul>
      </section>
    </div>
  )
}

export default Measures