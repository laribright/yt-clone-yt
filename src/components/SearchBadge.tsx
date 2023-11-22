'use client';

import { Dispatch, SetStateAction } from 'react';

import { Badge } from '@/components/ui/badge';

export function SearchBadge({
  badges,
  setBadge,
  currentBadge,
}: {
  badges: string[];
  setBadge: Dispatch<SetStateAction<string>>;
  currentBadge: string;
}) {
  return badges.map(badge => (
    <Badge
      key={badge}
      onClick={() => setBadge(badge)}
      className={`mr-4 mt-2 mb-3 rounded-lg bg-background-light text-black dark:bg-background-dark dark:text-white hover:text-white cursor-pointer ${
        badge === currentBadge ? 'bg-background-dark text-white' : ''
      }`}
    >
      {badge}
    </Badge>
  ));
}
