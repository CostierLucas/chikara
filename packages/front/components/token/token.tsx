import styles from './token.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

/* eslint-disable-next-line */
export interface TokenProps {}

export function Token(props: TokenProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        data: [88, 12],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="token" className="relative z-10">
      <div className="container">
        <div className="rounded-lg bg-light-bg py-12 px-8 dark:bg-[#3f3f3f] sm:py-16 sm:px-14 lg:px-8 xl:px-14">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp mb-12 flex items-center justify-center lg:mb-0"
                data-wow-delay="0s"
              >
                <Doughnut data={data} />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp mb-9" data-wow-delay="0s">
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                  TOKEN
                </span>
                <h2 className="mb-3 font-pixel !text-6xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  Token Sale
                </h2>
                <p className="text-lg font-normal text-body-color-2 dark:text-white">
                  At Chikara, our tokenomics are designed with our customers in
                  mind, with a focus on providing a transparent and fair
                  experience for all users. With a fixed supply of{' '}
                  <span className="font-bold text-primary">88,888,888,888</span>{' '}
                  tokens we are committed to maintaining a stable and
                  predictable ecosystem that rewards our users for their
                  participation.
                </p>
              </div>
              <div className="wow fadeInUp space-y-4" data-wow-delay="0s">
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-primary"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-white">
                    88% Presale - Community
                  </span>
                </p>
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-white">
                    12% Liquidity - Marketing
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;
