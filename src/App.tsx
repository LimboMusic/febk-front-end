import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CardPaymentPage from '@/pages/CardPaymentPage/CardPaymentPage'
// import CommonSnackbar from './components/ComoonSnackbar/CommonSnackbar'
import { ThemeProvider } from '@mui/material'
import theme from '@/lib/theme'
import { useSelector, selectLocale } from './store'
import HomePage from './pages/HomePage/HomePage'
import enLandingPage from './locales/en/enLandingPage.json'
import enInterviewCopilotPage from './locales/en/enInterViewCopilotPage.json'
import enCopilotApplicationPage from './locales/en/enCopilotApplicationPage.json'
import enLoginPage from './locales/en/enLoginPage.json'
import enModal from './locales/en/enModal.json'
import enUserPage from './locales/en/enUserPage.json'
import enAboutUsPage from './locales/en/enAboutUsPage.json'
import enAvatarDetail from './locales/en/enAvatarDetail.json'
import enForgetPasswordPage from './locales/en/enForgetPasswordPage.json'
import enResetPasswordPage from './locales/en/enResetPasswordPage.json'
import zhLandingPage from './locales/zh/zhLandingPage.json'
import zhInterviewPage from './locales/zh/zhInterViewCopilotPage.json'
import zhCopilotApplicationPage from './locales/zh/zhCopilotApplicationPage.json'
import zhLoginPage from './locales/zh/zhLoginPage.json'
import zhModal from './locales/zh/zhModal.json'
import zhUserPage from './locales/zh/zhUserPage.json'
import zhAboutUsPage from './locales/zh/zhAboutUsPage.json'
import zhAvatarDetail from './locales/zh/zhAvatarDetail.json'
import zhForgetPasswordPage from './locales/zh/zhForgetPasswordPage.json'
import zhResetPasswordPage from './locales/zh/zhResetPasswordPage.json'
import { IntlProvider } from 'react-intl'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import LandingPage from './pages/LandingPage/LandingPage'
import ExpandableMenu from './components/ExpandableMenu/ExpandableMenu'

const messages = {
  en: {
    ...enLandingPage,
    ...enInterviewCopilotPage,
    ...enCopilotApplicationPage,
    ...enModal,
    ...enLoginPage,
    ...enUserPage,
    ...enAboutUsPage,
    ...enAvatarDetail,
    ...enForgetPasswordPage,
    ...enResetPasswordPage,
  },
  zh: {
    ...zhLandingPage,
    ...zhInterviewPage,
    ...zhCopilotApplicationPage,
    ...zhModal,
    ...zhLoginPage,
    ...zhUserPage,
    ...zhAboutUsPage,
    ...zhAvatarDetail,
    ...zhForgetPasswordPage,
    ...zhResetPasswordPage,
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
