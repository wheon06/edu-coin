interface Props {
  page: number;
  onLeftClick: (page: number) => void;
  onRightClick: (page: number) => void;
}

export default function FootNav({ page, onLeftClick, onRightClick }: Props) {
  return (
    <div className='flex'>
      <button onClick={() => onLeftClick(page)}>
        <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='1em'
          width='1em'
        >
          <path d='M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z' />
        </svg>
      </button>
      <h1 className='mx-10'>{page + 1}</h1>
      <button onClick={() => onRightClick(page)}>
        <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='1em'
          width='1em'
        >
          <path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z' />
        </svg>
      </button>
    </div>
  );
}
