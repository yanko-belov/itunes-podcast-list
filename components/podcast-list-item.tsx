import { FC } from "react";
import { Podcast } from "@/types";

interface PodcastListItemProps {
  podcast: Podcast;
}

const PodcastListItem: FC<PodcastListItemProps> = ({ podcast }) => {
  return (
    <div className="relative pt-12">
      <div className="relative flex cursor-pointer flex-col rounded-md bg-white p-4 pt-20 text-center shadow-md">
        <img
          className="absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 transform rounded-full"
          src={podcast["im:image"][2].label}
          alt={podcast["im:name"].label}
        />
        <div>{podcast["im:name"].label}</div>
        <div className="flex-grow">Author: {podcast["im:artist"].label}</div>
        <div className="flex-grow">id: {podcast.id.attributes["im:id"]}</div>
      </div>
    </div>
  );
};

export default PodcastListItem;
