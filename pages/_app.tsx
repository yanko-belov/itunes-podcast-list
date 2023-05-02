import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import fetcher from "@/swr/fetcher";
import { localStorageProvider } from "@/swr/cache-provider";
import { SWRConfig } from "swr";
import { useEffect, useState } from "react";

export default function App({Component, pageProps}: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  return <SWRConfig value={{
    fetcher,
    provider: localStorageProvider,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    dedupingInterval: 10_000 * 60 * 60 * 24,
  }}>
    <Component {...pageProps} />
  </SWRConfig>
}
