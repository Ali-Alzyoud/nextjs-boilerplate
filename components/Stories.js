import React from 'react'

import Image from 'next/image'

import StoriesData from '../data/stories'
import styles from './Stories.module.css'

const Stories = () => {
  return (
    
    <section className={styles.stories}>
      <div className='container'>
        <header className={styles.stories__header}>
          <h2 className={styles.stories__title}>القصص المميزة</h2>
          <p>عرض المزيد</p>
        </header>
      </div>
      <div className='right-container'>

      <ul className={styles.stories__items}>
        {StoriesData.map(story => (
          <li className={styles.story} key={story.id}>
            <div className={styles.gradient}>
              <Image className={styles.story__image} src={story.image} alt={story.title} width={100} height={100} />
            </div>
            <h3 className={styles.story__title}>{story.title}</h3>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default Stories