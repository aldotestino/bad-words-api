import Classifier from '@/components/Classifier';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { redis } from '@/lib/redis';
import { Book } from 'lucide-react';
import Link from 'next/link';

const avatarImages = [
  'https://github.com/shadcn.png',
  'https://github.com/shadcn.png',
  'https://github.com/shadcn.png',
  'https://github.com/shadcn.png',
  'https://github.com/shadcn.png'
];

export default async function Home() {

  const nRequests: number | null = await redis.get('requests');

  return (
    <main className="px-4 sm:container w-full max-w-scren-lg py-40">
      <div className='flex flex-col lg:flex-row lg:items-center gap-20 sm:gap-8'>
        <div className="space-y-4 flex-1">
          <h1 className="text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-black to-slate-600 dark:from-white dark:to-slate-600">Badwords<span>API</span></h1>
          <p className="w-full max-w-prose text-muted-foreground text-lg">The cutting-edge solution for ensuring your content stays clean and respectful. Leveraging the power of BERT (Bidirectional Encoder Representations from Transformers), our API provides highly accurate detection of offensive and inappropriate language in real-time.</p>
          <div className='flex gap-2 items-center'>
            <div className='flex -space-x-4'>
              {avatarImages.map((avatar, index) =>
                <Avatar key={index} className='border-2 border-background'>
                  <AvatarImage src={avatar} alt='avatar' />
                </Avatar>
              )}
            </div>
            <p className='font-lg font-semibold'><span className='text-xl'>{nRequests}+</span>{' '}<span className='text-muted-foreground'>Api requests</span></p>
          </div>
          <Link href="http://localhost:8000/docs" target='_blank' className={buttonVariants()}>
            <Book className='w-4 h-4 mr-2' />
            <span>Read the Docs</span>
          </Link>
        </div>
        <div className='flex-1'>
          <Classifier />
        </div>
      </div>      
    </main>
  );
}
