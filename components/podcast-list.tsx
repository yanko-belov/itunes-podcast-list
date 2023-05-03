import { FC, useMemo, useState } from "react";
import { Podcast } from "@/types";
import PodcastListItem from "@/components/podcast-list-item";
import Link from "next/link";

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList: FC<PodcastListProps> = ({ podcasts }) => {
  const [filter, setFilter] = useState("");

  const filteredPodcasts = useMemo(
    () =>
      podcasts.filter(
        (podcast) =>
          podcast.title.label.toLowerCase().includes(filter.toLowerCase()) ||
          podcast["im:artist"].label
            .toLowerCase()
            .includes(filter.toLowerCase())
      ),
    [podcasts, filter]
  );

  return (
    <>
      <div className="mb-8 flex flex-row items-center justify-end gap-2">
        <span className="h-7 whitespace-nowrap rounded-md bg-blue-700 px-2 py-1 text-sm text-white">
          {filteredPodcasts.length}
        </span>
        <input
          type="text"
          className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Filter podcasts..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-14">
        {filteredPodcasts.map((podcast) => (
          <Link
            key={podcast.id.attributes["im:id"]}
            href={`/podcast/${podcast.id.attributes["im:id"]}`}
          >
            <PodcastListItem podcast={podcast} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PodcastList;
