import React from 'react'
import Image from 'next/image'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
            <div className={styles.navbar__right}>
                <Image src="/logo.svg" alt="logo" width={120} height={45} />
            </div>
            <div className={styles.navbar__left}>
                <ul className={styles.navbar__links}>
                    <li className={styles.navbar__link}>
                        بحث
                    </li>
                    <li className={styles.navbar__link}>
                        إشعارات
                    </li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar