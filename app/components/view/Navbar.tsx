import React from 'react'
import Image from 'next/image'
import { NavbarArray, NavbarItemType } from '../utils/NavbarArrayandTypes'
import Link from 'next/link'
import {BiSearch} from "react-icons/bi"
import {BsCart2} from "react-icons/bs"
import { HiOutlineChevronDown } from 'react-icons/hi'
export default function  Navbar() {
  return (
    <div className='py-6 px-12 flex justify-between items-center'>
        <div className='w-16'>
           <Image width={40}height={30} src={"/images/fz.jpg"}alt='logo'/>

        </div>
        <ul className='flex space-x-5 font-medium text-lg text-purple-950'>
          {NavbarArray.map((item:NavbarItemType, index:number)=>{
            return(
            <li className='flex item-center gap-1' >
              <Link href={item.href}>{item.label}</Link>
            {item.isDropDown ?  <HiOutlineChevronDown className='mt-1 rotate-180'/>:""}
            </li>
            )
          })}
        </ul>
        <div className='border flex items-center text-gray-600 px-1 rounded-md'>
          <BiSearch  />
          <input type='text '
           className='pl-1 pr-5 py-1 w-72'
          placeholder='Search in Our Store'
          />
        </div>
        <div className='relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center'>
          <div className='w-4 h-4 absolute top-1 right-2 flex items-center justify-center bg-red-400 text-xs font-light rounded-full'>3</div>
          <BsCart2 size={24}/>
        </div>
        </div>
  )
}
