import React from 'react'
import styles from './Contact.module.scss'
import { useTranslations } from 'next-intl'

export const Contact = () => {
    const t = useTranslations('Contact')
    return (
        <div className={styles.contact}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p>{t('name')}</p>
            <p>{t('block')}</p>
            <p>{t('address')}</p>
            <p>{t('city')}</p>
            <p>{t('mail')}</p>
            <p>{t('mail2')}</p>
        </div>
    )
}
