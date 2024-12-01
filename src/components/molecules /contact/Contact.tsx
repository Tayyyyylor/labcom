import React from 'react'
import styles from './Contact.module.scss'
import { useTranslations } from 'next-intl'

export const Contact = () => {
    const t = useTranslations('Contact')
    return (
        <div className={styles.contact}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <p>{t('project1')}</p>
                    <p>{t('name1')}</p>
                    <p>{t('mail1')}</p>
                    <p>{t('web1')}</p>
                </div>
                <div className={styles.container}>
                    <p>{t('project2')}</p>
                    <p>{t('name2')}</p>
                    <p>{t('mail2')}</p>
                    <p>{t('web2')}</p>
                </div>
            </div>
        </div>
    )
}
