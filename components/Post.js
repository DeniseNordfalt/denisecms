import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function Post({ blok, story }) {
  return (
    <section {...storyblokEditable(blok)} className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {blok?.image?.filename ? (
          <img
            className="  md:h-96 w-full mb-10 object-cover object-center rounded"
            alt={blok.image.alt ? blok.image.alt : "unnamed image"}
            src={blok.image.filename}
          />
        ) : (
          <></>
        )}

        <div className="text-center lg:w-2/3 w-full">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h2>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600">
            {blok.blurb}
          </h2>
          <div className="mb-8 leading-relaxed text-justify">
            {render(blok.content)}
          </div>
          <div>{blok?.author}</div>
          {story?.tag_list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
