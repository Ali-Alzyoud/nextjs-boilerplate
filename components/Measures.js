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
        <div className='container'>
          <header className={styles.measures__header}>
            <h2 className={styles.measures__title}>{measuresInl[locale]}</h2>
          </header>
        </div>
        <div className='right-container'>
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
                      <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                          <path d="M20 30 L8 16 20 2" />
                      </svg>
                    </div>
                  </header>
                  <h2 className={styles.measure__title}>{measure.title}</h2>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Measures