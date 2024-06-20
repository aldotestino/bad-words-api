import FancyDivider from '@/components/FancyDivider';
import Particles from '@/components/magicui/particles';
import { redis } from '@/lib/redis';
import Hero from '@/sections/Hero';
import HowToUse from '@/sections/HowToUse';
import WhyChoose from '@/sections/WhyChoose';


export default async function Home() {

  const nRequests: number | null = await redis.get('requests');

  return (
    <div className="relative flex py-40">
      <main className='z-10 px-4 sm:container w-full max-w-scren-lg'>
        <Hero nRequests={nRequests} />
        <WhyChoose sectionClassName='pt-40' />
        <FancyDivider className='hidden sm:block [--color:#a5b4fc] dark:[--color:#4f46e5]' />
        <HowToUse sectionClassName='pt-40 sm:pt-0' />
      </main>
      <Particles
        className="absolute inset-0 hidden sm:block"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}
