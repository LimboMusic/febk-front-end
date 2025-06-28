import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CardPaymentPage from '@/pages/CardPaymentPage/CardPaymentPage'
// import CommonSnackbar from './components/ComoonSnackbar/CommonSnackbar'
import { ThemeProvider } from '@mui/material'
import theme from '@/lib/theme'
import { useSelector, selectLocale } from './store'
import HomePage from './pages/HomePage/HomePage'
import enLandingPage from './locales/en/enLandingPage.json'
import zhLandingPage from './locales/zh/zhLandingPage.json'
import enProductPage from './locales/en/enProductPage.json'
import zhProductPage from './locales/zh/zhProductPage.json'
// import enUserPage from './locales/en/enUserPage.json'
// import zhUserPage from './locales/zh/zhUserPage.json'
import { IntlProvider } from 'react-intl'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import LandingPage from './pages/LandingPage/LandingPage'
import ExpandableMenu from './components/ExpandableMenu/ExpandableMenu'

const messages = {
  en: {
    ...enLandingPage,
    ...enProductPage,
  },
  zh: {
    ...zhLandingPage,
    ...zhProductPage,
  },
}

function App() {
  const { locale } = useSelector(selectLocale)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>
        {/* <CommonSnackbar /> */}
        <BrowserRouter>
          <ExpandableMenu />
          <Routes>
            {/* <Route path="*" element={<Page404 />} /> */}
            {/* 主路由 */}
            <Route path="/" element={<HomePage />}>
              <Route index element={<LandingPage />} />
              <Route
                path="/products/:productName"
                element={<ProductsPage />}
              ></Route>

              {/* 子路由的404处理 */}
              {/* <Route path="*" element={<Page404 />} /> */}
            </Route>

            {/* 独立路由部分 */}
            {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
