import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
      <section className='header w-full flex items-center justify-around my-4'>
          <div className="ImageLogo text-textColor font-bold flex items-end justify-center text-5xl">
              <Image src={'/logo-Rockai.png'} width={50} height={50} alt='Logo Rock Simulator' />
              <h1 className='ml-2'>Rockai<span className='font-light text-3xl text-white'>Dev</span></h1>
          </div>
          <div className="nav w-auto">
              <ul className='flex items-center justify-center textwi w-auto'>
                  <li><Link className='py-1 px-6 text-lg border-textColor border-2 duration-500 font-semibold bg-white text-bgColor mx-1 rounded-2xl' href={'/aboutus'}>About Us</Link></li>
                  <li><Link className='py-1 px-6 text-lg border-textColor border-2 duration-500 font-semibold bg-white text-bgColor mx-1 rounded-2xl' href={'/vision'}>Vision</Link></li>
                  <li><Link className='py-1 px-6 text-lg border-textColor border-2 duration-500 font-semibold bg-white text-bgColor mx-1 rounded-2xl' href={'/target'}>Target</Link></li>
                  <li><Link className='py-1 px-6 text-lg border-textColor border-2 duration-500 font-semibold bg-white text-bgColor mx-1 rounded-2xl' href={'/contact'}>Contact</Link></li>
              </ul>
          </div>
    </section>
  )
}
