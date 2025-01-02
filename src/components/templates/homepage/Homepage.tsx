import React from 'react'
import styles from './Homepage.module.scss'
import HeroBanner from '@/components/molecules /heroBanner/HeroBanner'
import { Footer } from '@/components/layout/footer/Footer'
import { FirstBloc } from '@/components/molecules /bloc1/FirstBloc'
import { SecondBloc } from '@/components/molecules /bloc2/SecondBloc'
import { ThirdBloc } from '@/components/molecules /bloc3/ThirdBloc'
import { FourthBloc } from '@/components/molecules /bloc4/FourthBloc'
import News from '@/components/molecules /news/News'
import Team from '@/components/molecules /team/Team'
import Brands from '@/components/molecules /brands/Brands'
import Slogan from '@/components/atoms/slogan/Slogan'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Homepage() {
    return (
        <main className={styles.homepage}>
            <div style={{ height: '80px' }}></div>
            <HeroBanner />
            <Slogan />
            <div className={styles.container}>
                <FirstBloc />
                <SecondBloc />
                <ThirdBloc />
                <FourthBloc />
                <Team />
                <Brands />
                <News />
            </div>

            <Footer />
        </main>
    )
}
