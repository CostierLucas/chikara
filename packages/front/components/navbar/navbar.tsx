import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWallet from '../connect-wallet/connect-wallet';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [scrolledFromTop, setScrolledFromTop] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header
      className={`top-0 z-50 flex w-full items-center fixed ${
        scrolledFromTop
          ? 'bg-white dark:bg-dark bg-opacity-80 dark:bg-opacity-80 shadow-sticky backdrop-blur-sm '
          : ' bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="container">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-28 max-w-full px-4">
            <a
              href="/"
              className={`block w-full py-6 lg:py-5 ${
                scrolledFromTop && '!py-4 lg:!py-2'
              }`}
            >
              <img
                src="/logo.png"
                alt="logo"
                className="block w-full dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-center px-4">
            <div>
              <button
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span
                  className={`${
                    navbarOpen && 'rotate-45 top-[7px]'
                  } relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white`}
                ></span>
                <span
                  className={`${
                    navbarOpen && 'opacity-0'
                  } relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white`}
                ></span>
                <span
                  className={`${
                    navbarOpen && 'top-[-8px] rotate-[135deg]'
                  } relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white`}
                ></span>
              </button>
              <nav
                className={`${
                  !navbarOpen && 'hidden'
                } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-[#3f3f3f] py-4 px-6 shadow dark:bg-[#3f3f3f] lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent`}
              >
                <ul className="blcok lg:flex">
                  <li className="text-body-color-2 dark:text-body-color">
                    <a
                      href="#home"
                      className="scroll-menu flex py-2 text-lg font-semibold text-white hover:text-white dark:text-white dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="scroll-menu flex py-2 text-lg font-semibold text-body-color hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#roadmap"
                      className="scroll-menu flex py-2 text-lg font-semibold text-body-color hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      href="#token"
                      className="scroll-menu flex py-2 text-lg font-semibold text-body-color hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="scroll-menu flex py-2 text-lg font-semibold text-body-color hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      P2E
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="scroll-menu flex py-2 text-lg font-semibold text-body-color hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-56">
              <div>
                <ConnectWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
