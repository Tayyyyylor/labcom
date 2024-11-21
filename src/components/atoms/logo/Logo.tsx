import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <Image
            src="/logobleu.png"
            width={150}
            height={60}
            alt="logo"
            className={styles.logo}
        />
    )
}
