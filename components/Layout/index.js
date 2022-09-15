import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, global }) {
  console.log("global", global?.navigation);

  return (
    <div>
      <Head>
        <title>Denise CMS</title>
        <link rel="icon" href={global?.favicon?.filename} />
      </Head>

      {global?.navigation &&
        global?.navigation?.map((nav_link, index) => {
          return (
            <div key={index}>
              <Link
                href={
                  nav_link.link.cached_url === "home"
                    ? "/"
                    : nav_link.link.cached_url
                }
              >
                <a>{nav_link.name}</a>
              </Link>
            </div>
          );
        })}

      <div className="max-w-5xl p-10 mx-auto">{children}</div>
    </div>
  );
}
