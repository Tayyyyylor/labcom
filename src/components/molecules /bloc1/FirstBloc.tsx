import Title from '@/components/atoms/title/Title'
import React from 'react'
import styles from './FirstBloc.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const FirstBloc = () => {
    const t = useTranslations()
    return (
        <article className={styles.firstBloc}>
            <Title title={t('Homepage.title1')} />
            <section className={styles.section}>
                <Image
                    src="/02.png"
                    width={500}
                    height={400}
                    alt="art"
                    className={styles.image}
                />
                <div className={styles.textContainer}>
                    <h3 className={styles.titleSerif}>
                        {t('Homepage.subtitle1')}
                    </h3>
                    <p className={styles.textBlue}>{t('Homepage.desc1')}</p>
                    <p>{t('Homepage.subdesc1')}</p>
                    <Image src="" width={50} height={50} alt="art" />
                </div>
            </section>
        </article>
    )
}
