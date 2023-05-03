import { FC } from "react";
import { Podcast } from "@/types";
import Link from "next/link";

interface PodcastDetailsCardProps {
  podcast: Podcast;
}

const PodcastDetailsCard: FC<PodcastDetailsCardProps> = ({ podcast }) => {
  return (
    <div className="flex flex-col rounded-md bg-white px-6 py-4 text-center shadow-md">
      <Link href={`/podcast/${podcast.id.attributes["im:id"]}`}>
        <img
          className="mx-auto h-48 w-48"
          src={podcast["im:image"][2].label}
          alt={podcast["im:name"].label}
        />
      </Link>

      <hr className="my-4" />

      <div className="flex flex-col text-left">
        <Link
          className="text-xl font-bold"
          href={`/podcast/${podcast.id.attributes["im:id"]}`}
        >
          {podcast["im:name"].label}
        </Link>
        <span className="italic">by: {podcast["im:artist"].label}</span>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col text-left">
        <span className="font-bold">Description:</span>
        <span className="italic">{podcast.summary.label}</span>
      </div>
    </div>
  );
};

export default PodcastDetailsCard;
