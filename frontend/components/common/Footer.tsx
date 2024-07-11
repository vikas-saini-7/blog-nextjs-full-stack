import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitch, IconBrandTwitter, IconCopyright } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto flex items-center justify-between p-12'>
        <div>
          <h1  style={{ letterSpacing: '1px' }} className='-mb-2 font-medium text-4xl font-primary uppercase'>Vikas Saini blog</h1>
          <p className='uppercase text-xs'>Design | Tech | Marketing</p>
        </div>
        <div className='grid grid-cols-2 gap-2 gap-x-8'>
          <Link href={'#'}>page</Link>
          <Link href={'#'}>page</Link>
          <Link href={'#'}>page</Link>
          <Link href={'#'}>page</Link>
        </div>
        <div className='flex gap-4'>
          <IconBrandLinkedin size={32}/>
          <IconBrandTwitter size={32}/>
          <IconBrandGithub size={32}/>
        </div>
      </div>
      <div className='border-t border-gray-500 flex items-center justify-between p-4'>
        <p className='text-xs uppercase flex items-center gap-1 container mx-auto'><IconCopyright size={16}/> vikas saini blog 2024</p>
      </div>
    </div>
  )
}

export default Footer