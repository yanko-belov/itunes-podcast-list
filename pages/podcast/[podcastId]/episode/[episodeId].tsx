import episodeData from '@/podcast.json'
import { Episode } from "@/types";
import EpisodeDetailsCard from "@/components/episode-details-card";
import PodcastLayout from "@/layouts/podcast-layout";

export default function PodcastDetails() {
  const episode = episodeData.results[1] as Episode;
  return (
    <PodcastLayout>
      <EpisodeDetailsCard episode={episode} />
    </PodcastLayout>
  )
}
