import { FC, useMemo, useState } from "react";
import { Podcast } from "@/types";
import PodcastListItem from "@/components/podcast-list-item";
import Link from "next/link";

interface PodcastListProps {
  podcasts: Podcast[]
}

const PodcastList: FC<PodcastListProps> = ({podcasts}) => {
  const [filter, setFilter] = useState('');

  const filteredPodcasts = useMemo(() => podcasts.filter(podcast =>
    podcast.title.label.toLowerCase().includes(filter.toLowerCase())
    || podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
  ), [podcasts, filter]);

  return (
    <>
      <div className='flex flex-row justify-end items-center gap-2 mb-8'>
        <span
          className='whitespace-nowrap bg-blue-700 px-2 py-1 text-sm text-white rounded-md h-7'>{filteredPodcasts.length}</span>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-96"
               placeholder="Filter podcasts..." value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </div>
      <div className='grid gap-y-14 gap-x-6 grid-cols-4'>
        {filteredPodcasts.map(podcast =>
          <Link key={podcast.id.attributes["im:id"]} href={`/podcast/${podcast.id.attributes["im:id"]}`}>
            <PodcastListItem podcast={podcast}/>
          </Link>
        )}
      </div>
    </>
  );
}

export default PodcastList;
