import { FC, ReactNode } from "react";
import PodcastDetailsCard from "@/components/podcast-details-card";
import Layout from "@/layouts/layout";
import list from "@/list.json";
import { Podcast } from "@/types";

interface PodcastLayoutProps {
  children: ReactNode;
}

const PodcastLayout: FC<PodcastLayoutProps> = ({children}) => {
  const podcast = list.feed.entry[0] as Podcast;
  return (
    <Layout>
      <div className='flex flex-row gap-16'>
        <div className='w-2/6'>
          <PodcastDetailsCard podcast={podcast} />
        </div>
        <div className='flex flex-col gap-4 w-4/6'>
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default PodcastLayout;
