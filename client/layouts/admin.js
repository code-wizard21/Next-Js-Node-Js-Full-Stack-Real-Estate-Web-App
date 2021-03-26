import Head from "next/head";
import Link from "next/link";

const AdminLayout = (props) => (
  <>
    <Head>
      <title>Admin Layout</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="sidenav">
        <Link href="/" tag="a">
          Admin Home
        </Link>
        <Link href="/contact-us" tag="a">
          Contact Us
        </Link>
      </div>
      <div id="main">{props.children}</div>
    </div>
  </>
);

export default AdminLayout;
