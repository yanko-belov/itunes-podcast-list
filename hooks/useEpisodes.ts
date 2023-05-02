import useSWR from "swr";
import { Episode } from "@/types";

const useEpisodes = (podcastId: string): { episodes: Episode[], isLoading: boolean } => {
  const {data, isLoading}: {
    data: any,
    isLoading: boolean
  } = useSWR(podcastId ? `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100` : null);

  // data?.results?.splice(0, 1);
  return {
    episodes: data?.results?.filter((result: Episode) => result.kind === "podcast-episode") || [],
    isLoading
  }
}

export default useEpisodes;
