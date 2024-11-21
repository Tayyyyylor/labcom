'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Homepage.module.scss'
import HeroBanner from '@/components/molecules /heroBanner/HeroBanner'
import Title from '@/components/atoms/title/Title'
import { Footer } from '@/components/layout/footer/Footer'

export default function Homepage() {
    const t = useTranslations()
    return (
        <main className={styles.homepage}>
            <HeroBanner />
            <Title title={t('Homepage.title')} />
            <Footer />
        </main>
    )
}
