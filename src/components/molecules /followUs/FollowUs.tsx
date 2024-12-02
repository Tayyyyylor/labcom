import React from 'react'
import styles from './FollowUs.module.scss'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const FollowUs = () => {
    const t = useTranslations('FollowUs')
    return (
        <div className={styles.followUs}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.socialMedia}>
                <p>
                    <Link href="https://www.facebook.com/profile.php?id=61569854011161">
                        Facebook
                    </Link>
                </p>
                <p>
                    <Link href="https://x.com/LabcomOptimaa">Twitter</Link>
                </p>
                <p>
                    <Link href="https://www.linkedin.com/company/labcom-optimaa/">
                        LinkedIn
                    </Link>
                </p>
            </div>
        </div>
    )
}
