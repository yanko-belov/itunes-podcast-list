import { Podcast } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getPodcasts = async () => {
  const response = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

const usePodcasts = (): { podcasts: Podcast[], isLoading: boolean } => {
  const {data, isLoading} = useQuery({
    queryKey: ['podcasts'],
    queryFn: getPodcasts,
  });

  return {
    podcasts: data?.feed?.entry || [],
    isLoading
  }
}

export default usePodcasts;
