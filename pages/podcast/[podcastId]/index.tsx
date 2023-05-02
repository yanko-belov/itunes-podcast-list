import EpisodeTable from "@/components/episode-table";
import PodcastLayout from "@/layouts/podcast-layout";
import useEpisodes from "@/hooks/useEpisodes";
import { useRouter } from "next/router";

export default function PodcastDetails() {
  const router = useRouter()
  const {podcastId} = router.query;
  const {episodes, isLoading} = useEpisodes(podcastId as string);

  return (
    <PodcastLayout>
      {isLoading && <span>Loading episodes...</span>}
      {!isLoading && (<>
        <div className='bg-white rounded-md shadow-md py-4 px-6'>
          <span className='text-3xl font-bold'>Episodes: {episodes.length}</span>
        </div>
        <div className='bg-white rounded-md shadow-md py-4 px-6'>
          <EpisodeTable episodes={episodes}/>
        </div>
      </>)}
    </PodcastLayout>
  )
}
