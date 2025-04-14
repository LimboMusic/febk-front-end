// import React from 'react'
import styles from './Transaction.module.less'
import TransactionCard from './components/TransactionCard/TransactionCard'

const data = [
  {
    title: '产品',
    description: '轴承、密封、润滑系统和周边设备，提高可靠性和性能',
    link: '#',
  },
  {
    title: '服务',
    description: '工程设计、维护、状态监测和再制造，实现全生命周期管理。',
    link: '#',
  },
  {
    title: '应用领域',
    description: '针对您所在行业的需求和挑战，量身定制行业特定解决方案。',
    link: '#',
  },
]

function Transaction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>我们的业务</div>
      <div className={styles.cardContainer}>
        {data.map((item) => {
          return (
            <TransactionCard
              title={item.title}
              link={item.link}
              description={item.description}
            ></TransactionCard>
          )
        })}
      </div>
    </div>
  )
}

export default Transaction
