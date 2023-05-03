import EpisodeTable from "@/components/episode-table";
import PodcastLayout from "@/layouts/podcast-layout";
import useEpisodes from "@/hooks/useEpisodes";
import { useRouter } from "next/router";

export default function PodcastDetails() {
  const router = useRouter();
  const { podcastId } = router.query;
  const { episodes, isLoading } = useEpisodes(podcastId as string);

  return (
    <PodcastLayout>
      {isLoading && <span>Loading episodes...</span>}
      {!isLoading && (
        <>
          <div className="rounded-md bg-white px-6 py-4 shadow-md">
            <span className="text-3xl font-bold">
              Episodes: {episodes.length}
            </span>
          </div>
          <div className="rounded-md bg-white px-6 py-4 shadow-md">
            <EpisodeTable episodes={episodes} />
          </div>
        </>
      )}
    </PodcastLayout>
  );
}
