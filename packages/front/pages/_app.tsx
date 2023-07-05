import '../styles/globals.css';
import '../styles/animate.css';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { goerli, hardhat } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useEffect, useState } from 'react';

const { chains, publicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Chikara',
  projectId: '5e65385329156b9a2023c880beff680e',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function CustomApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <>
          <Head>
            <title>Chikara</title>
            <link rel="icon" type="image/png" href="logo.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Chikara is a cryptocurrency project that offers play-to-earn games."
            />
          </Head>

          <main className="app">
            {isMounted && <Component {...pageProps} />}
          </main>
        </>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default CustomApp;
