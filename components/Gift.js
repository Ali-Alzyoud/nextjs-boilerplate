import React from 'react'

import styles from './Gift.module.css'

const Gift = ({inl}) => {
  const {locale} = inl

  return (
    <div>
        <article className={styles.gift}>
            <div className={styles.gift__overlay}>
                <div className={styles.gift__icon}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#C4C6FF" d="M43,-71.3C56.8,-66.5,69.9,-57.2,74.8,-44.6C79.6,-31.9,76.2,-16,72.6,-2.1C69,11.8,65.2,23.6,60.3,36.1C55.3,48.6,49.3,61.7,39,64.2C28.8,66.7,14.4,58.7,0.8,57.3C-12.9,56,-25.7,61.4,-38.7,60.5C-51.7,59.6,-64.9,52.3,-67.4,41.2C-69.8,30,-61.6,15,-58.6,1.7C-55.6,-11.6,-57.8,-23.1,-55.6,-34.7C-53.4,-46.3,-46.8,-58,-36.8,-65C-26.8,-72,-13.4,-74.3,0.6,-75.3C14.6,-76.3,29.2,-76.1,43,-71.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div> 

            {locale === 'ar-AR'? (
                <div className={styles.gift__content}>
                    <h2 className={styles.gift__title}>ﻷن سعادتهم مهمة للغاية بالنسبة لك</h2>
                    <p className={styles.gift__description}>لبيه يتيح لك إهداء رصيد لمن تحب</p>
                    <button className={styles.gift__button}>
                        إهداء صديق
                    </button>
                </div>
            ) : (
                <div className={styles.gift__content}>
                    <h2 className={styles.gift__title}>Give your friend a gift</h2>
                    <p className={styles.gift__description}>People Love Gifts for sure</p>
                    <button className={styles.gift__button}>
                        Friend Gift
                    </button>
                </div>
            )}     
        </article>
    </div>
  )
}

export default Gift