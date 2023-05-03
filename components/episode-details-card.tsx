import { FC } from "react";
import { Episode } from "@/types";
import sanitizeHtml from "sanitize-html";

interface EpisodeDetailsProps {
  episode: Episode;
}

const EpisodeDetailsCard: FC<EpisodeDetailsProps> = ({ episode }) => {
  const defaultOptions = {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
  };

  const sanitize = (dirty: string) => ({
    __html: sanitizeHtml(dirty, { ...defaultOptions }),
  });

  return (
    <div className="rounded-md bg-white px-6 py-4 shadow-md">
      <h1 className="mb-4 text-xl font-bold">{episode.trackName}</h1>
      <div
        className="italic"
        dangerouslySetInnerHTML={sanitize(episode.description)}
      />
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
