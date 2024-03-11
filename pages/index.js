import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>The Trail</title>
        <meta name="description" content="Silicon Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ marginTop: 0, justifyContent: "space-between", display: "flex", flexDirection: "column", alignItems: "center", color: "#021F07", width: "100vw", height: "100vh", backgroundColor: "#F7F0DD"}}>
        <div></div>
        <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
          <div style={{marginBottom: 32}}>
          <p style={{fontSize: 32, textAlign: "center"}}>The Silicon Trail</p>
          <p style={{fontSize: 32, textAlign: "center"}}>Version 0.1</p>
          </div>
          <img style={{imageRendering: "pixelated", width: 360}}src="https://cloud-i267kc782-hack-club-bot.vercel.app/0pixelatedhackclub.png"/>
        </div>

        <p style={{fontSize: 32, marginBottom: 32}}>Open Source 2024-<img style={{imageRendering: "pixelated", height: 20, marginLeft: 8, marginRight: 4}} src="https://cloud-bhnfkyahh-hack-club-bot.vercel.app/0infinity.svg"/>, Hack Club</p>
        </div>  
      </main>
    </>
  );
}
