import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'
import styles from './Team.module.scss'
import { useTranslations } from 'next-intl'

export default function Team() {
    const t = useTranslations('Team')
    return (
        <article className={styles.team} id="team">
            <Title title={t('title')} />
            <section className={styles.teamContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/quatuorLogo.png"
                        alt="team"
                        fill
                        className={styles.trioLogo}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.subtitle}>{t('subtitle')}</h3>
                    <p className={styles.desc}>{t('desc')}</p>
                </div>
            </section>
        </article>
    )
}
