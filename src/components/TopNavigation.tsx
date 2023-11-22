'use client';

import { Bell, Menu, Search, Video, Youtube } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useContext, useRef, useState } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AppContext from '@/context/appContext';

const TopNavigation = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const router = useRouter();

  const { setShowNav } = useContext(AppContext);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchInputRef.current) {
      const searchQuery = searchInputRef.current.value;

      setDialogOpen(false);
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className='fixed top-0 left-0 w-screen z-20 dark:bg-black bg-white'>
      <div className='flex justify-between items-center px-2 md:px-7 h-16'>
        <div className='flex items-center'>
          <span className='hover:bg-background-dark/30 md:block hidden hover:text-white cursor-pointer rounded-full p-2 mr-1'>
            <Menu
              onClick={() => setShowNav(prevState => !prevState)}
              size={30}
            />
          </span>
          <Link href='/' className='flex items-center space-x-2'>
            <Youtube size={48} className='text-red-700' />
            <span className='hidden md:block text-2xl font-bold'>YouTube</span>
          </Link>
        </div>

        <div className='md:flex items-center justify-center hidden'>
          <form
            onSubmit={handleSubmit}
            className='flex items-center h-10 mx-auto'
          >
            <input
              type='search'
              placeholder='Search'
              ref={searchInputRef}
              className='px-4 h-full md:w-48 lg:w-96 border dark:border-gray-50 border-gray-300 rounded-l-full focus:outline-none'
            />
            <div className='h-full px-5 grid place-content-center bg-background-light text-black rounded-r-full'>
              <Search />
            </div>
          </form>
        </div>

        <div className='flex items-center space-x-7'>
          <div className='md:hidden'>
            <ThemeToggle />
          </div>
          <Video />
          <Bell />
          <div className='md:hidden'>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger>
                <Search onClick={() => setDialogOpen(true)} />
              </DialogTrigger>

              <DialogContent>
                <form
                  onSubmit={handleSubmit}
                  className='flex items-center h-10 mx-auto'
                >
                  <input
                    type='search'
                    placeholder='Search'
                    ref={searchInputRef}
                    className='px-4 h-full md:w-48 lg:w-96 border dark:border-gray-50 border-gray-300 rounded-l-full focus:outline-none'
                  />
                  <div className='h-full px-5 grid place-content-center bg-background-light text-black rounded-r-full'>
                    <Search />
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className='hidden md:block'>
            <DropdownMenu>
              <DropdownMenuTrigger className='focus:outline-none'>
                <Avatar>
                  <AvatarImage src='channel_profile.jpeg' alt='codewithlari' />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-72'>
                <DropdownMenuLabel>
                  <div className='flex space-x-4'>
                    <Avatar>
                      <AvatarImage
                        src='/channel_profile.jpeg'
                        alt='codewithlari'
                      />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>

                    <div className='flex flex-col space-y-3 text-base'>
                      <span>
                        <p>code with lari</p>
                        <p>@codewithlari</p>
                      </span>
                      <Link
                        href={`/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}`}
                        className='text-blue-500'
                      >
                        View your channel
                      </Link>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className='p-2 flex items-center'>
                  <span className='mr-2'> Appearance: </span> <ThemeToggle />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
