import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import Layout from "../components/Layout";

export default function Home({ story, global_data }) {
  story = useStoryblokState(story);

  const { handleSetGlobal, global } = useGlobalContext();

  useEffect(() => {
    if (global_data) {
      handleSetGlobal(global_data);
    }
  }, [global_data]);

  return (
    <Layout global={global}>
      <StoryblokComponent blok={story.content} story={story} />
    </Layout>
  );
}

export async function getStaticProps() {
  // the slug of the story
  let slug = "home";

  let sbParams = {
    // version: "draft"
    version: "published",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  let global_data = await storyblokApi.get(`cdn/stories/`, {
    ...sbParams,
    starts_with: "config",
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      global_data: { ...global_data },
    },
  };
}
