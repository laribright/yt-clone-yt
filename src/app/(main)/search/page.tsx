'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

import { fetchSearchQuery } from '@/lib/api';
import { SearchListResponse } from '../../../../types/custom_types';
import { formatPublishedDate } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Search = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('q');

  if (!searchQuery) {
    throw new Error('Error fetching search query');
  }

  const {
    data: searchResults,
    error,
    isLoading,
  } = useSWR<SearchListResponse>(`fetchVideos/${searchQuery}`, (key: string) =>
    fetchSearchQuery(searchQuery)
  );

  if (error) {
    throw new Error('Error fetching search query');
  }

  return (
    <div className='mt-[-64px] px-3'>
      <h3 className='scroll-m-20 my-5 text-2xl font-semibold tracking-tight'>
        Search Results
      </h3>

      {searchResults?.items.map(item => (
        <Link
          href={`/watch/${item.id.videoId}`}
          key={item.id.videoId}
          className='grid grid-cols-12 gap-8 md:h-72 my-5'
        >
          <div className='col-span-12 md:col-span-4 w-full h-52 md:h-full overflow-hidden'>
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={300}
              height={300}
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
          <div className='col-span-12 md:col-span-8'>
            <h4 className='text-xl font-semibold'>{item.snippet.title}</h4>
            <p className='text-sm dark:text-background-light'>
              {formatPublishedDate(item.snippet.publishedAt)}
            </p>

            <div className='my-6 flex items-center space-x-3'>
              <Avatar className='w-11 h-11'>
                <AvatarImage src='/channel_profile.jpeg' alt='codewithlari' />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>

              <p className='text-sm dark:text-background-light'>
                {item.snippet.channelTitle}
              </p>
            </div>

            <p className='text-sm dark:text-background-light'>
              {item.snippet.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;
