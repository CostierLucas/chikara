import styles from './connect-wallet.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

/* eslint-disable-next-line */
export interface ConnectWalletProps {}

export function ConnectWallet(props: ConnectWalletProps) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="bg-primary text-white rounded-full px-4 py-2 font-semibold text-sm uppercase tracking-wider leading-none inline-flex items-center justify-center hover:bg"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="bg-primary text-white rounded-full px-4 py-2 font-semibold text-sm uppercase tracking-wider leading-none inline-flex items-center justify-center hover:bg"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div
                  className="bg-primary text-white rounded-full w-full px-4 py-2 font-semibold text-sm uppercase tracking-wider leading-none inline-flex items-center justify-center hover:bg"
                  style={{ display: 'flex', gap: 12 }}
                >
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectWallet;
