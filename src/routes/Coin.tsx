import { useEffect, useState } from 'react';
import coins from './../coins.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../types/card';

export default function Coin() {
  const location = useLocation();
  const navigate = useNavigate();

  const { page, id, recentCardList } = location.state || {};

  const [selectedCoin, setSelectedCoin] = useState<Card | undefined>(undefined);
  console.log(recentCardList);

  const backClickHandle = () => {
    navigate('/', {
      state: { existPage: page, existRecentCardList: recentCardList },
    });
  };

  useEffect(() => {
    const currentCoinList = coins.slice(page * 40, page * 40 + 40);
    setSelectedCoin(currentCoinList.find((coin) => coin.id === id));
  }, [id, page]);

  return (
    <div className='flex flex-col rounded-3xl bg-white p-10'>
      <div className='w-2/5'>
        <h1 className='pr-96 text-3xl font-bold'>
          {selectedCoin && selectedCoin.name}
        </h1>
      </div>
      <div className='my-[5%] w-full border border-black/30' />
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <p>순위:</p>
          <p>{selectedCoin?.rank}위</p>
        </div>
        <div className='flex justify-between'>
          <p>기호:</p>
          <p>{selectedCoin?.symbol}</p>
        </div>
        <div className='flex justify-between'>
          <p>가격(KRW):</p>
          <p>
            ₩
            {Number(selectedCoin?.quotes.KRW.price.toFixed(1)).toLocaleString()}
          </p>
        </div>
        <div className='flex justify-between'>
          <p>총 시가:</p>
          <p>
            {selectedCoin &&
              (selectedCoin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}
            T
          </p>
        </div>
        <div className='flex justify-between'>
          <p>거래량(24H):</p>
          <p>
            {selectedCoin &&
              (selectedCoin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}
            T
          </p>
        </div>
        <div className='flex justify-between'>
          <p>변동(24H):</p>
          <p
            className={
              selectedCoin &&
              Number(selectedCoin.quotes.KRW.percent_change_7d.toFixed(2)) > 0
                ? 'text-red-500'
                : 'text-blue-500'
            }
          >
            {selectedCoin &&
              selectedCoin.quotes.KRW.percent_change_24h.toFixed(2)}
            %
          </p>
        </div>
        <div className='flex justify-between'>
          <p>변동(7D):</p>
          <p
            className={
              selectedCoin &&
              Number(selectedCoin.quotes.KRW.percent_change_7d.toFixed(2)) > 0
                ? 'text-red-500'
                : 'text-blue-500'
            }
          >
            {selectedCoin &&
              selectedCoin.quotes.KRW.percent_change_7d.toFixed(2)}
            %
          </p>
        </div>
      </div>
      <div className='my-[5%] w-full border border-black/30' />
      <button
        className='rounded-full bg-black p-2 text-white'
        onClick={() => backClickHandle()}
      >
        돌아가기
      </button>
    </div>
  );
}
