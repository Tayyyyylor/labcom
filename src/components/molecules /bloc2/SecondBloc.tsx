import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'
import styles from './SecondBloc.module.scss'
import { useTranslations } from 'next-intl'

export const SecondBloc = () => {
    const t = useTranslations('Bloc2')
    return (
        <article className={styles.secondBloc}>
            <Title title={t('title1')} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/03.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                    <div className={styles.textContainer1}>
                        <p>{t('text1')}</p>
                        <p>{t('text2')}</p>
                        <p>{t('text3')}</p>
                    </div>
                </div>
                <div className={styles.subContainer2}>
                    <div className={styles.textContainer2}>
                        <p>{t('text4')}</p>
                        <p>{t('text5')}</p>
                        <p>{t('text6')}</p>
                    </div>
                    <Image
                        src="/04.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                </div>
                <div className={styles.subContainer3}>
                    <Image
                        src="/05.png"
                        width={400}
                        height={300}
                        alt="art"
                        className={styles.image}
                    />
                    <div className={styles.textContainer3}>
                        <div className={styles.blueLine} />
                        <div className={styles.gridContainer}>
                            <div>
                                <h5>1</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>2</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>3</h5>
                                <p>toto</p>
                            </div>
                            <div>
                                <h5>4</h5>
                                <p>toto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
