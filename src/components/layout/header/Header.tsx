import React from 'react'
import styles from './Header.module.scss'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/molecules /navbar/Navbar'
import LocalSwitcher from '@/components/atoms/localSwitcher/LocalSwitcher'

export const Header = () => {
    const t = useTranslations()
    return (
        <header className={styles.header}>
            <Navbar />
            <LocalSwitcher
                enOption={t('Global.language.en')}
                frOption={t('Global.language.fr')}
            />
        </header>
    )
}
