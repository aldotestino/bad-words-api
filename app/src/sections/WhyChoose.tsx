import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { whyChoose } from '@/lib/data';
import { cn } from '@/lib/utils';

function WhyChooseCard({ item }: {item: typeof whyChoose[0]}) {
  return (
    <Card className='transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md'>
      <CardHeader>
        <div className='bg-primary text-primary-foreground w-fit p-3 rounded-md mb-2'>
          {item.icon}
        </div>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{item.description}</p>
      </CardContent>
    </Card>
  );
}

function WhyChoose({
  sectionClassName
}: {
  sectionClassName?: string
}) {
  return (
    <section className={cn('space-y-8', sectionClassName)}>
      <h2 className='text-3xl sm:text-4xl font-bold text-center font-mono'>Why choose our API?</h2>
      <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-12'>
        {whyChoose.map((item, index) => 
          <WhyChooseCard key={index} item={item} />
        )}
      </div>
    </section>
  );
}

export default WhyChoose;