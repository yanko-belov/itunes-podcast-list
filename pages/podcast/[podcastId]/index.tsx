import episodesData from '@/podcast.json'
import { Episode } from "@/types";
import EpisodeTable from "@/components/episode-table";
import PodcastLayout from "@/layouts/podcast-layout";

export default function PodcastDetails() {
  const episodes = episodesData.results as Episode[];
  return (
    <PodcastLayout>
      <div className='bg-white rounded-md shadow-md py-4 px-6'>
        <span className='text-3xl font-bold'>Episodes: {episodes.length}</span>
      </div>
      <div className='bg-white rounded-md shadow-md py-4 px-6'>
        <EpisodeTable episodes={episodes} />
      </div>
    </PodcastLayout>
  )
}
