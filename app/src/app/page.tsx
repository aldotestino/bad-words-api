import Particles from '@/components/magicui/particles';
import { redis } from '@/lib/redis';
import Hero from '@/sections/Hero';
import WhyChoose from '@/sections/WhyChoose';


export default async function Home() {

  const nRequests: number | null = await redis.get('requests');

  return (
    <div className="relative flex py-40">
      <main className='z-10 px-4 sm:container w-full max-w-scren-lg space-y-40'>
        <Hero nRequests={nRequests} />
        <WhyChoose />
      </main>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}
