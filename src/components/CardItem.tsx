import React from 'react';

interface Props {
  id: string;
  name: string;
  page: number;
  onClick: (uri: string, page: number, id: string) => void;
  style?: string;
}

export default function CardItem({ id, name, page, onClick, style }: Props) {
  return (
    <div
      className={'cursor-pointer ' + style}
      onClick={() => onClick('coin/' + id, page, id)}
    >
      <h1 className='flex min-h-10 items-center justify-center text-center font-bold text-black/80'>
        {name}
      </h1>
    </div>
  );
}
