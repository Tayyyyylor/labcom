import LocalSwitcher from '@/components/atoms/localSwitcher/LocalSwitcher'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Navbar.module.scss'

export default function Navbar() {
    const t = useTranslations()
    return (
        <nav className={styles.nav}>
            <ul className={styles.navContainer}>
                <li>{t('Header.nav1')}</li>
                <li>{t('Header.nav2')}</li>
                <li>{t('Header.nav3')}</li>
                <li>{t('Header.nav4')}</li>
                <hr className={styles.verticalBar} />
                <li>
                    <LocalSwitcher
                        enOption={t('Global.language.en')}
                        frOption={t('Global.language.fr')}
                    />
                </li>
            </ul>
        </nav>
    )
}
