'use client'
import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styles from './ThirdBloc.module.scss'
import useMobile from '@/hooks/useMobile'

export const ThirdBloc = () => {
    const t = useTranslations('Bloc3')
    const isMobile = useMobile()
    return (
        <article className={styles.thirdBloc}>
            <Title title={t('title')} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/06.png"
                        width={400}
                        height={300}
                        alt="atr"
                        className={styles.image}
                    />
                    <div className={styles.divContainer}>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>{t('subtitle1')}</p>
                            <p className={styles.text}>{t('subtitle2')}</p>
                            <p className={styles.text}>{t('subtitle3')}</p>
                            <p className={styles.text}>{t('subtitle4')}</p>
                        </div>
                        {!isMobile && <div className={styles.blueLine} />}
                    </div>
                </div>
                <div className={styles.subContainer2}>
                    {!isMobile && <div className={styles.darkBloc} />}

                    <Image
                        src="/07.png"
                        width={400}
                        height={300}
                        alt="atr"
                        className={styles.image}
                    />
                </div>
            </section>
        </article>
    )
}
