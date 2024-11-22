import React from 'react'
import styles from './FollowUs.module.scss'
import { useTranslations } from 'next-intl'

export const FollowUs = () => {
    const t = useTranslations('FollowUs')
    return (
        <div className={styles.followUs}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.socialMedia}>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}
