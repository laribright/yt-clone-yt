import { FileVideo, Home, MonitorPlay, PlusCircle } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const FooterMenu = () => {
  return (
    <footer className='bg-white dark:bg-black md:hidden text-[8px] h-14 fixed w-full flex items-center justify-around bottom-0 left-0 z-20'>
      <div className='flex flex-col items-center'>
        <Home />
        <span>Home</span>
      </div>

      <div className='flex flex-col items-center'>
        <FileVideo />
        <span>Shorts</span>
      </div>

      <PlusCircle />

      <div className='flex flex-col items-center'>
        <MonitorPlay />
        <span>Subscriptions</span>
      </div>

      <Link href={`/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}`} className='flex flex-col items-center'>
        <Avatar className='w-6 h-6'>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <span>You</span>
      </Link>
    </footer>
  );
};

export default FooterMenu;
