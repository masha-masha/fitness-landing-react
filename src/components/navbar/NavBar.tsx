import React from 'react';
import Logo from '@/assets/images/Logo.png';

const NavBar = () => {
 return (
  <nav className='relative h-[88px]'>
   <div className='fixed top-0 z-30 w-full'>
    <div className='mx-auto w-5/6 flex-between'>
     <div className='flex-between gap-20 w-full'>
      <img src={Logo} alt='Logo' />
      <div className='flex-between w-full'>
       <div className='flex-between gap-8 text-sm'>menu</div>
       <div className='flex-between gap-8'>
        <button className='rounded-md bg-rose-400 px-10 py-2 cursor-pointer hover:bg-rose-500 hover:text-white animate'>
         Sign in
        </button>
         <a href='' className=''>Become a Member</a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </nav>
 );
};

export default NavBar;
