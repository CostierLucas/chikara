import { useState } from 'react';
import { usePublicClient } from 'wagmi';
import contractAbi from '../../../contracts/artifacts/contracts/ChikaraPresale.sol/TokenPresale.json';
import { chikaraAddress, presaleId, price } from 'packages/front/global';
import { formatEther } from 'viem';
import { ButtonTx } from '../buttonTx/buttonTx';

export const InputToken = () => {
  const publicClient = usePublicClient();
  const [crypto, setCrypto] = useState<string>('eth');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [noToken, setNoToken] = useState<bigint>(BigInt(0));
  const [amountCha, setAmountCha] = useState<number>(0);

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

  return (
    <div>
      <p className="text-center text-white mb-4">1 $CHA = {price} $</p>
      <div className="text-center mb-5">
        <select
          id="crypto"
          className="bg-primary rounded text-white py-1 px-1 w-1/3"
          onChange={(e) => setCrypto(e.target.value)}
        >
          <option value="eth">ETH</option>
          <option value="usdt">USDT</option>
        </select>
      </div>
      <div className="flex gap-5 justify-between">
        <div>
          <label className="text-white text-xs">YOU PAY</label>
          <div>
            <input
              type="number"
              placeholder="0"
              className="bg-white rounded text-black py-1 px-1"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
                convertTokenToCha(crypto, BigInt(e.target.value));
              }}
            />
          </div>
        </div>
        <div>
          <label className="text-white text-xs">$CHA YOU RECEIVE</label>
          <div>
            <input
              defaultValue={amountCha}
              onChange={(e) => tokenHelper(crypto, BigInt(e.target.value))}
              type="number"
              placeholder="0"
              className="bg-white rounded text-black py-1 px-1"
            />
          </div>
        </div>
      </div>
      <div className="mb-10 text-center">
        <ButtonTx amount={noToken} token={crypto} />
      </div>
    </div>
  );
};
