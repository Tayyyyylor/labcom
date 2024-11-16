import { Header } from '@/components/layout/header/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    locale: string
    className?: string
}

export default async function BaseLayout({ children, locale }: Props) {
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
