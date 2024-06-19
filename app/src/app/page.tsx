import Classifier from '@/components/Classifier';
import { buttonVariants } from '@/components/ui/button';
import { Book } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-4 sm:container w-full max-w-scren-lg py-40">
      <div className='flex flex-col lg:flex-row lg:items-center gap-20 sm:gap-8'>
        <div className="space-y-4 flex-1">
          <h1 className="text-4xl font-semibold font-mono">Badwords<span>API</span></h1>
          <p className="w-full max-w-prose text-muted-foreground text-lg">The cutting-edge solution for ensuring your content stays clean and respectful. Leveraging the power of BERT (Bidirectional Encoder Representations from Transformers), our API provides highly accurate detection of offensive and inappropriate language in real-time.</p>
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
