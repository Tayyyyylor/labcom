/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function News() {
    const t = useTranslations()
    return (
        <article>
            <Title title={t('Homepage.news')} />
            <section>
                {/* {news.map((article: any) => (
                <div key={article.id}>
                  <Image src={article.image.url} alt='toto' width={300} height={200} />
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                </div>
            ))} */}
            </section>
        </article>
    )
}
