'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Homepage.module.scss'

export default function Homepage() {
    const t = useTranslations()
    return (
        <main className={styles.homepage}>
            <h1>{t('Homepage.title')}</h1>
            <h3>{t('Homepage.desc')}</h3>
        </main>
    )
}
