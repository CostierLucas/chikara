import { useEffect, useState } from 'react';
import { erc20ABI, useAccount, usePublicClient } from 'wagmi';
import contractAbi from '../../abi/TokenPresale.json';
import {
  chikaraAddress,
  presaleId,
  price,
  usdtAddress,
} from 'packages/front/global';
import { formatEther } from 'viem';
import { ButtonTx } from '../buttonTx/buttonTx';

export const InputToken = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [crypto, setCrypto] = useState<string>('eth');
  const [amount, setAmount] = useState<number | string>('');
  const [noToken, setNoToken] = useState<bigint>(BigInt(0));
  const [amountCha, setAmountCha] = useState<number>();
  const [allowanceUsdt, setAllowanceUsdt] = useState<bigint>(BigInt(0));

  const tokenHelper = async (token: string, noToken: bigint) => {
    const data = await publicClient.readContract({
      address: chikaraAddress,
      abi: contractAbi.abi,
      functionName: token === 'eth' ? 'ethBuyHelper' : 'usdtBuyHelper',
      args: [presaleId, noToken],
    });

    if (crypto === 'eth') {
      const formattedData = formatEther(BigInt(data.toString()));

      setAmount(Number(formattedData));
      setNoToken(noToken);
    } else {
      const result = Number(noToken) * price;
      setNoToken(noToken);
      setAmount(Number(result));
    }
  };

  const convertTokenToCha = async (token: string, noToken: bigint) => {
    if (token === 'eth') {
      console.log('eth');
    } else {
      const amount = BigInt(noToken) / BigInt(price);

      setAmountCha(Number(amount));
    }
  };

  const preventNegativeValues = (e) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  useEffect(() => {
    if (crypto === 'usdt') {
      const checkAllowance = async () => {
        const data = await publicClient.readContract({
          address: usdtAddress,
          abi: erc20ABI,
          functionName: 'allowance',
          args: [address, chikaraAddress],
        });

        return data;
      };

      checkAllowance().then((data) => {
        setAllowanceUsdt(BigInt(data.toString()));
      });
    }
  }, [address, crypto, publicClient]);

  return (
    <div>
      <p className="text-center text-white mb-4">1 $CHA = {price} $</p>
      <div className="text-center mb-5">
        <select
          id="crypto"
          className="bg-primary rounded text-white py-1 px-1 w-2/4"
          onChange={(e) => setCrypto(e.target.value)}
        >
          <option value="eth">ETH</option>
          {/* <option value="usdt">USDT</option> */}
        </select>
      </div>
      <div className="text-center">
        <div className="mb-5">
          <label className="text-white text-xs">
            NUMBER OF TOKENS YOU WANT TO BUY :
          </label>
          <div>
            <input
              defaultValue={amountCha}
              onChange={(e) => tokenHelper(crypto, BigInt(e.target.value))}
              min="0"
              type="number"
              placeholder="0"
              onKeyDown={(e) => preventNegativeValues(e)}
              className="bg-white rounded text-black py-1 px-1 w-2/4"
            />
          </div>
        </div>
        <div>
          <label className="text-white text-xs">AMOUNT TO PAY :</label>
          <div>
            <input
              type="number"
              placeholder="0"
              className="bg-gray-200 rounded text-black py-1 px-1 cursor-not-allowed w-2/4"
              value={amount}
              disabled
              onChange={(e) => {
                setAmount(Number(e.target.value));
                convertTokenToCha(crypto, BigInt(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {crypto === 'usdt' && allowanceUsdt < amountCha && 'error'}
        <ButtonTx amount={noToken} token={crypto} />
      </div>
    </div>
  );
};
