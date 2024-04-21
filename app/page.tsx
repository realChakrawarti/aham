import { getHomeContent } from "@/services/getHomeContent";

export default function Index() {
  const homePosts = getHomeContent();

  return <main>{JSON.stringify(homePosts, null, 2)}</main>;
}
