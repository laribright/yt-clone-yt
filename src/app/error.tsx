'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='grid place-content-center w-screen h-screen'>
      <p className='font-semibold text-2xl mb-3'>{error.message}</p>
      <Button
        onClick={() => reset()}
        variant='destructive'
        className='w-fit mx-auto'
      >
        Try Again
      </Button>
    </div>
  );
}
