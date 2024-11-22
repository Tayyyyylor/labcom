'use client'
import Logo from '@/components/atoms/logo/Logo'
import { Contact } from '@/components/molecules /contact/Contact'
import React from 'react'
import styles from './Footer.module.scss'
import { FollowUs } from '@/components/molecules /followUs/FollowUs'
import useMobile from '@/hooks/useMobile'

export const Footer = () => {
    const isMobile = useMobile()
    return (
        <footer className={styles.footer}>
            <Logo
                color="white"
                width={isMobile ? 80 : 250}
                height={isMobile ? 40 : 120}
            />
            <Contact />
            <FollowUs />
        </footer>
    )
}
