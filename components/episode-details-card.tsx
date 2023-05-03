import { FC } from "react";
import { Episode } from "@/types";
interface EpisodeDetailsProps {
  episode: Episode;
}

const EpisodeDetailsCard: FC<EpisodeDetailsProps> = ({ episode }) => {
  return (
    <div className="rounded-md bg-white px-6 py-4 shadow-md">
      <h1 className="mb-4 text-xl font-bold">{episode.trackName}</h1>
      <div className="italic">{episode.description}</div>
      <hr className="my-6" />
      <audio controls className="w-full">
        <source
          src={episode.episodeUrl}
          type={`audio/${episode.episodeFileExtension}`}
        />
      </audio>
    </div>
  );
};

export default EpisodeDetailsCard;
