import { Toolbar } from "../components/toolbar";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>News App</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col items-center justify-center">
        <h1>Next JS News App</h1>
        <h3>You are one stop shop for the latest new articles</h3>
      </div>
    </div>
  );
}
