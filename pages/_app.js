import '@/styles/globals.css'
import '@/styles/normalize.css'
import '@/styles/slug.css'

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '@/components/Navbar'

import { AnimatePresence } from 'framer-motion'


export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const inl = useRouter()


  useEffect(() => {
    const flag = inl['locale'] === 'ar-AR'
    const html = document.querySelector('html')
    if(flag) {
      html.setAttribute('dir', 'rtl')
    } else {
      html.setAttribute('dir', 'ltr')
    }

  })

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')

    }
  })

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {inl.locale === 'ar-AR'? (
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        ) : (
          <>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
          </>
        )}

        {darkMode? (
          <link rel='stylesheet' href='../styles/darkmode.css' />
        ) : (
          ''
        )}
      </Head>

        <div className='container'>
          <header>
            {/* Navbar */}
            <Navbar inl={inl} darkMode={darkMode} setDarkMode={setDarkMode}  />
          </header>
        </div>

      <AnimatePresence 
        // mode='wait'
        // initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0)
        }}

      >
        <Component {...pageProps} key={inl.locale} />
      </AnimatePresence>
    </>
  )
}
