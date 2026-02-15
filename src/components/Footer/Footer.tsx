// import React from 'react'
import { Link } from '@mui/material'
import styles from './Footer.module.less'
import { useIntl } from 'react-intl'

function Footer() {
  const intl = useIntl()
  const menuData = [
    {
      title: intl.formatMessage({ id: 'lp.footer.description.title' }),
      url: '#',
    },
    {
      title: intl.formatMessage({ id: 'lp.header.product' }),
      url: '#',
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'lp.footer.description.title' })}
          </div>
          <div className={styles.text}>
            <span>{intl.formatMessage({ id: 'lp.footer.description1' })}</span>
            <span>{intl.formatMessage({ id: 'lp.footer.description2' })}</span>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'lp.footer.company.title' })}
          </div>
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
      <div className={styles.info}>
        <span>{intl.formatMessage({ id: 'lp.footer.address' })}</span>
        <span>{intl.formatMessage({ id: 'lp.footer.phone' })}</span>
        <span>{intl.formatMessage({ id: 'lp.footer.email' })}</span>
      </div>
    </div>
  )
}

export default Footer
