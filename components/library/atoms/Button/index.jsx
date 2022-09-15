import React from "react";
import { storyblokEditable } from "@storyblok/react";
import * as s from "./styles";

export default function Button({ blok }) {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <button>{blok.text}</button>
    </div>
  );
}
