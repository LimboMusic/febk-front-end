// import React from 'react'
import styles from './TransactionCard.module.less'
import { Link } from '@mui/material'

interface TransactionCardProps {
  title: string
  description: string
  link: string
}

function TransactionCard({ title, description, link }: TransactionCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <Link href={link}>查看</Link>
    </div>
  )
}

export default TransactionCard
