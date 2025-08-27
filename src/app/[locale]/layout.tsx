/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import './globals.scss'
import { LayoutProps } from '../../../.next/types/app/layout'
import localFont from 'next/font/local'
import BaseLayout from '@/components/templates/baseLayout/BaseLayout'
import { Analytics } from '@vercel/analytics/next'

// const fontBlack = localFont({
//     src: '../fonts/NeueHaasDisplayBlack.ttf',
//     variable: '--font-neue-black',
// })

const helveticaBold = localFont({
    src: '../fonts/HelveticaNeueBold.otf',
    variable: '--helvetica-bold',
})
const helveticaLight = localFont({
    src: '../fonts/HelveticaNeueLight.otf',
    variable: '--helvetica-light',
})
const helveticaMedium = localFont({
    src: '../fonts/HelveticaNeueMedium.otf',
    variable: '--helvetica-medium',
})
const helveticaRoman = localFont({
    src: '../fonts/HelveticaNeueRoman.otf',
    variable: '--helvetica-roman',
})
const serifBold = localFont({
    src: '../fonts/SourceSerifPro-Bold.otf',
    variable: '--serif-bold',
})
const serifRegular = localFont({
    src: '../fonts/SourceSerifPro-Regular.otf',
    variable: '--serif-regular',
})

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

    return (
        <BaseLayout
            locale={locale}
            className={`${helveticaBold.variable} ${helveticaLight.variable} ${helveticaMedium.variable} ${helveticaRoman.variable} ${serifBold.variable} ${serifRegular.variable}`}
        >
            {children}
            <Analytics />
        </BaseLayout>
    )
}
