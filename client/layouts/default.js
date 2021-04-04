import Head from "next/head";
import Navbar from "../components/home/Navbar";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const DefaultLayout = ({ children }) => (
  <>
    <Head>
      <title>Default Layout</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta charSet="utf-8" />
    </Head>
    <Navbar />
    <main style={{ overflowX: "hidden" }}>{children}</main>
  </>
);

export default DefaultLayout;
