// import React from 'react'
// import img from '@/assets/images/banner.avif'
import styles from './Hero.module.less'
import { Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import HomePage from '@/assets/images/img-home-banner.jpg'

function Hero() {
  const intl = useIntl()
  return (
    <div className={`${styles.wrapper} relative`}>
      <img
        src={HomePage}
        className={`w-full h-screen min-h-screen absolute top-0 left-0 object-cover`}
      />
      <div className={`flex flex-col px-12`}>
        <div className={`h-[200px]`}></div>
        <div className={`z-10`}>
          <Typography variant="h1" className={`text-white`}>
            {intl.formatMessage({ id: 'lp.title1' })}
          </Typography>
          <Typography variant="h1" className={`text-white`}>
            {intl.formatMessage({ id: 'lp.title2' })}
          </Typography>
        </div>
        <div className={`h-[200px] flex flex-col-reverse z-10 items-end mt-10`}>
          <Typography variant="h6" className={`text-white w-[445px] text-left`}>
            {intl.formatMessage({ id: 'lp.title3' })}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Hero
