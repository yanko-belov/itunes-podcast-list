import useSWR from "swr";
import { Podcast } from "@/types";

const usePodcasts = (): { podcasts: Podcast[], isLoading: boolean } => {
  const {data, isLoading}: {
    data: any,
    isLoading: boolean
  } = useSWR(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);

  return {
    podcasts: data?.feed?.entry || [],
    isLoading
  }
}

export default usePodcasts;
