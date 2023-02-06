import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Stories.module.css'
import {storiesInl, moreInl} from '../data/fixedData'

const getProfileImage = (profileImage) => {
  if(profileImage) {
    return `https://s3-eu-west-1.amazonaws.com/curaapps/${profileImage}`
  } else {
    return 'https://cura.healthcare/Content/img/profileempty.png'
  }
}

const Stories = ({inl, doctorsData}) => {
  const {locale} = inl
  const allDoctors = doctorsData.Doctors
  const doctors = allDoctors.slice(0, 14)
  console.log(doctorsData)
  return (
    
      <section className={styles.stories}>
          <header className={styles.stories__header}>
            <h2 className={styles.stories__title}>{storiesInl[locale]}</h2>
            <p className={styles.seeMore}>{moreInl[locale]}</p>
          </header>

        <ul className={styles.stories__items}>
          {doctors.map(doctor => (
            <li key={doctor.id}>
              <Link className={styles.story} href={`/doctors/${doctor.UserName}`}>
                <div className={`${styles.gradient} ${!doctor.active? styles.active : ''}`}>
                  <Image 
                    className={styles.story__image} 
                    src={getProfileImage(doctor.ProfilePicThumbnail)} 
                    alt={doctor.title} width={70} height={70} />
                </div>
                <h3 className={styles.story__title}>{doctor.FirstName} {doctor.LastName}</h3>
              </Link>
            </li>
          ))}
        </ul>

      </section>
  )
}

export default Stories