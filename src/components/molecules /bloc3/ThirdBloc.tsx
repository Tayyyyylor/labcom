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
                                {t.rich('blueLine', { br: () => <br /> })}
                            </p>
                        </div>
                        <div className={styles.divContainer}>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>
                                    {t.rich('subtitle1', { br: () => <br /> })}
                                </p>
                                <p className={styles.text}>
                                    {t.rich('subtitle2', { br: () => <br /> })}
                                </p>
                                <p className={styles.text}>
                                    {t.rich('subtitle3', { br: () => <br /> })}
                                </p>
                                <p className={styles.text}>
                                    {t.rich('subtitle4', { br: () => <br /> })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linesContainer}>
                    <span className={styles.darkLine} />
                    <div className={styles.descContainer}>
                        <p>{t.rich('text1', { br: () => <br /> })}</p>
                        <p>
                            {t.rich('text2', {
                                br: () => <br />,
                                strong: (chunks) => (
                                    <span className="bold">{chunks}</span>
                                ),
                            })}
                        </p>
                    </div>
                    <span className={styles.lightLine} />
                </div>
                <div>
                    <Image
                        src={t('image')}
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
