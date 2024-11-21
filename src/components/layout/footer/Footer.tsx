import Logo from '@/components/atoms/logo/Logo'
import { Contact } from '@/components/molecules /contact/Contact'
import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <Contact />
        </footer>
    )
}
