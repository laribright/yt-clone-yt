import { Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { formatCount, formatPublishedDate } from '@/lib/utils';
import { Video } from '../../types/custom_types';

const RelatedVideos = ({ video }: { video: Video }) => {
  return (
    <Link
      href={`/watch/${video?.id}`}
      className='h-32 my-4 flex gap-3 justify-between'
    >
      <div className='flex-1 rounded-2xl overflow-hidden'>
        <Image
          src={video.thumbnail}
          alt={video.title}
          height={300}
          width={300}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex-1'>
        <h4 className='text-sm'>{video.title.substring(0, 50)}</h4>
        <p className='text-xs my-2'>{video.channel.channelTitle}</p>
        <div className='text-xs flex items-center text-background-light'>
          {formatCount(+video.viewCount)} views {<Dot />}{' '}
          {formatPublishedDate(video.publishedDate)}
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideos;
