import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Measures from '@/components/Measures'
import Measure from '@/components/Measure'
import Programs from '@/components/Programs'

import MeasuresData from '../data/measures'

import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const inl = useRouter()
  const [modal, setModal] = useState(() => ({open: false, opendedMeasure: null}))

  const modalHandle = (slug) => {
    const measure = MeasuresData.find(m => m.slug === slug)
    setModal({open: true, opendedMeasure: measure})
    console.log('modal', modal)
    console.log('slug', slug)
  }

  const closeModal = () => {
    setModal({open: false, opendedMeasure: null});

  }

  useEffect(() => {
    const flag = inl['locale'] === 'ar-AR' || ''
    document.body.style.direction = flag? 'rtl': 'ltr'
    const container = document.querySelector('.right-container') || document.querySelector('.left-container')

    if(container.classList.contains('right-container') && !flag) {
      container.classList.add('left-container')
      container.classList.remove('right-container')
    } else if(container.classList.contains('left-container') && flag) {
      container.classList.remove('left-container')
      container.classList.add('right-container')
    }
  })

  useEffect(() => {
    if(modal.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  return (
    <div className='full-width'>
        <header>
          {/* Navbar */}
          <Navbar inl={inl} />

          {/* Stories */}
          <Stories inl={inl} />
        </header>

        <main className={styles.main}>
          {/* Measures */}
          <Measures inl={inl} modalHandle={modalHandle} />

          {/* Programs */}
          <Programs inl={inl} />
        </main>

        {modal.open && (
          <AnimatePresence>
              <Measure inl={inl} measure={modal.opendedMeasure} closeModal= {closeModal} />
            </AnimatePresence>
        )}
    </div>

  )
}
