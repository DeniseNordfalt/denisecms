import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Layout from "../components/Layout";

export default function Page({ story, global_data }) {
  story = useStoryblokState(story);

  const { handleSetGlobal, global } = useGlobalContext();

  useEffect(() => {
    if (global_data) {
      handleSetGlobal(global_data);
    }
  }, [global_data]);

  return (
    <Layout global={global}>
      <h1>{story ? story.name : "My Site"}</h1>
      <StoryblokComponent blok={story.content} story={story} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // the slug of the story
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
