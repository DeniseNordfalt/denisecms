import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function Post({ blok, story }) {
  return (
    <div {...storyblokEditable(blok)}>
      {render(blok.content)}

      {story?.tag_list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}
