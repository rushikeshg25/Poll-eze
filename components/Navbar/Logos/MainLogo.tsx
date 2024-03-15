const MainLogo = () => {
  return (
    <div>
      <div className='border-2 border-black dark:border-gray-400 flex flex-row h-12 w-12 rounded-xl justify-center items-center gap-1'>
        <div className='h-8 flex items-end'>
          <div className='bg-black dark:bg-gray-400 h-5 w-2 rounded-xl' />
        </div>
        <div className='bg-black dark:bg-gray-400 h-8 w-2 rounded-xl' />
        <div className='h-8 flex items-end'>
          <div className='bg-black dark:bg-gray-400 h-4 w-2 rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default MainLogo;
