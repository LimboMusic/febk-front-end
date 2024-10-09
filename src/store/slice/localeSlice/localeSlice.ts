import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/rootReducer'

interface LocaleState {
    locale: 'en' | 'zh'
}

const getInitialLocale = (): 'en' | 'zh' => {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'zh' | null
    const currentOrigin = window.location.origin
    if (currentOrigin.includes('datalynn.ai')) {
        return 'zh'
    } else if (currentOrigin.includes('datalynn.com')) {
        return 'en'
    } else {
        return savedLocale === 'zh' ? 'zh' : 'en'
    }
}

const initialState: LocaleState = {
    //   sessionId: '',
    locale: getInitialLocale(),
}

export const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state) => {
            state.locale = state.locale === 'en' ? 'zh' : 'en'
            localStorage.setItem('locale', state.locale)
        },
    },
})

export const selectLocale = (state: RootState) => state.locale

export const { setLocale } = localeSlice.actions

export default localeSlice.reducer
