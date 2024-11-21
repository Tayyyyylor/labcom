import Logo from '@/components/atoms/logo/Logo'
import { Contact } from '@/components/molecules /contact/Contact'
import React from 'react'
import styles from './Footer.module.scss'
import { FollowUs } from '@/components/molecules /followUs/FollowUs'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo color="white" width={250} height={120} />
            <Contact />
            <FollowUs />
        </footer>
    )
}
