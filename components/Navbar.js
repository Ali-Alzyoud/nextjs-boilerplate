import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.css'
import {language} from '../data/fixedData'

const Navbar = ({inl}) => {
    const {locales} = inl

  return (
    <div className='container'>

    <nav className={styles.navbar}>
            <div className={styles.navbar__right}>
                <Image src="/logo.svg" alt="logo" width={120} height={45} />
            </div>
            <div className={styles.navbar__left}>
                <ul className={styles.navbar__links}>
                    <li className={styles.navbar__link}>
                        <div className={styles.navIcon}>
                            <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <circle cx="14" cy="14" r="12" />
                                <path d="M23 23 L30 30"  />
                            </svg>
                        </div>
                    </li>
                    <li className={styles.navbar__link}>
                        <div className={styles.navIcon}>
                            <svg id="i-bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6" />
                            </svg>
                        </div>
                    </li>

                    {locales
                    .filter(locale => inl.locale != locale)
                    .map(locale => (
                    <li className={`${styles.navbar__link}`} key={locale}>
                        <Link href={locale} locale={locale} className={styles.inl}>
                            {language[locale]}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
    </nav>
    </div>
  )
}

export default Navbar