import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'

interface LogoProps {
    color: string
    width: number
    height: number
}

export default function Logo({ color, width, height }: LogoProps) {
    return (
        <Image
            src={color === 'white' ? '/logoblanc.png' : '/logobleu_optimaa.png'}
            width={width}
            height={height}
            alt="logo"
            className={styles.logo}
        />
    )
}
