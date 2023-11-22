'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import { Dot } from 'lucide-react';

import { fetchChannel, fetchChannelVideos } from '@/lib/api';
import {
  ChannelDetails,
  ChannelVideo,
} from '../../../../../types/custom_types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Loading from '@/app/loading';
import Thumbnail from '@/components/Thumbnail';

const ChannelId = () => {
  const { id } = useParams();

  const {
    data: channelDetails,
    error: channelDetailsError,
    isLoading: loadingChannelDetails,
  } = useSWR<ChannelDetails['items']>(id ? `channelDetails/${id}` : null, () =>
    fetchChannel(id as string)
  );

  const {
    data: channelVideos,
    error: channelVideosError,
    isLoading: loadingChannelVideos,
  } = useSWR<ChannelVideo['items']>(id ? `channelVideos/${id}` : null, () =>
    fetchChannelVideos(id as string)
  );

  if (channelDetailsError || channelVideosError)
    throw new Error('Error fetching channel data');

  return (
    <div className='mt-[-64px]'>
      <div className='h-64 w-full mb-10 md:rounded-2xl rounded-none overflow-hidden'>
        {channelDetails && (
          <Image
            src={channelDetails?.snippet.thumbnails.high.url}
            alt={channelDetails.snippet.title}
            className='object-cover w-full h-full'
            width={600}
            height={300}
            priority
          />
        )}
      </div>

      <div className='mb-10 flex flex-col md:flex-row items-center space-x-5 px-3'>
        <Avatar className='w-28 h-28'>
          <AvatarImage
            src={channelDetails?.snippet.thumbnails.high.url}
            alt={channelDetails?.snippet.title}
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div>
          <h2 className='font-bold text-center md:text-left text-3xl md:text-5xl mb-2 mt-4 md:mt-0'>
            {channelDetails?.snippet.title}
          </h2>
          <p className='flex items-center text-sm'>
            {channelDetails?.snippet.customUrl} <Dot /> 1.6 subscribers <Dot />{' '}
            10 videos
          </p>
        </div>
      </div>

      <div className='flex flex-wrap'>
        {loadingChannelDetails ||
          (loadingChannelVideos &&
            Array(10)
              .fill(null)
              .map((i, idx) => <Loading key={idx} />))}

        {channelVideos?.map(video => (
          <Thumbnail
            key={video.id}
            video={{
              id: video.snippet.resourceId.videoId,
              title: video.snippet.title,
              description: video.snippet.description,
              thumbnail: video.snippet.thumbnails.high.url,
              viewCount: '1000',
              publishedDate: video.snippet.publishedAt,
              channel: {
                channelId: video.snippet.channelId,
                channelTitle: video.snippet.channelTitle,
                channelImage: '',
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelId;
