import type { AppProps } from 'next/app';
import { AuthProvider } from '../src/contexts/AuthContenxt';

import { ThemeToggleProvider } from '../src/contexts/themeContentext'
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Layout } from '../src/components/Layout/';
import { FlasMessageProvider } from '../src/contexts/FlasMessageContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeToggleProvider>
        <FlasMessageProvider>
          <AuthProvider>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </FlasMessageProvider>
      </ThemeToggleProvider>
    </>
  )
}
