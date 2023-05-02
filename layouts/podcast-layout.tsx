import { FC, ReactNode } from "react";
import PodcastDetailsCard from "@/components/podcast-details-card";
import Layout from "@/layouts/layout";
import usePodcast from "@/hooks/usePodcast";
import { useRouter } from "next/router";

interface PodcastLayoutProps {
  children: ReactNode;
}

const PodcastLayout: FC<PodcastLayoutProps> = ({children}) => {
  const router = useRouter()
  const {podcastId} = router.query;
  const {podcast, isLoading} = usePodcast((podcastId || '') as string);

  return (
    <Layout>
      {(isLoading || !podcast) && <span>Loading podcast...</span>}
      {!isLoading && podcast && (<div className='flex flex-row gap-16'>
        <div className='w-2/6'>
          <PodcastDetailsCard podcast={podcast}/>
        </div>
        <div className='flex flex-col gap-4 w-4/6'>
          {children}
        </div>
      </div>)}
    </Layout>
  )
}

export default PodcastLayout;
