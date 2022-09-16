import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Button({ blok }) {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {blok.text}
      </button>
    </div>
  );
}
