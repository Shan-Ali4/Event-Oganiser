"use client";

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignInButton, SignUpButton, UserButton, Show } from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from 'react-spinners';
import { useStoreUser } from '@/hooks/use-store-user';


const Header = () => {

    const { isLoading } = useStoreUser();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
                <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                    {/* Logo */}
                    <Link href={'/'} className='flex items-center'>
                        <Image
                            src="/spott.png"
                            alt="Spott logo"
                            width={500}
                            height={500}
                            className="w-full h-11"
                            priority
                        />
                        {/* Pro Badge */}
                    </Link>

                    {/* Search & Location -  Desktop Only */}
                    {/* Right Side Action */}
                    <div className='flex items-center'>
                        <Unauthenticated>
                            <SignInButton mode="modal">
                                <Button size="sm">Sign In</Button>
                            </SignInButton>
                        </Unauthenticated>
                        <Authenticated>
                            <UserButton />
                        </Authenticated>
                    </div>
                </div>

                {/* Mobile Search & Location - Below Header */}

                {/* Loader */}
                {isLoading && <div className='absolute bottom-0 left-0 w-full'>
                    <BarLoader width="100%" color= "purple"/>
                </div>}
            </nav>

            {/* Models */}
        </>
    )
}

export default Header
