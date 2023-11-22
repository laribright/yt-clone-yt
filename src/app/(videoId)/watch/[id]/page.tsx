'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import ReactPlayer from 'react-player';
import { useState } from 'react';

import { fetchVideoDetails, fetchVideos } from '@/lib/api';
import Loading from '../../loading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatCount } from '@/lib/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import RelatedVideos from '@/components/RelatedVideos';

const VideoDetails = () => {
  const { id } = useParams();

  const [substringCount, setSubstringCount] = useState<undefined | number>(200);

  const {
    data: videoDetails,
    isLoading: loadingVideoDetails,
    error: errorVideoDetails,
  } = useSWR(`/videoDetails/${id}`, () => fetchVideoDetails(id as string), {
    revalidateOnFocus: false,
  });

  const {
    data: relatedVideos,
    isLoading: loadingRelatedVideos,
    error: errorRelatedVideos,
  } = useSWR('/relatedVideos', () => fetchVideos('all', 5), {
    revalidateOnFocus: false,
  });

  if (errorVideoDetails || errorRelatedVideos) {
    throw new Error('Error fetching video data');
  }

  if (loadingVideoDetails || loadingRelatedVideos) return <Loading />;

  return (
    <div className='mb-9'>
      <div className='px-4 h-[80vh] mt-14'>
        <ReactPlayer url={videoDetails?.videoUrl} width='100%' height='100%' />
      </div>

      <div className='p-2 md:p-4 grid grid-cols-12 gap-7'>
        <div className='md:col-span-8 col-span-12'>
          <div>
            <h3 className='text-xl font-semibold'>{videoDetails?.title}</h3>
            <div className='flex justify-between my-3'>
              <div className='space-x-3 flex'>
                <Avatar>
                  <AvatarImage
                    src={videoDetails?.channelImage}
                    alt={videoDetails?.title}
                  />
                  <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='text-gray-400 text-sm'>
                    {videoDetails?.channelName}
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    {formatCount(+videoDetails!.subscribersCount)} subscribers
                  </p>
                </div>
              </div>
              <div className='flex space-x-4 text-sm items-center bg-gray-600 text-white px-2 md:px-5 rounded-3xl'>
                <button className='flex items-center space-x-2 hover:text-blue-500'>
                  <ThumbsUp className='w-4' />
                  <span className='text-[9px]'>
                    {formatCount(videoDetails?.likes)}
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
              {videoDetails?.description.substring(0, substringCount)}{' '}
              <span
                onClick={
                  substringCount === 200
                    ? () => setSubstringCount(undefined)
                    : () => setSubstringCount(200)
                }
                className='font-medium cursor-pointer text-sm underline text-blue-400'
              >
                {substringCount === 200 ? 'load more' : 'load less'}
              </span>
            </p>
          </div>
        </div>

        <aside className='md:col-span-4 col-span-12'>
          {relatedVideos?.map(video => (
            <RelatedVideos key={video.id} video={video} />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default VideoDetails;
