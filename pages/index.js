import Head from "next/head";
import Header from "./header";
// import Footer from "./footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Search Find Go! - Find Your Favourite Movies and Series in
          Milliseconds
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* <Footer/> */}
    </div>
  );
}
