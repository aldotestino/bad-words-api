'use server';

import { redis } from '@/lib/redis';

export async function predict(text: string) {
  const res = await fetch('http://localhost:8000/api/v1/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  redis.incr('requests');
  return await res.json();
}