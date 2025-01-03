/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Title from '@/components/atoms/title/Title'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './News.module.scss'
import axiosInstance from '@/config/axiosInstance'
import { Link } from '@/i18n/routing'

export default function News() {
    const t = useTranslations()
    const locale = useLocale()

    const [news, setNews] = useState<any>([])
    const [hoveredArticleId, setHoveredArticleId] = useState<string | null>(
        null
    )

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await axiosInstance.get(
                    `/posts?locale=${locale}&populate=*&sort[order]=asc`
                )
                setNews(data?.data?.data)
            } catch (error) {
                console.error(
                    'Erreur lors de la récupération des articles :',
                    error
                )
            }
        }
        fetchNews()
    }, [locale])

    return (
        <article className={styles.news} id="news">
            <Title
                title={t('Homepage.news')}
                hasLogo={false}
                className={styles.titleNews}
            />
            <section className={styles.newsContainer}>
                {news.map((article: any) => {
                    const imageUrl = `https://cms.labcom-optimaa.com${article.image.url}`
                    return (
                        <div key={article.documentId} className={styles.new}>
                            <Link
                                href={article.url}
                                onMouseEnter={() =>
                                    setHoveredArticleId(article.documentId)
                                }
                                onMouseLeave={() => setHoveredArticleId(null)}
                            >
                                <Image
                                    src={imageUrl}
                                    alt="toto"
                                    width={450}
                                    height={350}
                                    className={`${styles.image} ${
                                        hoveredArticleId === article.documentId
                                            ? styles.hover
                                            : ''
                                    }`}
                                />
                                <h3 className={styles.title}>
                                    {article.title}
                                </h3>
                                {hoveredArticleId === article.documentId && (
                                    <p className={styles.desc}>
                                        {article.desc}
                                    </p>
                                )}
                            </Link>
                        </div>
                    )
                })}
            </section>
        </article>
    )
}
