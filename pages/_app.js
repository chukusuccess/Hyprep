import { Fragment } from "react";
import "../styles/globals.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;

const Layout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
