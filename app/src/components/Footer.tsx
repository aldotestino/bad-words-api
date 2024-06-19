import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-10">
      <div className='px-4 sm:container  w-full max-w-scren-lg flex items-center justify-between'>
        <p>&copy; {(new Date()).getFullYear()} BadwordsAPI</p>
        <p>Made with <Heart className='inline w-4 h-4' /> by <Link href="https://github.com/aldotestino" className='hover:underline text-primary'>aldotestino</Link></p>
      </div>
    </footer>
  );
}

export default Footer;