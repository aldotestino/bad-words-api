import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { Sparkle } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

function Header() {
  return (
    <div className='border-b py-4 fixed top-0 w-full bg-background/60 backdrop-blur-lg'>
      <div className='px-4 sm:container flex items-center justify-between'>
        <Link href="/" className='font-mono text-xl font-semibold'>🤬BadwordsAPI</Link>
        <div className='flex items-center gap-2'>
          <Link href="https://github.com/aldotestino/bad_words_api" target='_blank' className={buttonVariants({ variant: 'outline', size: 'sm' })}>
            <Sparkle className='w-4 h-4 mr-2 text-yellow-500' />
            <span>GitHub</span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;