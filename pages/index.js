import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

import Navbar from '@/components/Navbar'
import Stories from '@/components/Stories'
import Measures from '@/components/Measures'
import Measure from '@/components/Measure'
import Programs from '@/components/Programs'
import Feeling from '@/components/Feeling'
import Services from '@/components/Services'

import MeasuresData from '../data/measures'
import { motion } from 'framer-motion'


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

  // useEffect(() => {
  //   const flag = inl['locale'] === 'ar-AR' || ''
  //   document.body.style.direction = flag? 'rtl': 'ltr'
  //   const container = document.querySelector('.right-container') || document.querySelector('.left-container')

  //   if(container.classList.contains('right-container') && !flag) {
  //     container.classList.add('left-container')
  //     container.classList.remove('right-container')
  //   } else if(container.classList.contains('left-container') && flag) {
  //     container.classList.remove('left-container')
  //     container.classList.add('right-container')
  //   }
  // })

  useEffect(() => {
    if(modal.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  return (
    <div className='container'>
    <motion.div
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 0.3}}
    > 

    <div className={styles.grid}>
        <header className={styles.header}>
          {/* Navbar */}
          <Navbar inl={inl} />
        </header>
          <aside>
            <Feeling inl={inl} />
            <Services inl={inl} />
          </aside>

          <main className={styles.main}>
            {/* Stories */}
            <Stories inl={inl} />
            {/* Measures */}
            <Measures inl={inl} modalHandle={modalHandle} />

            {/* Programs */}
            <Programs inl={inl} />
          </main>


        {modal.open && (
          <Measure inl={inl} measure={modal.opendedMeasure} closeModal= {closeModal} />
          )}
    </div>
    </motion.div>
  </div>

  )
}
