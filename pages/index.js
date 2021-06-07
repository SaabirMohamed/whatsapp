import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp Clone by Saabir Mohamed</title>
        <meta name="description" content="Whatsapp Clone by Saabir Mohamed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SideBar></SideBar>
      </main>
    </div>
  );
}
