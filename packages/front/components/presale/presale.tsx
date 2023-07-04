import { CountdownPresale } from '../countdown/countdown';
import { InputToken } from '../inputToken/inputToken';

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
        <div className="mb-4">
          <div className="relative z-20">
            <div className="relative h-4 w-full rounded-full bg-black">
              <div className="absolute left-0 bottom-0 h-full w-[75%] rounded-full bg-primary"></div>

              <div className="absolute bottom-0 left-0 flex w-full justify-around">
                <div className="group relative flex w-1/3 justify-center"></div>
                <div className="group relative flex w-1/3 justify-center"></div>
                <div className="group relative flex w-1/3 justify-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <InputToken />
        </div>
      </div>
    </div>
  );
}

export default Presale;
