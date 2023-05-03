import { Episode } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createCorsSafeUrl } from "@/helpers/cors";

const getEpisodes = async (podcastId: string) => {
  const response = await fetch(
    createCorsSafeUrl(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    )
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

  let episodes = [];
  try {
    episodes =
      JSON.parse(data?.contents || "{}")?.results?.filter(
        (result: Episode) => result.kind === "podcast-episode"
      ) || [];
  } catch (error) {
    console.log(error);
  }
  return {
    episodes,
    isLoading,
  };
};

export default useEpisodes;
