import EpisodeDetailsCard from "@/components/episode-details-card";
import PodcastLayout from "@/layouts/podcast-layout";
import useEpisode from "@/hooks/useEpisode";
import { useRouter } from "next/router";

export default function PodcastDetails() {
  const router = useRouter()
  const {podcastId, episodeId} = router.query;
  const {isLoading, episode} = useEpisode(podcastId as string, episodeId as string);
  return (
    <PodcastLayout>
      {(isLoading || !episode) && <span>Loading episode...</span>}
      {!isLoading && episode && <EpisodeDetailsCard episode={episode}/>}
    </PodcastLayout>
  )
}
