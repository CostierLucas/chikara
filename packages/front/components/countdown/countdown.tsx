import Countdown from 'react-countdown';
import { useContractRead } from 'wagmi';
import contractAbi from '../../abi/TokenPresale.json';
import { chikaraAddress, presaleId } from 'packages/front/global';

const Completionist = () => <span>Next step soon!</span>;

export const CountdownPresale = () => {
  const { data } = useContractRead({
    address: chikaraAddress,
    abi: contractAbi.abi,
    functionName: 'getEndTime',
    args: [presaleId],
  });

  return (
    <div>
      {data && (
        <Countdown
          className="text-white text-2xl font-bold"
          date={new Date(parseInt(data.toString()) * 1000)}
        >
          <Completionist />
        </Countdown>
      )}
    </div>
  );
};
