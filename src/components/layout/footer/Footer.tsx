'use client'
import Logo from '@/components/atoms/logo/Logo'
import { Contact } from '@/components/molecules /contact/Contact'
import React from 'react'
import styles from './Footer.module.scss'
import { FollowUs } from '@/components/molecules /followUs/FollowUs'
import useMobile from '@/hooks/useMobile'
import Image from 'next/image'

export const Footer = () => {
    const isMobile = useMobile()
    return (
        <footer className={styles.footer}>
            <section className={styles.containerContact}>
                <Logo
                    color="white"
                    width={isMobile ? 80 : 300}
                    height={isMobile ? 40 : 120}
                />
                <Contact />
                <FollowUs />
            </section>
            <section className={styles.containerCredits}>
                <p className={styles.credits}>
                    2024 LABCOM Optimaa / nuance productions
                </p>
                <Image
                    src="/logo_footer.png"
                    alt="credits"
                    width={400}
                    height={50}
                />
            </section>
        </footer>
    )
}
