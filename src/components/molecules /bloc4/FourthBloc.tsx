import Title from '@/components/atoms/title/Title'
import React from 'react'
import styles from './FourthBloc.module.scss'
import { useTranslations } from 'next-intl'

export const FourthBloc = () => {
    const t = useTranslations()
    return (
        <article className={styles.fourthBloc}>
            <Title title={t('Homepage.title4')} />
            <section className={styles.container}>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </section>
        </article>
    )
}
