
import Code from '@/components/Code';
import { cn } from '@/lib/utils';


const codeBlock = `const res = await fetch('http://localhost:8000/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ text: "Hello, World!" }),
});`;

function HowToUse({
  sectionClassName
}: {
  sectionClassName?: string
}) {
  return (
    <section className={cn('space-y-8', sectionClassName)}>
      <h2 className='text-3xl sm:text-4xl font-bold text-center font-mono'>How to use?</h2>
      <div className='flex items-center justify-center'>
        <Code codeBlock={codeBlock} />
      </div>
    </section>
  );
}

export default HowToUse;