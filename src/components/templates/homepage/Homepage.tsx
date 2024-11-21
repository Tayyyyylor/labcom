'use client'
import React from 'react'
import styles from './Homepage.module.scss'
import HeroBanner from '@/components/molecules /heroBanner/HeroBanner'
import { Footer } from '@/components/layout/footer/Footer'
import { FirstBloc } from '@/components/molecules /bloc1/FirstBloc'
import { SecondBloc } from '@/components/molecules /bloc2/SecondBloc'

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <HeroBanner />
            <div className={styles.container}>
                <FirstBloc />
                <SecondBloc />
            </div>

            <Footer />
        </main>
    )
}
