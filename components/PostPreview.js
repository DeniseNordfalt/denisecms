import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const PostPreview = ({ post }) => {
  return (
    <div className="column feature">
      <div className="p-6">
        {post?.image?.filename ? (
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
            src={post.image.filename}
            alt={post.image.alt ? post.image.alt : "unnamed image"}
          />
        ) : (
          <></>
        )}
        <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {post.title}
        </h2>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {render(post.blurb)}
        </div>
        <div className="mt-4">
          <Link href={`/blog/${post.slug}`}>
            <a
              className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
              title="read more"
            >
              Read More »
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostPreview;
