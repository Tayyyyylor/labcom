import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'

interface LogoProps {
    color: string
    className?: string
}

export default function Logo({ color, className }: LogoProps) {
    return (
        <Image
            src={color === 'white' ? '/logoblanc.png' : '/logobleu_optimaa.png'}
            alt="logo"
            width={300}
            height={120}
            className={`${styles.logo} ${className}`}
        />
    )
}
