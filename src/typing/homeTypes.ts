export type THomeProps = {
  restEpisodes: TEpisodes[];
  latestEpisodes: TEpisodes[];
};

export type TEpisodes = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  publishedAt: string;
  durationFormatted: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  };
};

export type TPodcastItem = {
  ep: TEpisodes;
};
