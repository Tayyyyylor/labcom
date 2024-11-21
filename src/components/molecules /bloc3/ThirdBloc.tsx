import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styles from './ThirdBloc.module.scss'

export const ThirdBloc = () => {
    const t = useTranslations()
    return (
        <article className={styles.thirdBloc}>
            <Title title={t('Homepage.title3')} />
            <section className={styles.container}>
                <div className={styles.subContainer1}>
                    <Image
                        src="/06.png"
                        width={400}
                        height={300}
                        alt="atr"
                        className={styles.image}
                    />
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <p>toto</p>
                            <p>toto</p>
                            <p>toto</p>
                            <p>tptp</p>
                        </div>
                        <div className={styles.blueLine} />
                    </div>
                </div>
                <div className={styles.subContainer2}>
                    <div className={styles.darkBloc} />
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
