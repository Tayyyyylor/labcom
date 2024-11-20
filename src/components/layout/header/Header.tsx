import React from 'react'
import styles from './Header.module.scss'
import Navbar from '@/components/molecules /navbar/Navbar'
import Logo from '@/components/atoms/logo/Logo'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar />
        </header>
    )
}
