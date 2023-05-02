import { FC } from "react";
import { Podcast } from "@/types";

interface PodcastListItemProps {
  podcast: Podcast
}

const PodcastListItem: FC<PodcastListItemProps> = ({podcast}) => {
  return (
    <div className='relative pt-12'>
      <div className='cursor-pointer flex flex-col bg-white rounded-md shadow-md p-4 text-center pt-20 relative'>
        <img className='w-28 h-28 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2' src={podcast['im:image'][2].label} alt={podcast['im:name'].label}/>
        <div>

          {podcast['im:name'].label}
        </div>
        <div className='flex-grow'>
          Author: {podcast['im:artist'].label}
        </div>
        <div className='flex-grow'>
          id: {podcast.id.attributes["im:id"]}
        </div>
      </div>
    </div>
  );
}

export default PodcastListItem;
