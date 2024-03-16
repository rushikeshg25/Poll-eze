import React from "react";

const Stepper = () => {
  return (
    <div>
      <h2 className='sr-only'>Steps</h2>

      <div>
        <ol className='flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4'>
          <li className='flex'>
            <span className='rounded bg-green-50 p-1.5 text-green-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>
          </li>

          <li className='flex items-center justify-center gap-2 text-blue-600'>
            <span className='size-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold'>
              {" "}
              2{" "}
            </span>

            <span> Address </span>
          </li>

          <li className='flex items-center justify-end gap-2'>
            <span className='size-6 rounded bg-gray-50 text-center text-[10px]/6 font-bold text-gray-600'>
              3
            </span>

            <span> Payment </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Stepper;
