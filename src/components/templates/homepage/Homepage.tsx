'use client'
import React from 'react'
import styles from './Homepage.module.scss'
import HeroBanner from '@/components/molecules /heroBanner/HeroBanner'
import { Footer } from '@/components/layout/footer/Footer'
import { FirstBloc } from '@/components/molecules /bloc1/FirstBloc'
import { SecondBloc } from '@/components/molecules /bloc2/SecondBloc'
import { ThirdBloc } from '@/components/molecules /bloc3/ThirdBloc'
import { FourthBloc } from '@/components/molecules /bloc4/FourthBloc'

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <HeroBanner />
            <div className={styles.container}>
                <FirstBloc />
                <SecondBloc />
                <ThirdBloc />
                <FourthBloc />
            </div>

            <Footer />
        </main>
    )
}
