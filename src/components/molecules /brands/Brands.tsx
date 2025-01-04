'use client'
import React from 'react'
import styles from './Brands.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import useMobile from '@/hooks/useMobile'

export default function Brands() {
    const t = useTranslations('Brands')
    const isMobile = useMobile()
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
                <p>{t.rich('text1', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text2', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text3', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text4', { br: () => (isMobile ? '' : <br />) })}</p>
                <Image
                    className={styles.name}
                    src="/madjid.png"
                    alt="madjid"
                    width={550}
                    height={330}
                />
                <p>{t.rich('text5', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text6', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text7', { br: () => (isMobile ? '' : <br />) })}</p>
            </section>
            <section className={styles.secondContainer}>
                <h3 className={styles.subtitle}>{t('title2')}</h3>
                <h4 className={styles.subtitleDesc}>{t('subtitle2')}</h4>
                <p>{t.rich('text8', { br: () => (isMobile ? '' : <br />) })}</p>
                <br />
                <p>{t.rich('text9', { br: () => (isMobile ? '' : <br />) })}</p>
                <Image
                    className={styles.name}
                    src="/guy.png"
                    alt="guy"
                    width={550}
                    height={330}
                />
                <p>
                    {t.rich('text10', { br: () => (isMobile ? '' : <br />) })}
                </p>
                <br />
                <p>
                    {t.rich('text11', { br: () => (isMobile ? '' : <br />) })}
                </p>
                <br />
                <p>
                    {t.rich('text12', { br: () => (isMobile ? '' : <br />) })}
                </p>
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
