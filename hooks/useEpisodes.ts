import { Episode } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getEpisodes = async (podcastId: string) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useEpisodes = (
  podcastId: string
): { episodes: Episode[]; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ["episodes", podcastId],
    enabled: !!podcastId,
    queryFn: () => getEpisodes(podcastId),
  });

  return {
    episodes:
      data?.results?.filter(
        (result: Episode) => result.kind === "podcast-episode"
      ) || [],
    isLoading,
  };
};

export default useEpisodes;
