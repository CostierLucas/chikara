import { CountdownPresale } from '../countdown/countdown';
import { InputToken } from '../inputToken/inputToken';
import ProgressBar from '../progressBar/progressBar';

/* eslint-disable-next-line */
export interface PresaleProps {}

export function Presale(props: PresaleProps) {
  return (
    <div className=" w-full px-4 lg:w-1/2">
      <div
        className="wow fadeInUp rounded-lg bg-[#3f3f3f] py-12 px-8"
        data-wow-delay="0s"
      >
        <div
          className="wow fadeInUp mx-auto max-w-[590px] text-center mb-6"
          data-wow-delay="0s"
        >
          <p className="text-md font-medium text-body-color-2 dark:text-body-color">
            Don&apos;t miss your chance to get early access to CHIKARA tokens at
            a discounted price - join our presale now!
          </p>
        </div>
        <div className="mb-4">
          <div className="flex items-start justify-center">
            <CountdownPresale />
          </div>
        </div>
        <ProgressBar />
        <div>
          <InputToken />
        </div>
      </div>
    </div>
  );
}

export default Presale;
