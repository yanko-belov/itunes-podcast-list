import { FC } from "react";
import { Episode } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

interface EpisodeTableProps {
  episodes: Episode[]
}

const EpisodeTable: FC<EpisodeTableProps> = ({episodes}) => {
  const router = useRouter()
  const {podcastId} = router.query;
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  const formatTime = (trackTimeMillis: number) => {
    return new Date(trackTimeMillis || 0).toISOString().slice(11, 19);
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase">
      <tr>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Duration
        </th>
      </tr>
      </thead>
      <tbody>
      {episodes.map((episode, index) => (
        <tr key={episode.episodeGuid} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900">
            <Link className='text-blue-400 hover:text-blue-500'
                  href={`/podcast/${podcastId}/episode/${episode.episodeGuid}`}>
              {episode.trackName}
            </Link>
          </th>
          <td className="px-6 py-4">
            {formatDate(episode.releaseDate)}
          </td>
          <td className="px-6 py-4">
            {formatTime(episode.trackTimeMillis)}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default EpisodeTable;
