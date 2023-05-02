import { Episode } from "@/types";
import useEpisodes from "@/hooks/useEpisodes";

const useEpisode = (podcastId: string, episodeGuid: string): { episode: Episode | undefined, isLoading: boolean } => {
  const {episodes, isLoading} = useEpisodes(podcastId);

  const episode = episodes.find(episode => episode.episodeGuid === episodeGuid)

  return {
    episode,
    isLoading
  }
}

export default useEpisode;
