import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Measures from '@/components/Measures'
import Measure from '@/components/Measure'
import Programs from '@/components/Programs'

import MeasuresData from '../data/measures'

import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {

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
    if(modal.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  return (
    <div className='full-width'>
      <div className='container'>
        <header>
          {/* Navbar */}
          <Navbar />

          {/* Stories */}
          <Stories />
        </header>

        <main className={styles.main}>
          {/* Measures */}
          <Measures modalHandle={modalHandle} />

          {/* Programs */}
          <Programs />
        </main>

        {modal.open && (
          <AnimatePresence>
              <Measure measure={modal.opendedMeasure} closeModal= {closeModal} />
            </AnimatePresence>
        )}
      </div>
    </div>

  )
}
