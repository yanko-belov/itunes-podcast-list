import { FC } from "react";
import { Episode } from "@/types";
interface EpisodeDetailsProps {
  episode: Episode
}

const EpisodeDetailsCard: FC<EpisodeDetailsProps> = ({episode}) => {
  return (
    <div className='bg-white rounded-md shadow-md py-4 px-6'>
      <h1 className='text-xl font-bold mb-4'>
        {episode.trackName}
      </h1>
      <div className='italic'>{episode.description}</div>
      <hr className='my-6' />
      <audio controls className='w-full'>
        <source src={episode.episodeUrl} type={`audio/${episode.episodeFileExtension}`} />
      </audio>
    </div>
  );
}

export default EpisodeDetailsCard;
