import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Silicon() {

  const [startScreenActive, setStartScreenActive] = useState(true);
  const [startScreenStartLoading, setStartScreenStartLoading] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Change the state after 2 seconds
      setStartScreenStartLoading(true);
    }, 3000);

    const timeoutId2 = setTimeout(() => {
      // Change the state after 2 seconds
      setStartScreenActive(false);
    }, 3500);

    // Clean up the timeout to avoid memory leaks
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the state
      setBlink(prevState => !prevState);
    }, 500); 
    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on mount


  return (
    <>
      <Head>
        <title>The Trail</title>
        <meta name="description" content="Silicon Trail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{fontFamily: "Billy"}}>
        {startScreenActive ? (
        <div>
<div style={{position: "absolute", width: "100vw", height: !startScreenStartLoading ? "0vh" : "100vh", transition: "height linear 0.5s", backgroundColor: "#F7F0DD"}}></div>
        <div style={{ marginTop: 0, justifyContent: "space-between", display: "flex", flexDirection: "column", alignItems: "center", color: "#021F07", width: "100vw", height: "100vh", backgroundColor: "#F7F0DD"}}>
        <div></div>
        <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
          <div style={{marginBottom: 32}}>
          <p style={{fontSize: 32, textAlign: "center"}}>The Silicon Trail</p>
          <p style={{fontSize: 32, textAlign: "center"}}>Version 0.1</p>
          </div>
          <img style={{imageRendering: "pixelated", width: 360}} src="https://cloud-i267kc782-hack-club-bot.vercel.app/0pixelatedhackclub.png"/>
        </div>
        <p style={{fontSize: 32, marginBottom: 32}}>Open Source 2024-<img style={{imageRendering: "pixelated", height: 20, marginLeft: 8, marginRight: 4}} src="https://cloud-bhnfkyahh-hack-club-bot.vercel.app/0infinity.svg"/>, Hack Club</p>
        </div>
        </div>): (
        <div style={{display: "flex", flexDirection: "column",  backgroundColor: "#021F07", height: "100vh", width: "100vw", margin: 0}}>
          <div style={{display: "flex", height: "100vh", justifyContent: "space-around", flexDirection: "column", marginLeft: 196, marginRight: 196}}>
      <div>
          <p style={{color: "#F7F0DD", fontSize: 150, fontFamily: "PixelCowBoy", margin: 0}}>The Silicon Trail</p>
          <img style={{imageRendering: "pixelated", width: "calc(100vw - 392px)"}} src="Divider.svg"/>
       </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <p style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>You may:</p>
          <ol>
          <li style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>Hop Onboard The Trail</li>
          <li style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>Learn about The Trail</li>
          <li style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>See the Electric Travelers</li>
          <li style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>Visit ReadMe</li>
          <li style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy"}}>Exit</li>
          </ol>

          <p style={{color: "#F7F0DD", fontSize: 36, fontFamily: "Billy", display: "flex", alignItems: "end"}}>What is your choice? <div style={{opacity: blink ? (0): (1), backgroundColor: "#F7F0DD", width: 32, marginLeft: 8, marginBottom: 4, height: 4}}></div></p>
            </div>
            <img style={{imageRendering: "pixelated", width: "calc(100vw - 392px)"}} src="Divider.svg"/>



          </div>
        </div>
        
        )}
      </main>
    </>
  );
}
