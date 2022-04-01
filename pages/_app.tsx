import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000'
    },
    primary: {
      main: '#2979ff'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}><Component {...pageProps} /></MuiThemeProvider>
  )
}

export default MyApp
