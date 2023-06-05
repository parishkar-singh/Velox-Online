import '@/styles/globals.scss'
import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {store} from '@/app/store'
import {ThemeProvider} from '@mui/material'
import {theme} from '@/utils/theme'
export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
        </Provider>
    )
}
