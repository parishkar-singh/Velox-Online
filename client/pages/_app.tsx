import '@/styles/globals.scss'
import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {store} from '@/app/store'
import {ThemeProvider} from '@mui/material'
import {theme} from '@/utils/theme'
export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </ThemeProvider>
    )
}
