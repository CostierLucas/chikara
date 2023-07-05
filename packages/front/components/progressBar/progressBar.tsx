import { chikaraAddress, totalAmount } from 'packages/front/global';
import { useContractRead } from 'wagmi';
import contractAbi from '../../abi/TokenPresale.json';

export const ProgressBar = () => {
  const { data } = useContractRead({
    address: chikaraAddress,
    abi: contractAbi.abi,
    functionName: 'getTotalInUSDT',
  });

  return (
    <div className="mb-4">
      <div>
        <p className="text-center text-white mb-4">
          $
          {(Number(data) / 100000000)
            .toFixed(0)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
          / $ {totalAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </p>
      </div>
      <div className="relative z-20">
        <div className="relative h-4 w-full rounded-full bg-black">
          <div
            className={`absolute left-0 bottom-0 h-full w-[${Math.ceil(
              (Number(data) / 100000000 / Number(totalAmount)) * 100
            )}%] rounded-full bg-primary`}
          ></div>
          <div className="absolute bottom-0 left-0 flex w-full justify-around">
            <div className="group relative flex w-1/3 justify-center"></div>
            <div className="group relative flex w-1/3 justify-center"></div>
            <div className="group relative flex w-1/3 justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
