export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  viewCount: string;
  channel: {
    channelId: string;
    channelTitle: string;
    channelImage: string;
  };
  publishedDate: string;
};

export type ChannelDetails = {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      title: string;
      description: string;
      customUrl: string;
      publishedAt: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      localized: {
        title: string;
        description: string;
      };
      country: string;
    };
  };
};

export type ChannelVideo = {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
        standard: {
          url: string;
          width: number;
          height: number;
        };
        maxres: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
        kind: string;
        videoId: string;
      };
      videoOwnerChannelTitle: string;
      videoOwnerChannelId: string;
    };
  }>;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

type VideoId = {
  kind: string;
  videoId: string;
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type VideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

type SearchResult = {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: VideoSnippet;
};

export type SearchListResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchResult[];
};
