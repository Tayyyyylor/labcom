import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
    title: string | React.ReactNode
    hasLogo?: boolean
    className?: string
}

export default function Title({
    title,
    hasLogo = true,
    className,
}: TitleProps) {
    return (
        <div className={styles.container}>
            <h2 className={`${styles.title} ${className}`}>{title}</h2>
            {hasLogo && (
                <p className={styles.brand}>
                    labcom <span>optimaa</span>
                </p>
            )}
        </div>
    )
}
