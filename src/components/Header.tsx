// import React from 'react'
// import { IoIosSearch } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegUserCircle } from "react-icons/fa";
// import Link from 'next/link';
// import Image from 'next/image';



// export const Header = ()=>{
//     return(
    

//         <div className='flex w-[1170px] h-[38px] mb-4 ml-[135px]  mt-[40px] gap-[130px] '>
//         <h2 className="h-[24px] w-[118px] text-[24px] font-inter font-[700] text-[#000000] flex items-center">
//           <Image src="/images/logo copy.png" alt="Logo" width={200} height={100} />
//         </h2>
//            <ul className='w-[370px] h-[24px] flex gap-[48px] text-[#000000]'>
//             <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="/" className="text-black-500 hover:underline">Home</Link></li>
//             <li className='font-poppins text-[16px] text-center font-normal w-[66px] h-[24px]'><Link href="/shop" className="text-black-500 hover:underline">Shop
//             </Link></li>
//             <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="../about" className="text-black-500 hover:underline">blog</Link></li>
//             <li className='font-poppins text-[16px] text-center font-normal w-[61px] h-[24px]'><Link href="/contact" className="text-black-500 hover:underline">contact</Link></li>
//            </ul>
//            <div className='flex gap-3'>
           
//             <FaRegUserCircle  className='h-[28px] w-[28px] '/>
//             <br/>
//             <br/>
//             <FaRegHeart className='h-[28px] w-[28px]'/>
//             <br/>
//             <br/>
//             {/* <MdOutlineShoppingCart className='h-[28px] w-[28px]' /> */}

//             <Link href="/cart" className="hover:fill-gray-400">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24"
//             width="24"
//             fill="black"
//             viewBox="0 0 24 24"
//             className="hover:fill-gray-400"
//           >
//             <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.346 6h13.164l-1.379 6h-11.632l-2.153-9h-3.346v2h2.022l2.78 11.6c.112.467.512.8.99.8h12v-2h-11.468c-.053 0-.1-.037-.113-.089l-.307-1.311h10.747c.484 0 .903-.333 1.005-.801l1.882-8.198c.033-.144.047-.296.047-.442v-.27c0-.553-.447-1-1-1h-14.254l-.604-2.535c-.112-.467-.512-.8-.99-.8h-4.8v2h3.028l2.902 12.1h12.343c.557 0 1.015-.457 1.02-1.014l-.003-.014c.02-.135.017-.27.017-.406v-.286h2v.286c0 .552-.448 1.005-1.003 1.014h-.014c-.041.554-.488 1-.99 1h-13.056c-.557 0-1.015-.457-1.02-1.014l.003-.014c-.02-.135-.017-.27-.017-.406v-.286h-2v.286c0 .552.448 1.005 1.003 1.014h.014c.041.554.488 1 .99 1h11.71c.482 0 .898-.336 1.005-.799l.048-.201.752-3.259h-11.352l-.327-1.4z" />
//           </svg>
//         </Link>
            
//            </div>
//         </div>
        
//     )
// }



'use client'; // Add this line to indicate that this is a client-side component

import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4">
      {/* Logo and menu toggle button */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[24px] font-inter font-[700] text-[#000000] flex items-center">
          {/* <Image src="/images/logo copy.png" alt="Logo" width={150} height={100} /> */}
        </h2>
        {/* Hamburger icon for small screens */}
        <button 
          className="lg:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      
      
      
      <div className={`lg:flex ${isMenuOpen ? 'flex flex-col items-center' : 'hidden'}  gap-80 mt-4 lg:mt-0`}>
      <h2 className="text-[24px] font-inter font-[700] text-[#000000] flex items-center">
          <Image src="/images/logo copy.png" alt="Logo" width={150} height={100} />
        </h2>
        <ul className="flex flex-col lg:flex-row gap-6 text-[#000000]">
          <li className="font-poppins text-[16px] text-center font-normal">
            <Link href="/" className="text-black-500 hover:underline">Home</Link>
          </li>
          <li className="font-poppins text-[16px] text-center font-normal">
            <Link href="/shop" className="text-black-500 hover:underline">Shop</Link>
          </li>
          <li className="font-poppins text-[16px] text-center font-normal">
            <Link href="../about" className="text-black-500 hover:underline">Blog</Link>
          </li>
          <li className="font-poppins text-[16px] text-center font-normal">
            <Link href="/contact" className="text-black-500 hover:underline">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex justify-center gap-4 mt-4 lg:mt-0">
          <FaRegUserCircle className="h-[28px] w-[28px]" />
          <FaRegHeart className="h-[28px] w-[28px]" />
          {/* Cart */}
          <Link href="/cart" className="hover:fill-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="black"
              viewBox="0 0 24 24"
              className="hover:fill-gray-400"
            >
              <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.346 6h13.164l-1.379 6h-11.632l-2.153-9h-3.346v2h2.022l2.78 11.6c.112.467.512.8.99.8h12v-2h-11.468c-.053 0-.1-.037-.113-.089l-.307-1.311h10.747c.484 0 .903-.333 1.005-.801l1.882-8.198c.033-.144.047-.296.047-.442v-.27c0-.553-.447-1-1-1h-14.254l-.604-2.535c-.112-.467-.512-.8-.99-.8h-4.8v2h3.028l2.902 12.1h12.343c.557 0 1.015-.457 1.02-1.014l-.003-.014c.02-.135.017-.27.017-.406v-.286h2v.286c0 .552-.448 1.005-1.003 1.014h-.014c-.041.554-.488 1-.99 1h-13.056c-.557 0-1.015-.457-1.02-1.014l.003-.014c-.02-.135-.017-.27-.017-.406v-.286h-2v.286c0 .552.448 1.005 1.003 1.014h.014c.041.554.488 1 .99 1h11.71c.482 0 .898-.336 1.005-.799l.048-.201.752-3.259h-11.352l-.327-1.4z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};
