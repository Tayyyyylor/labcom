'use client'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'
import styles from './SecondBloc.module.scss'
import { useTranslations } from 'next-intl'
import useMobile from '@/hooks/useMobile'

export const SecondBloc = () => {
    const t = useTranslations('Bloc2')
    const isMobile = useMobile()
    return (
        <article className={styles.secondBloc} id="project">
            <Title title={t.rich('title', { br: () => <br /> })} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/img1Bloc2.png"
                        width={400}
                        height={400}
                        alt="art"
                        className={styles.image}
                    />
                    <div className={styles.textContainer1}>
                        <p>
                            {t.rich('text1', {
                                br: () => <br />,
                                strong: (chunks) => (
                                    <span className="bold">{chunks}</span>
                                ),
                            })}
                        </p>
                        <p>
                            {t.rich('text2', {
                                br: () => (isMobile ? '' : <br />),
                            })}
                        </p>
                        <p>
                            {t.rich('text3', {
                                br: () => (isMobile ? '' : <br />),
                            })}
                        </p>
                    </div>
                </div>
                <div className={styles.subContainer2}>
                    <div className={styles.textContainer2}>
                        <p>{t('text4')}</p>
                        <p>
                            {t.rich('text5', {
                                strong: (chunks) => (
                                    <span className="bold">{chunks}</span>
                                ),
                            })}
                        </p>
                        <p>
                            {t.rich('text6', {
                                strong: (chunks) => (
                                    <span className="bold">{chunks}</span>
                                ),
                            })}
                        </p>
                    </div>
                    <div className={styles.gridContainer}>
                        <div className={styles.infosCOntainer}>
                            <h5 className={styles.gridTitle}>
                                {t('grid.title1')}
                            </h5>
                            <p className={styles.gridText}>{t('grid.desc1')}</p>
                        </div>
                        <div className={styles.infosCOntainer}>
                            <h5 className={styles.gridTitle}>
                                {t('grid.title2')}
                            </h5>
                            <p className={styles.gridText}>{t('grid.desc2')}</p>
                        </div>
                        <div className={styles.infosCOntainer}>
                            <h5 className={styles.gridTitle}>
                                {t('grid.title3')}
                            </h5>
                            <p className={styles.gridText}>{t('grid.desc3')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
