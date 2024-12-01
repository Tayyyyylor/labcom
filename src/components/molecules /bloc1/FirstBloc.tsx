import Title from '@/components/atoms/title/Title'
import React from 'react'
import styles from './FirstBloc.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const FirstBloc = () => {
    const t = useTranslations('Bloc1')
    return (
        <article className={styles.firstBloc}>
            <Title title={t.rich('title', { br: () => <br /> })} />
            <section className={styles.section}>
                <Image
                    src="/imgBloc1.png"
                    width={500}
                    height={400}
                    alt="art"
                    className={styles.image}
                />
                <div className={styles.textContainer}>
                    <Image
                        src="/trioLogo.png"
                        width={300}
                        height={70}
                        alt="logo"
                        className={styles.trioLogo}
                    />
                    <h3 className={styles.titleSerif}>{t('subtitle')}</h3>
                    <p className={styles.textBlue}>{t('desc')}</p>
                    <p className={styles.subdesc}>{t('subdesc')}</p>
                    <Image src="/illu.png" width={100} height={100} alt="art" />
                </div>
            </section>
        </article>
    )
}
