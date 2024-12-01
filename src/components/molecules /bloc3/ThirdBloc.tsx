'use client'
import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styles from './ThirdBloc.module.scss'

export const ThirdBloc = () => {
    const t = useTranslations('Bloc3')
    return (
        <article className={styles.thirdBloc}>
            <Title title={t('title')} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/img1Bloc3.png"
                        width={500}
                        height={400}
                        alt="atr"
                        className={styles.image}
                    />
                    <div className={styles.blueLineContainer}>
                        <div className={styles.blueLine}>
                            <p className={styles.blueLineText}>
                                {t('blueLine')}
                            </p>
                        </div>
                        <div className={styles.divContainer}>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>{t('subtitle1')}</p>
                                <p className={styles.text}>{t('subtitle2')}</p>
                                <p className={styles.text}>{t('subtitle3')}</p>
                                <p className={styles.text}>{t('subtitle4')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linesContainer}>
                    <span className={styles.darkLine} />
                    <div className={styles.descContainer}>
                        <p>{t('text1')}</p>
                        <p>{t('text2')}</p>
                    </div>
                    <span className={styles.lightLine} />
                </div>
                <div>
                    <Image
                        src="/img2Bloc3.png"
                        width={500}
                        height={400}
                        alt="atr"
                        className={styles.banniere}
                    />
                </div>
            </section>
        </article>
    )
}
