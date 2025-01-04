'use client'
import Logo from '@/components/atoms/logo/Logo'
import { Contact } from '@/components/molecules /contact/Contact'
import React from 'react'
import styles from './Footer.module.scss'
import { FollowUs } from '@/components/molecules /followUs/FollowUs'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <section className={styles.containerContact}>
                <Logo color="white" className={styles.logo} />
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
                    className={styles.imgCredits}
                />
            </section>
        </footer>
    )
}
