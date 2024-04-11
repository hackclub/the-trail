import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Text, Image, ThemeProvider, Grid } from "theme-ui";
import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [hasSentEmail, setHasSentEmail] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const sectionRef = useRef(null);

  const scrollToOnboard = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const calculateTimeLeft = () => {
    const deadline = new Date("April 21, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const [openDropDowns, setOpenDropDowns] = useState([]);

  const handleDrop = (item) => {
    if (openDropDowns.includes(item)) {
      setOpenDropDowns(openDropDowns.filter((dropDown) => dropDown !== item));
    } else {
      setOpenDropDowns([...openDropDowns, item]);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 10); // Change 5 to adjust the rotation speed
      }, 200); // Change 100 to adjust the interval duration
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BASE_ID = "appagxgJZD9Ua8rxL";
  const TABLE_NAME = "Trail";

  const createRecord = async (data) => {
    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
        { fields: data },
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHasSentEmail(true);
      console.log("Record created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  };

  return (
    <>
      <Head>
        <title>The Trail, Summer 2024 (by Hack Club)</title>
        <meta
          name="description"
          content="You’re invited on a 7 day hike along the Pacific Crest Trail and a 4 week hiking equipment building event with 30 Hack Clubbers"
        />
        <meta
          property="og:image"
          content="https://cloud-hqqequftm-hack-club-bot.vercel.app/0coolimage__1_.png"
        />
        <meta
          property="og:image:type"
          content="https://cloud-hqqequftm-hack-club-bot.vercel.app/0coolimage__1_.png"
        />
        <meta
          property="og:image:width"
          content="https://cloud-hqqequftm-hack-club-bot.vercel.app/0coolimage__1_.png"
        />
        <meta
          property="og:image:height"
          content="https://cloud-hqqequftm-hack-club-bot.vercel.app/0coolimage__1_.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{ backgroundColor: "#032412", color: "#032412", height: "100%" }}
      >
        <main
          style={{
            maxWidth: "100vw",
            overflow: "hidden",
            backgroundColor: "#FFF5D8",
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 5,
              maxWidth: "100vw",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                zIndex: 0,
                width: "100vw",
                minHeight: 208,
                objectFit: "cover",
              }}
              src="./TopSky.svg"
            />
            <div
              id="sample"
              style={{
                height: 116,
                flexDirection: "column",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 96,
              }}
            >
              <div
                style={{
                  width: "100vw",
                  height: 16,
                  backgroundColor: "#032412",
                }}
              ></div>
              <div
                style={{
                  width: "100vw",
                  height: 8,
                  marginTop: 8,
                  backgroundColor: "#032412",
                }}
              ></div>
              <div
                style={{
                  width: "100vw",
                  height: 4,
                  marginTop: 4,
                  backgroundColor: "#032412",
                }}
              ></div>
              <div
                style={{
                  width: "100vw",
                  height: 2,
                  marginTop: 2,
                  backgroundColor: "#032412",
                }}
              ></div>
              <div
                style={{
                  width: "100vw",
                  height: 1,
                  marginTop: 1,
                  backgroundColor: "#032412",
                }}
              ></div>
            </div>
            <a
              href="https://hackclub.com/"
              style={{
                zIndex: 10,
                position: "absolute",
                left: 32,
                height: 116,
              }}
            >
              <img style={{ height: 116 }} src="./hackerFlag2.svg" />
            </a>
            <a
              href="https://github.com/hackclub/the-trail"
              style={{
                zIndex: 10,
                position: "absolute",
                right: 32,
                top: 32,
                height: 116,
              }}
            >
              <Image
                sx={{ display: ["none", "flex", "flex"], height: 64 }}
                src="./GHLogo.svg"
              />
            </a>

            <Box
              sx={{
                height: 116,
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 96,
              }}
            >
              <img style={{ height: 116 }} src="./Intergalatic.svg" />
            </Box>
            <Box>
              <Box
                sx={{
                  paddingTop: [196, 242, 242],
                  maxWidth: "100vw",
                  overflow: "hidden",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <Image
                  sx={{
                    position: "absolute",
                    objectFit: "fit",
                    width: ["0px", "0px", "400px", "450px"],
                    left: "calc(50% - 225px)",
                  }}
                  src="TheTrailType.svg"
                />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100vw",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    columns={["1fr", "1fr", "1fr", "1fr 1fr"]}
                    sx={{
                      display: "flex",
                      alignItems: ["center", "center", "auto"],
                      justifyContent: [
                        "center",
                        "space-between",
                        "space-between",
                      ],
                      backgroundColor: "#FFF5D8",
                      width: 970,
                      aspectRatio: ["auto", "1/2", "1/2", "2"],
                      overflow: "hidden",
                      border: "8px solid #032412",
                    }}
                  >
                    <Box
                      sx={{
                        height: "calc(100% - 96px)",
                        margin: 0,
                        boxSizing: "content-box",
                        display: "flex",
                        padding: [24, 24, 32],
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: ["calc(100% - 64px)"],
                      }}
                    >
                      <p style={{ fontSize: 16, fontWeight: 300 }}>
                        PACIFIC CREST TRAIL, 2024
                      </p>
                      <Box>
                        <p style={{ fontSize: 24, lineHeight: 2 }}>
                          Hey there,
                        </p>
                        <p
                          style={{
                            marginTop: 24,
                            fontSize: 23,
                            lineHeight: 1.5,
                          }}
                        >
                          You're invited to an online 4 week hiking equipment
                          hackathon followed by a 7 day IRL hike along the
                          Pacific Crest Trail with 30 Hackers!{" "}
                        </p>

                        <Text
                          sx={{
                            fontSize: [22, 24],
                            lineHeight: [2, 1.5],
                            marginTop: 24,
                          }}
                        >
                          <i
                            style={{
                              fontSize: 42,
                              letterSpacing: "1.5px",
                              lineHeight: 1,
                            }}
                            className="strange"
                          >
                            Save the date:
                          </i>
                          <br />
                          Hack & Hike: July 12 - July 19
                        </Text>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            marginTop: 16,
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            onClick={scrollToOnboard}
                            style={{
                              cursor: "pointer",
                              position: "absolute",
                              fontSize: 24,
                              fontFamily: "Fraunces",
                              borderRadius: 0,
                              backgroundColor: "#032412",
                              border: "2px solid #FFF5D8",
                              outline: "none",
                              color: "#FFF5D8",
                              padding: "16px 24px",
                            }}
                          >
                            Hop Onboard
                          </button>

                          <button
                            onClick={scrollToOnboard}
                            style={{
                              cursor: "pointer",
                              fontSize: 24,
                              fontFamily: "Fraunces",
                              borderRadius: 0,
                              backgroundColor: "#032412",
                              border: "4px solid #032412",
                              outline: "none",
                              color: "#FFF5D8",
                              padding: "16px 24px",
                            }}
                          >
                            Hop Onboard
                          </button>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: ["none", "flex", "flex"],
                        width: "100%",
                        position: "relative",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Draggable>
                        <Image
                          sx={{
                            position: "absolute",
                            display: ["none", "flex", "flex"],

                            userDrag: "none", // Prevent image dragging
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserDrag: "none",
                            WebkitUserSelect: "none",

                            cursor: "grab",
                            msUserSelect: "none",
                            zIndex: 99,
                            width: 120,
                            height: 120,
                            right: 16,
                            top: 16,
                          }}
                          src="TakeStamp.svg"
                        />
                      </Draggable>

                      <Image
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                          position: "absolute",
                          display: ["none", "flex", "flex"],
                          transform: `rotate(${rotation}deg)`,
                          width: 86,
                          height: 86,
                          right: 16,
                          zIndex: 2,
                          top: 164,
                          cursor: rotation < 360 ? "wait" : "auto",
                        }}
                        src="beginnersWelcome.svg"
                      />

                      <p></p>
                      <Box
                        sx={{
                          objectFit: "fit",
                          overflow: "hidden",
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        <Image
                          sx={{
                            display: ["none", "flex", "flex"],
                            objectFit: "fit",
                            overflow: "hidden",
                            width: "100%",
                            userDrag: "none",
                            WebkitUserDrag: "none",
                          }}
                          src={
                            rotation < 360 ? "./rightHalf.svg" : "./HikeIRL.png"
                          }
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  zIndex: 100,
                  maxWidth: ["calc(100% - 0px)", "100%", "100%"],
                  flexDirection: "column",
                  gap: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  paddingTop: 32,
                }}
              >
                <Box
                  sx={{
                    width: ["auto", 970, 970],
                    backgroundColor: "#FFF5D8",
                    border: "8px solid #032412",
                  }}
                >
                  <Box sx={{ padding: [24, 24, 32] }}>
                    <Text
                      style={{
                        margin: 0,
                        fontWeight: "bold",
                        letterSpacing: 1.06,
                        color: "#032412",
                        fontSize: 64,
                      }}
                    >
                      <i>Pack your bag with PCBs</i>
                    </Text>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#032412",
                      widht: "100%",
                      height: "4px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      display: "flex",
                      fontSize: 24,
                      lineHeight: 1.5,
                      padding: [24, 24, 32],
                      flexDirection: "column",
                    }}
                  >
                    <p>
                      Build a piece of electronic trail equipment (e.g. Flash
                      Lights, Stoves, GPS Compasses, Radios, Head Lamps, Trail
                      Game Consoles, NFC Trail Board Games, Vintage Trail
                      Cameras, etc) with your friends to make this adventure
                      possible.
                    </p>

                    <p>
                      You can build whatever you’d like, here are some
                      challenges you may solve for:
                      <br />
                      <b>How are we going to...</b>
                    </p>

                    <ul>
                      <li>Communicate long distances</li>
                      <li>Navigate the trail</li>
                      <li>Plan according to the weather</li>
                      <li>Save orpheus</li>
                      <li>See in the dark</li>
                      <li>Entertain each other on the trail</li>
                      <li>Communicate with birds</li>
                      <li>Capture memories of the trip</li>
                      <li>Cook our food</li>
                    </ul>

                    <p>
                      <b>
                        You ship trail equipment, and we will ship you to the
                        Pacific Crest Trail. The piece of equipment you make
                        will be manufactured to supply our entire group.
                      </b>
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: ["100%", 970, 970],
                    backgroundColor: "#FFF5D8",
                    border: "8px solid #032412",
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      textAlign: "center",
                      letterSpacing: 1.06,
                      color: "#032412",
                      fontSize: 64,
                      paddingLeft: 32,
                      paddingTop: 32,
                      paddingBottom: 32,
                      paddingRight: 32,
                    }}
                  >
                    <i>Our journey...</i>
                  </h1>

                  <Box
                    sx={{
                      backgroundColor: "#032412",
                      widht: "100%",
                      height: "4px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      flexDirection: ["column", "row", "row"],
                      display: "flex",
                      fontSize: 24,
                      lineHeight: 1.5,
                      padding: 0,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          padding: 24,
                          borderBottom: "4px solid #032412",
                          borderRight: "2px solid #032412",
                        }}
                      >
                        <p style={{ fontSize: 32, lineHeight: 1 }}>
                          first "four" weeks{" "}
                          <i
                            style={{
                              fontSize: 16,
                              lineHeight: 0,
                              marginLeft: 8,
                            }}
                          >
                            <Text sx={{ display: ["flex", "none", "none"] }}>
                              <br />
                            </Text>
                            (Jun 1st - Jul 7th)
                          </i>
                        </p>
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 16,
                          paddingBottom: 16,
                          borderRight: "2px solid #032412",
                          borderBottom: "4px solid #032412",
                        }}
                      >
                        <Box
                          onClick={() => handleDrop("weekZero")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            height: 36,
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>0. Come up with an idea</p>
                          <img
                            style={{
                              transition: "transform 0.001s linear",
                              transform: `rotate(${
                                openDropDowns.includes("weekZero") ? 180 : 0
                              }deg)`,
                            }}
                            src="TheDrop.svg"
                          />
                        </Box>

                        {openDropDowns.includes("weekZero") && (
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ fontSize: 20 }}>
                              Sign up and then open a PR with your piece of
                              trail equipment idea to our{" "}
                              <a
                                style={{ color: "#032412" }}
                                href="https://github.com/hackclub/trail"
                              >
                                Trail GitHub Repo
                              </a>
                              .
                            </p>
                            <img
                              style={{ display: "flex", width: "100%" }}
                              src="EquipmentSVG.svg"
                            />
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 16,
                          paddingBottom: 16,
                          borderRight: "2px solid #032412",
                          borderBottom: "4px solid #032412",
                        }}
                      >
                        <Box
                          onClick={() => handleDrop("weekOne")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            height: 36,
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>1. Parts & Schematic</p>
                          <img
                            style={{
                              transition: "transform 0.001s linear",
                              transform: `rotate(${
                                openDropDowns.includes("weekOne") ? 180 : 0
                              }deg)`,
                            }}
                            src="TheDrop.svg"
                          />
                        </Box>

                        {openDropDowns.includes("weekOne") && (
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ fontSize: 20 }}>
                              Join daily calls in{" "}
                              <a
                                style={{ color: "#032412" }}
                                href="https://hackclub.slack.com/archives/C06MPNYL0GH"
                              >
                                #the-trail
                              </a>{" "}
                              channel (Hack Club Slack) and consult{" "}
                              <a
                                href="https://github.com/hackclub/trail/trail-book.md"
                                style={{ color: "#032412" }}
                              >
                                The Trail Guide Book
                              </a>{" "}
                              to find the parts you need and design a circuit
                              schematic.
                            </p>
                            <img
                              style={{ display: "flex", width: "100%" }}
                              src="scaryConnections.svg"
                            />
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 16,
                          paddingBottom: 16,
                          borderRight: "2px solid #032412",
                          borderBottom: "4px solid #032412",
                        }}
                      >
                        <Box
                          onClick={() => handleDrop("weekTwo")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            height: 36,
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>2. Wire Up PCB & Order</p>
                          <img
                            style={{
                              transition: "transform 0.001s linear",
                              transform: `rotate(${
                                openDropDowns.includes("weekTwo") ? 180 : 0
                              }deg)`,
                            }}
                            src="TheDrop.svg"
                          />
                        </Box>

                        {openDropDowns.includes("weekTwo") && (
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ fontSize: 20 }}>
                              Now, time to create and order PCB. This will be a
                              bit nerve-racking but you'll get a full design
                              review and be able to confidently order the board.
                              You'll also get the opportunity to add a wild silk
                              screen.
                            </p>
                            <img
                              style={{ display: "flex", width: "100%" }}
                              src="Maggie.svg"
                            />
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 16,
                          paddingBottom: 16,
                          borderRight: "2px solid #032412",
                          borderBottom: "4px solid #032412",
                        }}
                      >
                        <Box
                          onClick={() => handleDrop("weekThree")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            height: 36,
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>3. Make A Case</p>
                          <img
                            style={{
                              transition: "transform 0.001s linear",
                              transform: `rotate(${
                                openDropDowns.includes("weekThree") ? 180 : 0
                              }deg)`,
                            }}
                            src="TheDrop.svg"
                          />
                        </Box>

                        {openDropDowns.includes("weekThree") && (
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ fontSize: 20 }}>
                              Now you can be creative and make some sort of case
                              for your circuit to cover up that fiberglass. We
                              recommend 3D printing a case, but you're also
                              welcome to experiment with making a case out of
                              metal or wood.
                            </p>
                            <img
                              style={{ display: "flex", width: "100%" }}
                              src="metalGrinder.svg"
                            />
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 16,
                          paddingBottom: 16,
                          borderRight: "2px solid #032412",
                          borderBottom: [
                            "4px solid #032412",
                            "0px solid #032412",
                            "0px solid #032412",
                          ],
                        }}
                      >
                        <Box
                          onClick={() => handleDrop("weekFour")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            minHeight: 36,
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>4. Assemble</p>
                          <img
                            style={{
                              transition: "transform 0.001s linear",
                              transform: `rotate(${
                                openDropDowns.includes("weekFour") ? 180 : 0
                              }deg)`,
                            }}
                            src="TheDrop.svg"
                          />
                        </Box>

                        {openDropDowns.includes("weekFour") && (
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ fontSize: 20 }}>
                              Boom! Your pieces start to arrive in the mail and
                              you assemble them.
                            </p>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          padding: 24,
                          borderBottom: "4px solid #032412",
                          borderLeft: "2px solid #032412",
                        }}
                      >
                        <p style={{ fontSize: 32, lineHeight: 1 }}>
                          week on the trail:{" "}
                          <i
                            style={{
                              fontSize: 16,
                              lineHeight: 0,
                              marginLeft: 8,
                            }}
                          >
                            <Text sx={{ display: ["flex", "none", "none"] }}>
                              <br />
                            </Text>
                            (Jul 12 - Jul 19)
                          </i>
                        </p>
                      </Box>
  {/*
                <MapWithNoSSR />

                          */}
                 
                    </Box>
                  </Box>
                </Box>
              
                <Box
                  className="postcard"
                  ref={sectionRef}
                  sx={{
                    width: ["100%", 970, 970],
                    backgroundColor: "#FFF5D8",
                    padding: 32,
                  }}
                >
                  <Text
                    sx={{
                      margin: 0,
                      fontWeight: "bold",
                      letterSpacing: 1.06,
                      color: "#032412",
                      fontSize: [42, 64, 64],
                    }}
                  >
                    <i>Join The Expedition!</i>
                  </Text>

                  <p style={{ fontSize: 24, marginTop: 24 }}>
                    Embark on the greatest adventure of your life, make great
                    friendships, and build a project that you didn’t think was
                    possible.
                  </p>

                  <Box sx={{ marginTop: 24 }}>
                    <input
                      value={email}
                      onChange={handleChangeEmail}
                      id="placeholder"
                      style={{
                        fontFamily: "Fraunces",
                        fontSize: 22,
                        padding: 8,
                        backgroundColor: "#FFF5D8",
                        outline: "none",
                        border: "4px solid #032412",
                        color: "#032412",
                      }}
                      placeholder="Your email address"
                    />
                    <Button
                      onClick={() =>
                        createRecord({
                          Email: email,
                        })
                      }
                      disabled={hasSentEmail}
                      sx={{
                        cursor: "pointer",
                        marginTop: ["16px", 0, 0],
                        fontFamily: "Fraunces",
                        cursor: "pointer",
                        borderRadius: 0,
                        color: "#FFF5D8",
                        fontSize: "22px",
                        padding: "8px",
                        backgroundColor: "#032412",
                        border: "4px solid #032412",
                      }}
                    >
                      {!hasSentEmail ? "Hop Onboard" : "Check your inbox"}
                    </Button>
                    <p style={{ fontSize: 24, marginTop: 16 }}>
                      <b>
                        Deadline To Sign Up: {timeLeft.days} days{" "}
                        {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
                        {timeLeft.seconds} seconds
                      </b>{" "}
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: ["100%", 970, 970],
                    marginBottom: 24,
                    backgroundColor: "#FFF5D8",
                    border: "8px solid #032412",
                    padding: 32,
                  }}
                >
                  <Text
                    sx={{
                      fontSize: [42, 64, 64],
                      fontWeight: "bold",
                      marginTop: 0,
                      letterSpacing: 1.06,
                      color: "#032412",
                    }}
                  >
                    <i>Now to the questions...</i>
                  </Text>
                  <Box
                    sx={{
                      marginTop: 32,
                      display: "flex",
                      flexDirection: ["column", "row", "row"],
                    }}
                  >
                    <Box
                      sx={{
                        width: ["100%", "50%", "50%"],
                        flexDirection: "column",
                        display: "flex",
                      }}
                    >
                      <Box
                        style={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q1")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q1") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          What section of the Pacific Crest Trail are we
                          traveling on?
                        </p>

                        {openDropDowns.includes("Q1") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            <b>To Be Determined</b>
                          </p>
                        )}
                      </Box>
                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 24,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q2")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q2") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          What will we see along The Trail?
                        </p>

                        {openDropDowns.includes("Q2") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            <b>To Be Determined</b>
                          </p>
                        )}
                      </Box>

                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 24,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q3")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q3") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          What will we eat?
                        </p>

                        {openDropDowns.includes("Q3") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            MREs! Turns out that we're not the first group of
                            people who wanted to go outside and survive!
                            <br />
                            <br />
                            <img src="/stoveCooking.svg" />
                            MREs are relatively inexpensive packages of food
                            that can be prepared with just hot water, last for
                            decades (so they never go bad), and are delicious!
                            <br />
                            <br />
                            Visit{" "}
                            <a
                              style={{ color: "#032412" }}
                              href="https://backpackerspantry.com/collections/food"
                            >
                              Back Packer's Pantry
                            </a>{" "}
                            to get some inspo! (dw, we'll provide the food)
                          </p>
                        )}
                      </Box>

                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 24,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q4")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q4") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          Where will we sleep?
                        </p>

                        {openDropDowns.includes("Q4") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            We'll be sleeping in tents! Some may opt to go for a
                            hammock (Thomas being one of those people), but
                            almost everyone will be in a tent. You'll have a
                            warm sleeping bag. We'll split up our team among
                            three camp sites, each with about 10 people in them
                            (two large tents per camp site).
                          </p>
                        )}
                      </Box>

                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 16,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q5")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q5") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          My parents are concerned, what should I do?{" "}
                        </p>

                        {openDropDowns.includes("Q5") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            Oh yeah, no worries! We have a{" "}
                            <a
                              style={{ color: "#032412" }}
                              href="https://github.com/hackclub/the-trail/guide-book/parents.md"
                            >
                              Parent's Guide to The Trail
                            </a>
                            . If that doesn't help, please schedule a call with
                            an adult HQ member & your parents (just send an
                            email to trail@hackclub.com & cc your parents).
                          </p>
                        )}
                      </Box>

                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 16,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q6")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q6") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          Will there be travel stipends?
                        </p>

                        {openDropDowns.includes("Q6") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            Yep! There are travel stipends of up to $500 for
                            those in US / Canada who make their trail equipment.
                            We'll be flying into Sacramento. We also have a very
                            limited number of international stipends available
                            that are up to $1,000.
                          </p>
                        )}
                      </Box>

                      <Box
                        sx={{
                          borderBottom: "4px solid #032412",
                          paddingBottom: 16,
                          marginTop: 16,
                        }}
                      >
                        <p
                          onClick={() => handleDrop("Q7")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q7") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          How can I do this with my club?
                        </p>

                        {openDropDowns.includes("Q7") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            That's where{" "}
                            <a
                              href="https://github.com/hackclub/trail/trail-book.md"
                              style={{ color: "#032412" }}
                            >
                              The Trail Book
                            </a>{" "}
                            comes into play. You can continue hosting meetings
                            with your Hack Club into the Summer.
                            <br />
                            <br /> We define a Hack Club as simply a bunch of
                            friends getting together and building projects. It
                            doesn't have to be at your school: it can be at a
                            cafe, library, home, or online!
                            <br />
                            <br />
                            Just get together and each week follow through the
                            guides in{" "}
                            <a
                              href="https://github.com/hackclub/trail/trail-book.md"
                              style={{ color: "#032412" }}
                            >
                              The Trail Guide Book
                            </a>
                            .
                          </p>
                        )}
                      </Box>

                      <Box sx={{ marginTop: 16 }}>
                        <p
                          onClick={() => handleDrop("Q8")}
                          style={{ cursor: "pointer", fontSize: 22 }}
                        >
                          <img
                            style={{
                              marginRight: 16,
                              transform: `rotate(${
                                openDropDowns.includes("Q8") ? 180 : 0
                              }deg)`,
                              height: 16,
                            }}
                            src="./TheDropV.svg"
                          />
                          What type of equipment can I make?
                        </p>

                        {openDropDowns.includes("Q8") && (
                          <p style={{ fontSize: 22, marginTop: 8 }}>
                            You can make whatever type of equipment you'd like.
                            Our ask is that what you build will help our
                            adventure along the trail and is a hardware project
                            made using OnBoard (our PCB Grant).
                            <br />
                            <br />
                            Here are some ideas: Trail GPS-powered Orpheus
                            Compass, Electronic Noisey Barometer,
                            See-in-the-dark electronic AR headset, NFC-based
                            board game, Bird sound system (communicate with
                            birds), Custom trail-food stove, Vintage camera with
                            filters, Walkie-talkie Radio System, Silk-screen
                            trail map with a "you are here" flashing light,
                            Voice-controlled Headlamp With Personality.
                          </p>
                        )}
                      </Box>
                    </Box>

                    <Image
                      sx={{
                        width: ["100%", "50%", "50%"],
                        alignSelf: "end",
                        display: "flex",
                      }}
                      src="./YouCanDoIt.svg"
                    />
                  </Box>
                </Box>
                <p
                  style={{
                    color: "#FFF5D8",
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  built with {"<3"} by teen hackers
                  <br /> figuring out electronics
                </p>
              </Box>
            </Box>

            {/* <p>Hello World!</p> */}
          </Box>
          <img
            style={{ zIndex: 0, width: "100vw", marginTop: "256px" }}
            src="./coolBG.svg"
          />
          <Box
            sx={{
              display: "flex",
              zIndex: 0,
              height: "100%",
              marginTop: "-8px",
              width: "100vw",
              backgroundColor: "#032412",
            }}
          ></Box>
        </main>
      </Box>
    </>
  );
}
