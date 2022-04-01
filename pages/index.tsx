import Head from "next/head";
import type { NextPage } from "next";
import Layout, { siteTitle } from "../components/layout";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Text from "../components/text";
import Search from "../components/search";
import Alert from "../public/icons/alert";
import Setting from "../public/icons/setting";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};
export default Home;
