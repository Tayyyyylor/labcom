'use client'
import Title from '@/components/atoms/title/Title'
import React from 'react'
import styles from './FourthBloc.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import useMobile from '@/hooks/useMobile'

export const FourthBloc = () => {
    const t = useTranslations('Bloc4')
    const isMobile = useMobile()
    return (
        <article className={styles.fourthBloc}>
            <Title title={t('title1')} />
            <section className={styles.container}>
                <div className={styles.textColumn1}>
                    <p>
                        {t.rich('text1', {
                            br: () => (isMobile ? '' : <br />),
                        })}
                    </p>
                    <br />
                    <p>
                        {t.rich('text2', {
                            br: () => (isMobile ? '' : <br />),
                            strong: (chunks) => (
                                <span className="bold">{chunks}</span>
                            ),
                        })}
                    </p>
                </div>
                <div className={styles.textColumn2}>
                    <p>
                        {t.rich('text3', {
                            br: () => (isMobile ? '' : <br />),
                            strong: (chunks) => (
                                <span className="bold">{chunks}</span>
                            ),
                        })}
                    </p>
                    <br />
                    <p>
                        {t.rich('text4', {
                            br: () => (isMobile ? '' : <br />),
                        })}
                    </p>
                </div>
            </section>
            <section className={styles.container2}>
                <div className={styles.textContainer}>
                    <h4 className={styles.title}>
                        {t.rich('title2', {
                            br: () => (isMobile ? '' : <br />),
                        })}
                    </h4>
                    <p>
                        {t.rich('text5', {
                            br: () => (isMobile ? '' : <br />),
                        })}
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/08.png"
                        alt="illustration-features-tab-1"
                        width={500}
                        height={500}
                        className={styles.img}
                    />
                    <p>
                        {t.rich('text6', {
                            br: () => (isMobile ? '' : <br />),
                        })}
                    </p>
                </div>
            </section>
        </article>
    )
}
