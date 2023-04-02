import styles from './demo.module.css';

/* eslint-disable-next-line */
export interface DemoProps {}

export function Demo(props: DemoProps) {
  return (
    <section id="download" className="py-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp mb-12 max-w-[500px] lg:mb-0"
              data-wow-delay="0s"
            >
              <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                P2E
              </span>
              <h2 className="mb-3 !text-6xl font-bold font-pixel leading-tight text-black dark:text-white md:text-[45px]">
                Be ready for the fight
              </h2>
              <p className="mb-10 text-lg font-medium text-body-color-2 dark:text-body-color">
                In this thrilling play-to-earn game, players take on the role of
                a brave cat as they battle against the nefarious Bad Shiba and
                his minions. With a variety of exciting challenges and
                multiplayer modes to choose from, players can earn real value
                while enjoying immersive gameplay and stunning graphics. Join
                the fight and help the cat emerge victorious in this epic battle
                against evil.
              </p>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative -z-10 text-center"
              data-wow-delay="0s"
            >
              <img
                src="/game.jpg"
                alt="app image"
                className="mx-auto hidden dark:block text-center"
              />
              <span
                className="absolute right-0 bottom-0 w-[320px] h-[320px] rounded-full -z-10"
                style={{
                  background:
                    'background: linear-gradient( 180deg, rgba(55, 109, 249, 0) 0%, rgba(255, 96, 166, 0.32) 100% );',
                  filter: 'blur(100px);',
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
