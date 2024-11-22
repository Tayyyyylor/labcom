import Title from '@/components/atoms/title/Title'
import React from 'react'
import styles from './FourthBloc.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const FourthBloc = () => {
    const t = useTranslations('Bloc4')
    return (
        <article className={styles.fourthBloc}>
            <Title title={t('title1')} />
            <section className={styles.container}>
                <div className={styles.textColumn1}>
                    <p>{t('text1')}</p>
                    <br />
                    <p>
                        {t.rich('text2', {
                            strong: (chunks) => (
                                <span className="bold">{chunks}</span>
                            ),
                        })}
                    </p>
                </div>
                <div className={styles.textColumn2}>
                    <p>
                        {t.rich('text3', {
                            strong: (chunks) => (
                                <span className="bold">{chunks}</span>
                            ),
                        })}
                    </p>
                    <br />
                    <p>{t('text4')}</p>
                </div>
            </section>
            <section className={styles.container2}>
                <div className={styles.textContainer}>
                    <h4>{t('title2')}</h4>
                    <p>{t('text5')}</p>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/08.png"
                        alt="illustration-features-tab-1"
                        width={400}
                        height={300}
                    />
                    <p>{t('text6')}</p>
                </div>
            </section>
            <Image
                src="/02.png"
                alt="illustration-features-tab-2"
                width={400}
                height={300}
            />
        </article>
    )
}
