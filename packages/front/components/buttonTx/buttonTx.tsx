import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { useWaitForTransaction } from 'wagmi';
import contractAbi from '../../abi/TokenPresale.json';
import { chikaraAddress, presaleId } from 'packages/front/global';
import { ClipLoader } from 'react-spinners';

interface ButtonTxProps {
  amount: bigint;
  token: string;
}

export const ButtonTx = ({ amount, token }: ButtonTxProps) => {
  const { data: amountEth } = useContractRead({
    address: chikaraAddress,
    abi: contractAbi.abi,
    functionName: token === 'eth' ? 'ethBuyHelper' : 'usdtBuyHelper',
    args: [presaleId, amount === BigInt(0) ? BigInt(1) : amount],
  });

  const { config, error: prepareError } = usePrepareContractWrite({
    address: chikaraAddress,
    abi: contractAbi.abi,
    functionName: token === 'eth' ? 'buyWithEth' : 'buyWithUSDT',
    args: [presaleId, amount === BigInt(0) ? BigInt(1) : amount],
    value: amountEth ? BigInt(amountEth.toString()) : undefined,
  });

  const { data: dataWrite, write, isError } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: dataWrite?.hash,
  });

  return (
    <div className="mt-10">
      <button
        className={`${
          isSuccess ? 'bg-success' : 'bg-primary'
        } text-white rounded-full px-4 py-2 font-semibold text-sm uppercase tracking-wider leading-none inline-flex items-center justify-center hover:bg`}
        onClick={() => write?.()}
      >
        {isLoading && (
          <ClipLoader
            color={'#fff'}
            loading={isLoading}
            size={20}
            className="mr-3"
          />
        )}

        {isLoading && 'Loading'}

        {isSuccess && 'Success'}

        {isError && 'Error'}

        {prepareError && prepareError.message}

        {!isLoading && !isSuccess && !isError && !prepareError && 'Buy token'}
      </button>
    </div>
  );
};
