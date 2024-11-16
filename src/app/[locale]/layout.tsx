/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import './globals.scss'
import { LayoutProps } from '../../../.next/types/app/layout'
// import localFont from 'next/font/local'
import BaseLayout from '@/components/templates/baseLayout/BaseLayout'

// const fontBlack = localFont({
//     src: '../fonts/NeueHaasDisplayBlack.ttf',
//     variable: '--font-neue-black',
// })

export const metadata: Metadata = {
    title: 'Labcom Optima',
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function HomeLayout({ children, params }: LayoutProps) {
    const { locale } = await params

    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    return <BaseLayout locale={locale}>{children}</BaseLayout>
}
