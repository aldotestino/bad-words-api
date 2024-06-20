import Code from '@/components/Code';
import { cn } from '@/lib/utils';
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs';
import { codes } from '@/lib/data';

function HowToUse({
  sectionClassName
}: {
  sectionClassName?: string
}) {
  return (
    <section className={cn('space-y-8', sectionClassName)}>
      <h2 className='text-3xl sm:text-4xl font-bold text-center font-mono'>How to use?</h2>
      <div className='flex items-center justify-center'>
        <Tabs defaultValue='javascript' className='overflow-x-hidden'>
          <TabsList>
            {Object.entries(codes).map(([key, { label, icon }]) => (
              <TabsTrigger key={key} value={key}>
                <div className='flex gap-2 items-center'>
                  {icon}
                  <span>{label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(codes).map(([key, { codeBlock }]) => (
            <TabsContent key={key} value={key}>
              <Code codeBlock={codeBlock} language={key} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default HowToUse;