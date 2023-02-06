import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

import Stories from '@/components/Stories'
import Measures from '@/components/Measures'
import Measure from '@/components/Measure'
import Programs from '@/components/Programs'
import Feeling from '@/components/Feeling'
import Services from '@/components/Services'

import MeasuresData from '../data/measures'
import { motion } from 'framer-motion'
import Business from '@/components/Business'
import Gift from '@/components/Gift'


export async function getServerSideProps() {
  const request = await fetch(`https://cura.healthcare/Doctorbrowser/Doctor/GetDoctors?orderby=doctors.AvailabilityId,doctors.rating&orderdir=desc&featured=true&Culture=ar&start_from=0`)
  const doctorsData = await request.json()

  return {
      props: {
          doctorsData,
      }
  }
  
}


export default function Home({doctorsData}) {
  const inl = useRouter()
  const [modal, setModal] = useState(() => ({open: false, opendedMeasure: null}))

  const modalHandle = (slug) => {
    const measure = MeasuresData.find(m => m.slug === slug)
    setModal({open: true, opendedMeasure: measure})
    // console.log('modal', modal)
    // console.log('slug', slug)
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
    <div className='container'>
    <motion.div
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 0.3}}
    > 

    <div className={styles.grid}>

        <main className={styles.main}>
          <Stories inl={inl} doctorsData={doctorsData} />
          <Measures inl={inl} modalHandle={modalHandle} />
          <Programs inl={inl} />
        </main>
        
        <aside className={styles.aside}>
          <Feeling inl={inl} />
          <Services inl={inl} />
          <Business inl={inl} />
          <Gift inl={inl} />
        </aside>
        

        {modal.open && (
          <Measure inl={inl} measure={modal.opendedMeasure} closeModal= {closeModal} />
          )}
    </div>
    </motion.div>
  </div>

  )
}
