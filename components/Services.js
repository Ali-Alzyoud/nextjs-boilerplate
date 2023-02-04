import React, { useState } from 'react'

import ServicesData from '../data/services'
import {servicesInl} from '../data/fixedData'
import styles from './Services.module.css'

import { getIcon } from '@/utils/utils'

const Services = ({inl}) => {
  const {locale} = inl

  return (
    <div>
      <section className={styles.services}>
          <header className={styles.services__header}>
            <h2 className={styles.services__title}>{servicesInl[locale]}</h2>
          </header>
          <ul className={styles.services__items}>
            {ServicesData
            .filter(service => service.locale === locale)
            .map(service => (
              <li key={service.id}>
                <article className={styles.service}>
                  <div className={styles.service__left}>
                    <div className={styles.service__icon} style={{backgroundColor: service.background}}>
                      {getIcon(service.icon)}
                    </div>
                    <div className={styles.service__content}>
                      <h2 className={styles.service__title}>{service.title}</h2>
                      <p className={styles.service__description}>{service.description}</p>
                    </div>
                  </div>
                    <div className={styles.service__arrow}>
                      <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M20 30 L8 16 20 2" />
                      </svg>
                    </div>
                </article>
              </li>
            ))}
          </ul>
      </section>
    </div>
  )
}

export default Services