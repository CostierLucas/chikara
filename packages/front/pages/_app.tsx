import '../styles/globals.css';
import '../styles/animate.css';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <>
          <Head>
            <title>Chikara</title>
          </Head>

          <main className="app">
            <Component {...pageProps} />
          </main>
        </>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default CustomApp;
