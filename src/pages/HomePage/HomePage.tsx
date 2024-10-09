/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './HomePage.module.less'
import Cookie from '@/components/Cookie/Cookie'
// import LandingPage from '../LandingPage/LandingPage'
import { Outlet } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import {
  selectLocale,
  useSelector,
} from '@/store/index'

function HomePage() {
  const { locale } = useSelector(selectLocale)
  const [showCookie, setShowCookie] = useState(false)
  const MemoHeader = memo(() => {
    // 仅在 props 改变时重新渲染
    return <Header />
  })

  useEffect(() => {
    const cookieAcceptRaw = localStorage.getItem('cookie-accept')
    let cookieAccept
    try {
      cookieAccept = cookieAcceptRaw ? JSON.parse(cookieAcceptRaw) : null
    } catch (error) {
      cookieAccept = null
    }
    if (!cookieAccept) {
      localStorage.setItem('cookie-accept', JSON.stringify(false))
      setShowCookie(true)
    } else {
      localStorage.setItem('cookie-accept', JSON.stringify(true))
      setShowCookie(false)
    }
  }, [])

  return (
    <div className={`${styles.wrapper}`}>
      <MemoHeader />
      <Outlet />
      {showCookie && locale === 'en' && (
        <Cookie setShowCookie={setShowCookie} />
      )}
      <Footer />
    </div>
  )
}

export default HomePage
