import React from 'react'
import styles from './Contact.module.scss'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const Contact = () => {
    const t = useTranslations('Contact')
    return (
        <div className={styles.contact}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <p>{t('project1')}</p>
                    <p>{t('name1')}</p>
                    <p>
                        <Link href={`mailto:${t('mail1')}`}>{t('mail1')}</Link>
                    </p>
                    <Link href={t('web1')}>{t('web1')}</Link>
                </div>
                <div className={styles.container}>
                    <p>{t('project2')}</p>
                    <p>{t('name2')}</p>
                    <p>
                        <Link href={`mailto:${t('mail2')}`}>{t('mail2')}</Link>
                    </p>
                    <p>
                        <Link href={t('web2')}>{t('web2')}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
