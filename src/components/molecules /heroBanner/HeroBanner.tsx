import Image from 'next/image'
import React from 'react'
import styles from './HeroBanner.module.scss'

export default function HeroBanner() {
    return (
        <div className={styles.heroBanner}>
            <Image
                src="/banniere.png"
                alt="Hero Banner"
                fill
                className={styles.imgBanner}
            />
        </div>
    )
}
