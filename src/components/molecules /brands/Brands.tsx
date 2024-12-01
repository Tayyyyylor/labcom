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
                <h4 className={styles.subtitleDesc}>{t('subtitle1')}</h4>
                <p>{t.rich('text1', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text2', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text3', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text4', { br: () => <br /> })}</p>
                <h5 className={styles.name}>Madjid DJEMAI</h5>
                <p>{t.rich('text5', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text6', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text7', { br: () => <br /> })}</p>
            </section>
            <section className={styles.secondContainer}>
                <h3 className={styles.subtitle}>{t('title2')}</h3>
                <h4 className={styles.subtitleDesc}>{t('subtitle2')}</h4>
                <p>{t.rich('text8', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text9', { br: () => <br /> })}</p>
                <h5 className={styles.name}>Guy DIRRAS</h5>
                <p>{t.rich('text10', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text11', { br: () => <br /> })}</p>
                <br />
                <p>{t.rich('text12', { br: () => <br /> })}</p>
                <Image
                    src="/img2Brand.png"
                    alt="brands"
                    width={500}
                    height={100}
                    className={styles.image2}
                />
            </section>
        </article>
    )
}
