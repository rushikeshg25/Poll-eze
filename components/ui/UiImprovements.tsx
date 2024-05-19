const UiImprovements = () => {
  return (
    <div>
      <a
        className='inline-flex items-center gap-x-1 space-x-1 rounded-xl border-2 border-gray-400 px-1 py-1 text-sm font-semibold text-gray-600 hover:border-blue-500'
        href='#'
      >
        <span className='flex items-center justify-center gap-1 rounded-lg bg-orange-100 px-1 py-0.5 text-sm font-semibold text-orange-800 dark:bg-blue-900 dark:text-blue-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6 text-orange-400'
          >
            <path d='m3 11 18-5v12L3 14v-3z'></path>
            <path d='M11.6 16.8a3 3 0 1 1-5.8-1.6'></path>
          </svg>
          New
        </span>
        <span>Announcements/Future Goals</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-4 w-4'
        >
          <path d='M5 12h14'></path>
          <path d='m12 5 7 7-7 7'></path>
        </svg>
      </a>
    </div>
  );
};

export default UiImprovements;
