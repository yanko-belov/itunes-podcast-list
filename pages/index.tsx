import PodcastList from "@/components/podcast-list";
import Layout from "@/layouts/layout";
import usePodcasts from "@/hooks/usePodcasts";

export default function Home() {
  const { isLoading, podcasts } = usePodcasts();

  return (
    <Layout>
      {isLoading && <span>Loading podcasts...</span>}
      {!isLoading && <PodcastList podcasts={podcasts} />}
    </Layout>
  );
}
