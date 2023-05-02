import { FC } from "react";
import { Podcast } from "@/types";
import Link from "next/link";

interface PodcastDetailsCardProps {
  podcast: Podcast
}

const PodcastDetailsCard: FC<PodcastDetailsCardProps> = ({podcast}) => {
  return (
    <div className='flex flex-col bg-white rounded-md shadow-md py-4 px-6 text-center'>
      <Link href={`/podcast/${podcast.id.attributes["im:id"]}`}>
        <img className='w-48 h-48 mx-auto' src={podcast['im:image'][2].label} alt={podcast['im:name'].label}/>
      </Link>

      <hr className='my-4'/>

      <div className='flex flex-col text-left'>
        <Link className='text-xl font-bold' href={`/podcast/${podcast.id.attributes["im:id"]}`}>
          {podcast['im:name'].label}
        </Link>
        <span className='italic'>by: {podcast['im:artist'].label}</span>
      </div>

      <hr className='my-4'/>

      <div className='flex flex-col text-left'>
        <span className='font-bold'>Description:</span>
        <span className='italic'>{podcast.summary.label}</span>
      </div>
    </div>
  );
}

export default PodcastDetailsCard;
