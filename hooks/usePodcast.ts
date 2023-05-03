import { Podcast } from "@/types";
import usePodcasts from "@/hooks/usePodcasts";

const usePodcast = (
  id: string
): { podcast: Podcast | undefined; isLoading: boolean } => {
  const { podcasts, isLoading } = usePodcasts();

  const podcast = podcasts.find(
    (podcast) => podcast.id.attributes["im:id"] === id
  );

  return {
    podcast,
    isLoading,
  };
};

export default usePodcast;
