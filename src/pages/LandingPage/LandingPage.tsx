// import React from 'react'
import img from '@/assets/images/banner.avif'
import styles from './LandingPage.module.less'
import { Typography } from '@mui/material'
import { useIntl } from 'react-intl'
// import ExpandableMenu from '@/components/ExpandableMenu/ExpandableMenu'
// import { useState } from 'react';

function LandingPage() {
  const intl = useIntl()
  return (
    <div className={`${styles.wrapper} relative`}>
      {/* <ExpandableMenu /> */}
      <img
        src={img}
        className={`w-full h-full absolute top-0 left-0 object-cover`}
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
        <div className={`h-[200px] flex flex-col-reverse z-10`}>
          <Typography variant="h6" className={`text-white w-[445px]`}>
          {intl.formatMessage({ id: 'lp.title3' })}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
