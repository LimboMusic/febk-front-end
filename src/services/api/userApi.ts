import store from '@/store/store'
import { SERVER_ENDPOINT } from '../../config'
import { transform } from '../config/interceptorHooks'
import Request from '../config/Request'
import { RootState } from '@/store/rootReducer'

const request = new Request({
  baseURL: SERVER_ENDPOINT,
  timeout: 12000,
  interceptorHooks: transform,
})

const getLocaleState = (): 'en' | 'zh' => {
  const state = store.getState() as RootState
  return state.interview.locale
}
const locale = getLocaleState()

export const postRegisterUser = async ({
  first_name,
  last_name,
  email,
  password,
}: {
  first_name: string
  last_name: string
  email: string
  password: string
}) => {
  const formData = new URLSearchParams()
  formData.append('first_name', first_name)
  formData.append('last_name', last_name)
  formData.append('email', email)
  formData.append('password', password)
  const res = await request.post(
    `/user/register?lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    formData,
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    },
  )
  return res
}

export const postLoginUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const formData = new URLSearchParams()
  formData.append('email', email)
  formData.append('password', password)
  const res = await request.post(
    `/user/login?lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    formData,
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    },
  )
  return res
}

export const getUserInfo = async () => {
  const res = await request.get(
    `/user/user?lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    { withCredentials: true },
  )
  return res
}

export const getUserEmail = async () => {
  const res = await request.get('/user/email', { withCredentials: true })
  return res
}

export const getVerifyEmail = async () => {
  const res = await request.get('/user/verify-email', { withCredentials: true })
  return res
}

export const getUserLogOut = async () => {
  const res = await request.get(
    `/user/logout?lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    { withCredentials: true },
  )
  return res
}

export const getSendForgetPassword = async (email) => {
  const res = await request.get(
    `/user/forget-password?email=${email}&lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    {
      withCredentials: true,
    },
  )
  return res
}

export const postResetPassword = async ({ new_password, token }) => {
  const formData = new URLSearchParams()
  formData.append('new_password', new_password)
  const res = await request.post(
    `/user/reset-password?lang=${locale === 'en' ? 'en-US' : 'zh-CN'}`,
    formData,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      withCredentials: true,
    },
  )
  return res
}

export const postUserVerifyGiftCode = async ({
  lang,
  code,
}: {
  lang: string
  code: string
}) => {
  const formData = new URLSearchParams()
  formData.append('code', code)
  const res = await request.post(
    `/user/gift-code?lang=${lang === 'en' ? 'en-US' : 'zh-CN'}`,
    formData,
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    },
  )
  return res
}

export const getGoogleLogin = async () => {
  window.location.href = `${SERVER_ENDPOINT}/user/google-login`
}
