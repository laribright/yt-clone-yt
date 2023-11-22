import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

const Loading = () => {
  return (
    <div className='mb-9'>
      <div className='px-4 h-[80vh] mt-14'>
        <div className='w-full h-[60vh] md:w-full md:h-[80vh] overflow-hidden rounded-2xl bg-slate-300'>
          <Skeleton className='w-full h-full object-cover hover:scale-110 transition-all duration-700' />
        </div>
      </div>

      <div className='p-2 md:p-4 grid grid-cols-12 gap-7'>
        <div className='md:col-span-8 col-span-12'>
          <div>
            <h3 className='text-xl font-semibold'>
              <Skeleton className='h-6 w-[80%]' />
            </h3>
            <div className='flex justify-between my-3'>
              <div className='flex space-x-3'>
                <Avatar>
                  <AvatarFallback>
                    <Skeleton className='h-12 w-12 rounded-full' />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='text-gray-600 dark:text-white'>
                    <Skeleton className='h-4 w-[60%]' />
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    <Skeleton className='h-4 w-[40%]' />
                  </p>
                </div>
              </div>
              <div className='flex space-x-4 text-sm items-center bg-gray-600 text-white px-2 md:px-5 rounded-3xl'>
                <button className='flex items-center space-x-2 hover:text-blue-500'>
                  <ThumbsUp className='w-4' />
                  <span className='text-[9px]'>
                    <Skeleton className='h-4 w-12' />
                  </span>
                </button>
                <span>|</span>
                <button className='flex items-center hover:text-red-500'>
                  <ThumbsDown className='w-4' />
                </button>
              </div>
            </div>
          </div>

          <div className='p-3 bg-gray-600 text-white rounded-md my-4'>
            <p className='leading-8'>
              <Skeleton className='h-4 w-[90%]' />
            </p>
          </div>
        </div>
        <div className='md:col-span-4 col-span-12'>
          {[1, 2, 3, 4, 5].map(index => (
            <div key={index} className='mb-4'>
              <Skeleton className='w-full h-[20vh]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
