import CardItem from '../components/CardItem';
import FootNav from '../components/FootNav';
import { useEffect, useState } from 'react';
import { Card } from '../types/card';
import coins from '../coins.json';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(0);
  const [cardList, setCardList] = useState<Card[]>([]);
  const [recentCardList, setRecentCardList] = useState<Card[]>([]);

  const handleLeftPageClick = (page: number) => {
    if (page > 0) setPage((prevPage) => prevPage - 1);
  };

  const handleRightPageClick = (page: number) => {
    if (page < coins.length / 40 - 1) setPage((prevPage) => prevPage + 1);
  };

  const handleCoinCardClick = (uri: string, page: number, id: string) => {
    const selectedCoin = cardList.find((coin) => coin.id === id);
    if (selectedCoin) {
      setRecentCardList((prevList) => {
        const newList = prevList.filter((coin) => coin.id !== selectedCoin.id);
        newList.push(selectedCoin);
        const updatedList = newList.length > 5 ? newList.slice(1) : newList;

        navigate(uri, {
          state: { page: page, id: id, recentCardList: updatedList },
        });

        return updatedList;
      });
    }
  };

  useEffect(() => {
    let { existPage, existRecentCardList } = location.state || {};
    if (existPage !== undefined) setPage(existPage);
    if (existRecentCardList) setRecentCardList(existRecentCardList);
    console.log('Updated existCardList:', existRecentCardList);
  }, [location.state]);

  useEffect(() => {
    setCardList(coins.slice(page * 40, page * 40 + 40));
  }, [page]);

  useEffect(() => {
    console.log('Updated recentCardList:', recentCardList);
  }, [recentCardList]);

  return (
    <>
      <h1 className='p-2 font-bold text-black/50'>RECENT</h1>
      <div className='flex'>
        {[...recentCardList].reverse().map((recentCard) => {
          return (
            <CardItem
              key={recentCard.id}
              id={recentCard.id}
              name={recentCard.name}
              page={page}
              onClick={handleCoinCardClick}
              style='rounded-2xl mr-2 bg-white p-1 shadow text-[15px]'
            />
          );
        })}
      </div>
      <div className='my-[1%] w-full border border-black/30' />
      <h1 className='p-2 font-bold text-black/50'>ALL</h1>
      <div className='grid grid-cols-4 gap-4'>
        {cardList.map((card) => {
          return (
            <CardItem
              key={card.id}
              id={card.id}
              name={card.name}
              page={page}
              onClick={handleCoinCardClick}
              style='rounded-3xl bg-white p-6 shadow'
            />
          );
        })}
      </div>
      <div className='flex justify-center p-5'>
        <div>
          <FootNav
            page={page}
            onLeftClick={handleLeftPageClick}
            onRightClick={handleRightPageClick}
          />
        </div>
      </div>
    </>
  );
}
