import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <div className="p-6">
      {blok?.image?.filename ? (
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={blok.image.filename}
          alt={blok.image.alt ? blok.image.alt : "image"}
        />
      ) : (
        <></>
      )}
      <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.name}
      </h2>
    </div>
  </div>
);

export default Feature;
