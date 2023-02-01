import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import Measures from '@/components/Measures'
import Programs from '@/components/Programs'

export default function Home() {
  return (
    <>
      <header>
        {/* Navbar */}
        <Navbar />

        {/* Stories */}
        <div>

        </div>
        <Stories />
      </header>

      <main className={styles.main}>
        {/* Measures */}
        <Measures />

        {/* Programs */}

        <Programs />
      </main>
    </>
  )
}
