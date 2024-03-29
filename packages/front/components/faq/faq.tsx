import { useState } from 'react';
import styles from './faq.module.css';

/* eslint-disable-next-line */
export interface FaqProps {}

export function Faq(props: FaqProps) {
  const [isSelected, setSelected] = useState<Number | null>(null);

  const handleSelect = (index: Number) => {
    if (isSelected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <section id="faq" className="relative z-10 bg-red py-24">
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-16 max-w-[630px] text-center md:mb-20"
          data-wow-delay="0s"
        >
          <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
            FAQ
          </span>
          <h2 className="mb-3 !text-6xl font-bold font-pixel leading-tight text-white dark:text-white md:text-[45px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
            <div
              className="single-faq wow fadeInUp mb-10 rounded-lg bg-[#3f3f3f] py-6 px-7 dark:bg-[#3f3f3f] md:py-8 md:px-10"
              data-wow-delay="0s"
            >
              <button
                className="faq-btn flex w-full items-center justify-between text-left"
                onClick={() => handleSelect(0)}
              >
                <h3 className="mr-2 text-base font-bold text-white dark:text-white sm:text-lg md:text-xl">
                  What is CHA?
                </h3>
                <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_50_132)">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50_132">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(-0.000488281 0.000488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
              {isSelected === 0 && (
                <div x-show="openFaq1" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-white dark:text-body-color">
                    CHA is a new cryptocurrency project that is focused on
                    building a play-to-earn game and governance platform.
                  </p>
                </div>
              )}
            </div>
            <div
              className="single-faq wow fadeInUp mb-10 rounded-lg bg-[#3f3f3f] py-6 px-7 dark:bg-[#3f3f3f] md:py-8 md:px-10"
              data-wow-delay="0s"
            >
              <button
                className="faq-btn flex w-full items-center justify-between text-left"
                onClick={() => handleSelect(1)}
              >
                <h3 className="mr-2 text-base font-bold text-white dark:text-white sm:text-lg md:text-xl">
                  What is the play-to-earn game for CHA?
                </h3>
                <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_50_132)">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50_132">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(-0.000488281 0.000488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
              {isSelected === 1 && (
                <div x-show="openFaq2" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-white dark:text-body-color">
                    The play-to-earn game for CHA is an exciting new platform
                    where users can earn CHA by completing challenges and
                    competing in multiplayer matches. A portion of the
                    transaction fees generated by the game will be added to the
                    Play-to-Earn Rewards Pool, which will be distributed to
                    players based on their performance.
                  </p>
                </div>
              )}
            </div>
            <div
              className="single-faq wow fadeInUp mb-10 rounded-lg bg-[#3f3f3f] py-6 px-7 dark:bg-[#3f3f3f] md:py-8 md:px-10"
              data-wow-delay="0s"
            >
              <button
                className="faq-btn flex w-full items-center justify-between text-left"
                onClick={() => handleSelect(2)}
              >
                <h3 className="mr-2 text-base font-bold text-white dark:text-white sm:text-lg md:text-xl">
                  How can I purchase CHA?
                </h3>
                <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_50_132)">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50_132">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(-0.000488281 0.000488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
              {isSelected === 2 && (
                <div x-show="openFaq3" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-white dark:text-body-color">
                    CHA can be purchased during the presale or after the token
                    is listed on a DEX/CEX. Stay tuned for more information on
                    where to purchase CHA.
                  </p>
                </div>
              )}
            </div>
            <div
              className="single-faq wow fadeInUp mb-10 rounded-lg bg-[#3f3f3f] py-6 px-7 dark:bg-[#3f3f3f] md:py-8 md:px-10"
              data-wow-delay="0s"
            >
              <button
                className="faq-btn flex w-full items-center justify-between text-left"
                onClick={() => handleSelect(4)}
              >
                <h3 className="mr-2 text-base font-bold text-white dark:text-white sm:text-lg md:text-xl">
                  How can I get involved with CHA?
                </h3>
                <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_50_132)">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50_132">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(-0.000488281 0.000488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
              {isSelected === 4 && (
                <div x-show="openFaq4" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-white dark:text-body-color">
                    You can join the CHA community by following us on social
                    media, participating in the presale, and playing the
                    play-to-earn game once it is released. Additionally, you can
                    help spread the word about CHA and share the project with
                    others who may be interested.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
