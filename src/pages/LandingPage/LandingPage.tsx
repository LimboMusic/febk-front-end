// import React from 'react'
import img from '@/assets/images/banner.avif'
import styles from './LandingPage.module.less'
import { Typography } from '@mui/material'
// import ExpandableMenu from '@/components/ExpandableMenu/ExpandableMenu'
// import { useState } from 'react';

function LandingPage() {
  return (
    <div className={`${styles.wrapper} relative`}>
      {/* <ExpandableMenu /> */}
      <img src={img} className={`w-full h-screen absolute top-0 left-0`} />
      <div className={`flex flex-col px-12`}>
        <div className={`h-[200px]`}></div>
        <div className={`z-10`}>
          <Typography variant='h1' className={`text-white`}>少一点摩擦</Typography>
          <Typography variant='h1' className={`text-white`}>生活更美好</Typography>
        </div>
        <div className={`h-[200px] flex flex-col-reverse z-10`}>
        <Typography variant='h6' className={`text-white w-[445px]`}>你是否曾经停下脚步思索，在你的日常生活中，有多少事物在转动？</Typography>
        </div>
      </div>
      
      
    </div>
  )
}

export default LandingPage