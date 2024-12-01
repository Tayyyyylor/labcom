import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'
import styles from './Team.module.scss'
import { useTranslations } from 'next-intl'

export default function Team() {
    const t = useTranslations('Team')
    return (
        <article className={styles.team}>
            <Title title={t('title')} />
            <section className={styles.teamContainer}>
                <div className={styles.textContainer}>
                    <Image
                        src="/trioLogo.png"
                        alt="team"
                        width={500}
                        height={100}
                    />
                    <h3 className={styles.subtitle}>{t('subtitle')}</h3>
                    <p className={styles.desc}>{t('desc')}</p>
                </div>
                <Image
                    src="/imgBlocTeam.png"
                    alt="team"
                    width={400}
                    height={300}
                    className={styles.image}
                />
            </section>
        </article>
    )
}
