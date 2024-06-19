import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { Sparkle, Star } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

function Header() {
  return (
    <header className='z-10 border-b py-4 fixed top-0 w-full bg-background/60 backdrop-blur-lg'>
      <div className='px-4 sm:container max-w-scren-lg flex items-center justify-between'>
        <Link href="/" className='font-mono text-xl font-semibold'>🤬BadwordsAPI</Link>
        <div className='flex items-center gap-2'>
          <Link href="https://github.com/aldotestino/bad-words-api" target='_blank' className={buttonVariants({ variant: 'outline', size: 'sm' })}>
            <Star className='w-4 h-4 mr-2 text-yellow-500' />
            <span>GitHub</span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;