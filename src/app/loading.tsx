import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='m-5'>
      <div className='w-[320px] mx-auto md:w-[350px] my-4'>
        <div className='h-52 w-full overflow-hidden rounded-2xl bg-slate-300'>
          <Skeleton className='w-full h-full object-cover hover:scale-110 transition-all duration-700' />
        </div>
        <div className='flex space-x-2 py-3'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='flex flex-col'>
            <Skeleton className='h-4 w-[250px] mb-2' />
            <Skeleton className='h-4 w-[200px] mb-2' />
            <div className='flex text-sm dark:text-background-light text-background-dark'>
              <Skeleton className='h-4 w-[100px] mb-2' />
              <Skeleton className='h-4 w-[80px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
