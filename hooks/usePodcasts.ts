import { Podcast } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createCorsSafeUrl } from "@/helpers/cors";

const getPodcasts = async () => {
  const response = await fetch(
    createCorsSafeUrl(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const usePodcasts = (): { podcasts: Podcast[]; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });

  let podcasts = [];
  try {
    podcasts = JSON.parse(data?.contents || "{}")?.feed?.entry || [];
  } catch (error) {
    console.log(error);
  }
  return {
    podcasts,
    isLoading,
  };
};

export default usePodcasts;
