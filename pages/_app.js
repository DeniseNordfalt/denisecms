import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { GlobalProvider } from "../context/GlobalContext";

//Component imports
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Button from "../components/library/atoms/Button";
import Post from "../components/Post";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  button: Button,
  config: Page,
  post: Post,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
