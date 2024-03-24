import { SiteContextProvider } from '@/components/SiteContext';
import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SiteContextProvider>
        <Component {...pageProps} />
      </SiteContextProvider>

    </SessionProvider>
  )
}
