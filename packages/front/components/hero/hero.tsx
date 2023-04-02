import styles from './hero.module.css';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section id="home" className="relative z-10 pt-48 pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[720px] text-center">
              <div className="flex items-center gap-5 justify-center">
                <h1 className="mb-4 !text-9xl font-bold font-pixel leading-tight text-black dark:text-white md:text-[45px]">
                  CHIKARA
                </h1>
                <div className="w-24">
                  <img src="/body.png" alt="" className="mx-auto mb-4" />
                </div>
              </div>
              <p className="mx-auto mb-10 max-w-[620px] text-2xl font-pixel font-medium text-body-color-2 dark:text-white">
                Chikara is a cryptocurrency project that offers play-to-earn
                games. It combines blockchain technology with gaming to create a
                transparent and secure environment where players can earn
                rewards through the Chikara token. By providing a new way to
                earn real value for gaming, Chikara is transforming the gaming
                industry.
              </p>
              <a
                href="javascript:void(0)"
                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90 mt-7"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-20"
        style={{
          backgroundImage:
            'linear-gradient( 180deg, #ff3e5d 0%, rgba(62, 125, 255, 0) 100%);',
        }}
      ></div>
    </section>
  );
}

export default Hero;
