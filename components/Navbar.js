import React from 'react'
import Link from 'next/link'

import styles from './Navbar.module.css'
import {language} from '../data/fixedData'

const Navbar = ({inl, darkMode, setDarkMode}) => {

    const {locales} = inl

  return (
    <>
    <nav className={styles.navbar}>
            <div className={styles.navbar__right}>
                <Link className="navbar-brand" href="/">
                    <svg width="38" height="28" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg">
                            <g id="Artboard-2" fill="none" fillRule="evenodd">
                            <g id="Group" transform="translate(.75 .5)">
                            <polygon id="Fill-6" fill="#D0DADF" points="21.5992059 3.7304095 23.9710142 12.8795549 18.4156968 7.32421542"></polygon>
                            <path d="M21.5539581,3.76610238 C20.5850482,4.85212773 20.1627547,6.26078101 20.2870988,7.62803419 C20.3673816,8.51080195 20.6755383,9.37631147 21.2115746,10.126585 L23.9053203,12.8795549 C27.0249359,16.0331634 27.0249359,21.1462923 23.9053203,24.2999007 L34.1943673,13.8553298 C37.3083412,10.6966143 37.3083412,5.57541918 34.1943673,2.41675144 C31.0804882,-0.741916302 26.0318245,-0.741916302 22.9179454,2.41675144 L21.5539581,3.76610238 Z" id="Fill-8" fill="#6CD4FF"></path>
                            <path d="M2.33971875,13.8551771 C-0.77989677,10.7015686 -0.77989677,5.58848742 2.33971875,2.43483124 C5.45938169,-0.718824937 10.5172426,-0.718824937 13.6369055,2.43483124 L23.9710379,12.8795931 C27.0906534,16.0331538 27.0906534,21.1462828 23.9710379,24.2998912 C20.851375,27.4535474 15.7934666,27.4535474 12.6738985,24.2998912 L2.33971875,13.8551771 Z" id="Mask" fill="#F05F5F"></path>
                            <path d="M12.6704804,12.8802136 L15.0659325,10.5306505 C16.6560579,8.74763246 16.7253544,6.09234292 15.3562469,4.17845154 L23.9710331,12.8795931 C27.0633888,16.0056141 27.0904116,21.0570292 24.0521489,24.216747 L23.886741,24.3838945 C20.7609624,27.4533087 15.7655383,27.4252917 12.6738938,24.2998912 C9.55655386,21.1600765 9.55655386,16.0388813 12.6704804,12.8802136 Z" id="Fill-3" fill="#C53F3F"></path>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className={styles.navbar__left}>
                <ul className={styles.navbar__links}>
                    <li className={styles.navbar__link}>
                        <div className={styles.navIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                             </svg>
                        </div>
                    </li>
                    <li className={`${styles.navbar__link} ${styles.notification}`}>
                        <div className={styles.navIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </div>
                        <span className={styles.notification__count}>5</span>
                    </li>
                    <li className={styles.navbar__link} onClick={() => setDarkMode(prev => !prev)}>
                        <div className={styles.navIcon}>
                            {darkMode? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                            </svg>
                            )}

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
    </>
  )
}

export default Navbar