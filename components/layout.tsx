import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { ReactNode } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Text from "../components/text";
import Search from "../components/search";
import Alert from "../public/icons/alert";
import Setting from "../public/icons/setting";

export const siteTitle = "Sample Website";

type LayoutProps = {
  children?: ReactNode;
  home?: boolean;
};
export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {/* {home ? (
          <>
            <Image
              priority
              src="/images/myphoto.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/myphoto.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>
        <div className={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", columnGap: "1em" }}>
              <Link href="/">
                <a>
                  <Avatar sx={{ bgcolor: "#2979ff" }} variant="square">
                    FL
                  </Avatar>
                </a>
              </Link>
              <Text size={24} bold={700}>
                WhiteLabel
              </Text>
              <Search width={400} placeholder="Search"></Search>
            </div>

            <div style={{ display: "flex", columnGap: ".8em" }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Alert width={25} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Setting width={20} />
              </IconButton>
              <Avatar alt="Robin" src="/images/lb.jpg" />
            </div>
          </div>
          <div style={{marginTop: '2em'}}>{children}</div>
        </div>
      </main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
