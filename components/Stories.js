import React from 'react'

import Image from 'next/image'

import StoriesData from '../data/stories'
import styles from './Stories.module.css'

import {storiesInl, moreInl} from '../data/fixedData'

const Stories = ({inl}) => {
  const {locale} = inl
  return (
    
      <div className='container'>
    <section className={styles.stories}>
        <header className={styles.stories__header}>
          <h2 className={styles.stories__title}>{storiesInl[locale]}</h2>
          <p>{moreInl[locale]}</p>
        </header>

      <ul className={styles.stories__items}>
        {StoriesData
        .filter(story => story.locale === locale)
        .map(story => (
          <li className={styles.story} key={story.id}>
            <div className={styles.gradient}>
              <Image className={styles.story__image} src={story.image} alt={story.title} width={100} height={100} />
            </div>
            <h3 className={styles.story__title}>{story.title}</h3>
          </li>
        ))}
      </ul>
    </section>
      </div>
  )
}

export default Stories