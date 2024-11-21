import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Project() {
    const t = useTranslations()
    return (
        <article>
            <section>
                <Title title={t('')} />
            </section>
        </article>
    )
}
