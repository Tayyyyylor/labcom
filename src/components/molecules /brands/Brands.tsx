import React from 'react'
import styles from './Brands.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Brands() {
    const t = useTranslations('Brands')
    return (
        <article className={styles.brands}>
            <section className={styles.firstContainer}>
                <Image
                    src="/img1Brand.png"
                    alt="brands"
                    width={500}
                    height={100}
                    className={styles.image}
                />
                <h3 className={styles.subtitle}>{t('title1')}</h3>
                <h4>{t('subtitle1')}</h4>
                <p>{t('text1')}</p>
                <p>{t('text2')}</p>
                <p>{t('text3')}</p>
                <p>{t('text4')}</p>
                <h5>Madjid DJEMAI</h5>
                <p>{t('text5')}</p>
                <p>{t('text6')}</p>
                <p>{t('text7')}</p>
            </section>
            <section className={styles.secondContainer}>
                <h3>{t('title2')}</h3>
                <h4>{t('subtitle2')}</h4>
                <p>{t('text8')}</p>
                <p>{t('text9')}</p>
                <h5>Guy DIRRAS</h5>
                <p>{t('text10')}</p>
                <p>{t('text11')}</p>
                <p>{t('text12')}</p>
                <Image
                    src="/img2Brand.png"
                    alt="brands"
                    width={500}
                    height={100}
                    className={styles.image}
                />
            </section>
        </article>
    )
}
