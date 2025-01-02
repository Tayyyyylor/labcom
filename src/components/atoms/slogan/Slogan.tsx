'use client'
import React from 'react'
import styles from './Slogan.module.scss'
import { useTranslations } from 'next-intl'
import useMobile from '@/hooks/useMobile'

export default function Slogan() {
    const t = useTranslations('Homepage')
    const isMobile = useMobile()
    return (
        <div className={styles.slogan}>
            {t.rich('optima', { br: () => (isMobile ? '' : <br />) })}
        </div>
    )
}
