import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Denise CMS</title>
    </Head>

    <div className="max-w-5xl p-10 mx-auto">{children}</div>
  </div>
);

export default Layout;
