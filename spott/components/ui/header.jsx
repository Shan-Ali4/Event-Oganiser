import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
            {/* Logo */}
            <Link href={'/'} className='flex items-center'>
            <Image
            src="/spott.png"
            alt="SPOTT Logo"
            width={500}
            height={500}
            className="w-full h-11"
            priority
            />
            {/* Pro Badge */}
            </Link>

            {/* Search & Location -  Desktop Only */}
            {/* Right Side Action */}
        </div>

        {/* Mobile Search & Location - Below Header */}
    </nav>

    {/* Models */}
    </>
  )
}

export default Header
