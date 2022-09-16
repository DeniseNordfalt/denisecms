import { useState, useEffect, React } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

import PostPreview from "./PostPreview";

export default function PostFeed({ blok }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories?starts_with=blog/`);
      const filteredPosts = data.stories.filter((post) => post.name != "Home");

      setPosts((prev) =>
        filteredPosts.map((post) => {
          post.content.slug = post.slug;
          return post;
        })
      );
    };
    getPosts();
  }, []);

  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {posts[0] &&
          posts.map((post) => (
            <PostPreview post={post.content} key={post.uuid} />
          ))}
      </div>
    </>
  );
}
