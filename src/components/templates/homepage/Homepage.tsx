'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Homepage.module.scss'
import HeroBanner from '@/components/molecules /heroBanner/HeroBanner'
import Title from '@/components/atoms/title/Title'
import { Footer } from '@/components/layout/footer/Footer'
import Image from 'next/image'

export default function Homepage() {
    const t = useTranslations()
    return (
        <main className={styles.homepage}>
            <HeroBanner />
            <article>
                <Title title={t('Homepage.title1')} />
                <section>
                    <Image src="" width={50} height={50} alt="art" />
                    <div>
                        <h3></h3>
                        <p></p>
                        <p></p>
                        <Image src="" width={50} height={50} alt="art" />
                    </div>
                </section>
            </article>

            <article>
                <Title title={t('Homepage.title2')} />
                <section>
                    <div>
                        <Image src="" width={50} height={50} alt="art" />
                        <div>text</div>
                    </div>
                    <div>
                        <div>text</div>
                        <Image src="" width={50} height={50} alt="art" />
                    </div>
                    <div>
                        <Image src="" width={50} height={50} alt="art" />
                        <div>text</div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    )
}
