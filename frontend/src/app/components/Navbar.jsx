import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-between px-8 py-3'>
        <p className='font-main'>Try Khedma</p>
        <ul className='font-secondary flex items-center gap-8 text-sm lg:text-base max-sm:hidden'>
          <li>
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-accent-blue-1 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              About us
            </a>
          </li>
          <li>
            <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-accent-blue-1 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">FAQ</a>
          </li>
          <button className='bg-accent-blue-1 rounded-md py-2 text-white px-4 border-2 border-accent-blue-1 font-medium'>
            Sign up
          </button>
          <button className='border-2 border-accent-blue-1 rounded-md py-2 px-4 text-accent-blue-1 font-medium'>
            Sign in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
