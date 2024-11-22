import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.brand}>
                labcom <span>optimaa</span>
            </p>
        </div>
    )
}
