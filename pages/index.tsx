import PodcastList from "@/components/podcast-list";
import list from '@/list.json'
import { Podcast } from "@/types";
import Layout from "@/layouts/layout";

export default function Home() {
  const podcasts = list.feed.entry as Podcast[];
  return (
    <Layout>
      <PodcastList podcasts={podcasts} />
    </Layout>
  )
}
