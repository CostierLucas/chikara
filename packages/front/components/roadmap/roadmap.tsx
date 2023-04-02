import styles from './roadmap.module.css';

/* eslint-disable-next-line */
export interface RoadmapProps {}

export function Roadmap(props: RoadmapProps) {
  return (
    <section id="roadmap" className="relative z-10 py-[120px]">
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20"
          data-wow-delay="0s"
        >
          <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
            ROADMAP
          </span>
          <h2 className="mb-3 !text-6xl font-bold font-pixel leading-tight text-black dark:text-white md:text-[45px]">
            The Timeline
          </h2>
          <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
            Chikara is a highly ambitious project, and we are excited to share
            our roadmap that outlines our plans for growth and development in
            the months and years to come.
          </p>
        </div>

        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
            <div
              className="wow fadeInUp relative -mx-4 flex flex-wrap md:py-14 lg:py-20"
              data-wow-delay="0s"
            >
              <span className="absolute top-0 left-2 hidden h-full w-[2px] bg-light-bg dark:bg-[#2D2C4A] md:left-1/2 md:block"></span>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 mb-10 rounded-lg bg-primary py-8 px-6 dark:bg-primary md:mr-3 md:mb-0 md:text-right lg:mr-5">
                  <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                  <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-primary md:block"></span>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    Q2 - 2023
                  </h3>
                  <p className="mb-5 text-base text-body-color-2 dark:text-white">
                    Chikara successfully completed their initial website launch
                    and continued to build momentum through a logo design
                    contest, tokenomics finalization, presale launch, community
                    growth, and strategic marketing efforts.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-primary md:ml-3 md:mb-0 lg:ml-5">
                  <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                  <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-primary md:block"></span>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    Q3 - 2023
                  </h3>
                  <p className="mb-5 text-base text-body-color-2 dark:text-white">
                    After the successful launch of their token, Chikara
                    continued to innovate with the release of 8,888 non-fungible
                    tokens, listings on DEX/CEX exchanges, and the launch of
                    their updated website 2.0. They also released a P2E demo and
                    income plan, solidifying their position as a leader in the
                    play-to-earn gaming space.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-primary md:mr-3 md:mb-0 md:text-right lg:mr-5">
                  <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                  <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-primary md:block"></span>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    Q4 - 2023
                  </h3>
                  <p className="mb-5 text-base text-body-color-2 dark:text-white">
                    Chikara continued to expand their reach with a full-scale
                    marketing campaign focused on Web3, and a highly anticipated
                    release of their 8-level play-to-earn game. Alongside the
                    game launch, they also released a full-featured CHIKARA
                    website and expanded their DEX/CEX listings in step 2 of
                    their growth strategy.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-primary md:ml-3 md:mb-0 lg:ml-5">
                  <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                  <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-primary md:block"></span>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    Q1 - 2024
                  </h3>
                  <p className="mb-5 text-base text-body-color-2 dark:text-white">
                    More to come...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
