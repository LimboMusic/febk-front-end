import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/rootReducer'

interface LocaleState {
    locale: 'en' | 'zh'
}

const getInitialLocale = (): 'en' | 'zh' => {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'zh' | null
    return savedLocale === 'en' ? 'en' : 'zh'
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
