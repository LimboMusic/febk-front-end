/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import Hero from './components/Hero/Hero'
import Transaction from './components/Transaction/Transaction'
import styles from './LandingPage.module.less'
// import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'
import Footer from '@/components/Footer/Footer'

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // 模拟加载完成，延迟 2 秒后隐藏遮罩
    const timer = setTimeout(() => {
      setAnimate(false) // 开始触发动画
      setTimeout(() => {
        setIsLoading(false) // 动画完成后隐藏遮罩
        document.body.style.overflow = ''
      }, 800) // 动画持续时间和 CSS 过渡时间一致
    }, 800)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <Hero />
        <Transaction />
        <Footer />
      </div>
      {isLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(38,67,87)', // 蓝色遮罩
            zIndex: 9999,
            transform: animate ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 1s ease-in-out', // 缓缓伸缩动画
          }}
        />
      )}
    </>
  )
}

export default LandingPage
