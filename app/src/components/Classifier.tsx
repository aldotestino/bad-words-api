'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { predict } from '@/server/actions';
import { useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Spinner from '@/components/ui/Spinner';
 
const formSchema = z.object({
  text: z.string().min(1).max(50),
});

type Prediction = {
  prediction: number;
  description: string;
  score: number;
}

function Classifier() {

  const [prediction, setPrediction] = useState<Prediction>();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const predResult = await predict(values.text);
    setLoading(false);
    console.log(predResult);
    setPrediction(predResult);
  }

  return (
    <div className='bg-slate-50 dark:bg-slate-900 border rounded-xl p-4 space-y-4'>
      <div className='flex items-center gap-4'>
        <Badge>POST</Badge>
        <Separator orientation='vertical' className='h-[24px]' />
        <p className='font-mono break-all font-medium truncate min-w-0'>http://localhost:8000/predict</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col sm:flex-row gap-2'>
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input placeholder="Try it out!" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {!loading ? <BrainCircuit className='w-4 h-4 mr-2' /> : <Spinner className='w-4 h-4 mr-2' />}
            <span>Check</span>
          </Button>
        </form>
      </Form>
      <div className='border-2 border-dashed h-40 rounded-xl grid place-items-center'>
        {!prediction ? 
          <p className='font-mono font-medium text-muted-foreground'>Results will appear here</p> : 
          <div className='text-center'>
            <p className='font-mono font-semibold'>{prediction.prediction === 0 ? '🤗' : '🤬'}{' '}{prediction.description}</p>
            <p className='font-semibold'><span className='text-muted-foreground'>Score:</span>{' '}{Math.round(prediction.score * 100).toFixed(2)}%</p>
          </div>
        }  
      </div>
    </div>
  );
}

export default Classifier;