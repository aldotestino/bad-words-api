import Classifier from '@/components/Classifier';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { avatarImages, whyChoose } from '@/lib/data';
import { redis } from '@/lib/redis';
import { Book } from 'lucide-react';
import Link from 'next/link';


export default async function Home() {

  const nRequests: number | null = await redis.get('requests');

  return (
    <main className="px-4 sm:container w-full max-w-scren-lg py-40 space-y-40">
      <section className='flex flex-col lg:flex-row lg:items-center gap-20 sm:gap-8'>
        <div className="space-y-4 flex-1">
          <h1 className="text-5xl sm:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-black to-slate-600 dark:from-white dark:to-slate-600">BadwordsAPI</h1>
          <p className="w-full max-w-prose text-muted-foreground text-lg font-medium">The cutting-edge solution for ensuring your content stays clean and respectful. Leveraging the power of BERT (Bidirectional Encoder Representations from Transformers), our API provides highly accurate detection of offensive and inappropriate language in real-time.</p>
          <div className='flex gap-2 items-center'>
            <div className='flex -space-x-4'>
              {avatarImages.map((avatar, index) =>
                <Avatar key={index} className='border-2 border-background'>
                  <AvatarImage src={avatar} alt='avatar' />
                </Avatar>
              )}
            </div>
            <div className='space-x-1'>
              <span className='text-2xl font-semibold'>{nRequests}+</span>
              <span className='text-muted-foreground text-lg font-medium'>Api requests</span>
            </div>
          </div>
          <Link href="http://localhost:8000/docs" target='_blank' className={buttonVariants()}>
            <Book className='w-4 h-4 mr-2' />
            <span>Read the Docs</span>
          </Link>
        </div>
        <div className='flex-1'>
          <Classifier />
        </div>
      </section>
      <div className='space-y-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center font-mono'>Why choose our API?</h2>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-12'>
          {whyChoose.map((item, index) => 
            <Card key={index} className='transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md'>
              <CardHeader>
                <div className='bg-muted w-fit p-3 rounded-md mb-2'>
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{item.description}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
