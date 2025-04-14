// import React from 'react'
import { Link } from '@mui/material'
import styles from './Footer.module.less'
import { useIntl } from 'react-intl'

const menuData = [
  {
    title: 'FEBK简介',
    url: '#',
  },
  {
    title: '产品',
    url: '#',
  },
]

function Footer() {
  const intl = useIntl()
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>FEBK 简介</div>
          <div className={styles.text}>
            <span>
            {intl.formatMessage({ id: 'lp.footer.description1' })}
            </span>
            <span>
            {intl.formatMessage({ id: 'lp.footer.description2' })}
            </span>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.title}>公司</div>
          <div className={styles.menu}>
            {menuData.map((item) => {
              return (
                <div key={item.title} className={styles.menuItem}>
                  <Link
                    href={item.url}
                    className={styles.link}
                    underline="none"
                  >
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
