import React, { useEffect, useRef, useState } from "react";
import "./Circle.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import BottomLeftArrow from "./assets/bottomLeftArrow.svg";
import Audio1 from "./assets/audio1.mpeg";
import Audio2 from "./assets/audio2.mpeg";
import Audio3 from "./assets/audio3.mpeg";
import Audio4 from "./assets/audio4.mpeg";
import Audio5 from "./assets/audio5.mpeg";
import Cookies from "js-cookie";
import HeartGIF from "./assets/heart.gif";
import HeartPNG from "./assets/heart.png";

const Circle = () => {
  const dots = [];
  const numDots = 50;
  const dotSize = 3; // Size of the dot
  // const imageSize = 35;
  const audioFiles = [Audio1, Audio2, Audio3, Audio4, Audio5];
  const getRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    return audioFiles[randomIndex];
  };
  const [clickedHeart, setClickedHeart] = useState(HeartPNG);
  const [highlightedDot, setHighlightedDot] = useState(null);
  const circleRef = useRef(null);
  const audioRef = useRef(null);
  const [selectArrow, setSelectArrow] = useState(0);

  const [pageIndex, setPageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const { cWidth, cHeight } = useWindowSize();

  const data = [
    {
      name: "Aakif",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Aakif.jpeg",
      metaphor:
        "Abhiram was like the Wi-Fi signal in a busy cafe: occasionally strong, frequently intermittent, but always forcing us to find creative ways to get things done.",
    },
    {
      name: "Aashik",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Aashik.jpg",
      metaphor: "Abhiram is NOKIA, always connecting us with the right people.",
    },
    {
      name: "Akshaya",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Akshaya.jpeg",
      metaphor:
        "Abhiram to me is a LinkedIn. He paved the way for me into the world of freelancing and I'll always be grateful for that!",
    },
    {
      name: "Asha",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Asha.jpeg",
      metaphor: "Abhi was a gentle sunbeam filling space with warmth",
    },
    {
      name: "Ayaz",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Ayaz+AHmed.png",
      metaphor:
        "Abhiram is a treasure, a very humble person with lots of knowledge.",
    },
    {
      name: "Bala",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Bala+(2).jpeg",
      metaphor:
        "You taught me that by adding value, we create a ripple effect, like a stone thrown into a pond, touching countless lives in ways we can't even see.",
    },
    {
      name: "Bhara",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Barra.jpeg",
      metaphor:
        '"Book - people can get more information and content. Only he knows where you get offers you and how you can claim it. Senthil in Boys Movie - Information is wealth"',
    },
    {
      name: "Bhuvana Akka",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Bhuvana.jpeg",
      metaphor:
        "Abhiram is like google maps, always happy to show ways to any Tom, Dick and Harry to reach their destinations.",
    },
    {
      name: "Chandru",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Chandru+Airdonex.jpeg",
      metaphor:
        "Abhiram was like a lighthouse, illuminating our path even in the darkest storms",
    },
    {
      name: "Danish",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Danish+Khan.jpg",
      metaphor:
        "Abhiram the Changemaker, with a mentor's embrace, empowered my skills beyond this workplace.",
    },
    {
      name: "Farook",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Farook.jpg",
      metaphor: "Abhiram is a Google he know something about everything",
    },
    {
      name: "Hari Prasad",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Hari+Prasaad.jpg",
      metaphor:
        "Abhiram has been like a shock-absorber, I can come to him with any problem and he'd understand the depth of it, take the stress away and frame a solution.",
    },
    {
      name: "Harish",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Harish+Venkatesh.png",
      metaphor:
        "Lion in Cat - Abhiram was the big lion hidden in a tiny cat that enabled me to not be judgemental toward anyone/thing.",
    },
    {
      name: "Harsh",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Harsh+Jethani.jpg",
      metaphor:
        "Abhiram opened the door to entrepreneurship for me, guiding me through the maze of what it will look like when I embark on my own journey.",
    },
    {
      name: "Hurshitha",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Hurshitha.jpg",
      metaphor:
        "\"100 year old Banyan tree trunk\" so effing strong support system And keeps giving love support advise without any expectations. My cute little brother from another mother. He's more than just a colleague. He's my one and only Namitha 🫶",
    },
    {
      name: "Joel",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Joel.jpg",
      metaphor: "Abhiram was my navigator, navigating my path to success.",
    },
    {
      name: "Joshwa",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Joshwa_.jpg",
      metaphor:
        "He has been to me what Nikumbh was to Ishaan—helping me to identify my strengths, discover my dreams, and find my ikigai. I owe him a debt that can never truly be repaid.",
    },
    {
      name: "Karthic",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Karthic+OOTB.jpg",
      metaphor: "Abhiram is the promise of hope waiting at the tunnel's end.",
    },
    {
      name: "Kenny",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Kenny.jpeg",
      metaphor:
        "Abhiram is an “Energy” who gives us more confidence and power to do what we want to do.",
    },
    {
      name: "KP",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/KP.jpeg",
      metaphor:
        "Abhiram has been like a clear mirror, providing a reality check and even more, reflecting back what we missed seeing.",
    },
    {
      name: "Lokesh",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Lokesh.jpeg",
      metaphor:
        "Abhiram is a Ladder or an Elevator, lifting us up to achievie our goals.",
    },
    {
      name: "Madchef",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Madchef+Koushik.jpg",
      metaphor:
        "Abhiram brought the essential flavour to my business strategies",
    },
    {
      name: "Madhan",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Madhan.jpeg",
      metaphor:
        "He was like a gentle nudges, who kept me on the right path when I started to stray.",
    },
    {
      name: "Madhu Menon",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Madhu+menon+SimplyAdda.png",
      metaphor:
        "Abhiram has been a Crystal, bringing clarity and structure to thoughts and perspectives",
    },
    {
      name: "Mithra",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Mithra.jpg",
      metaphor:
        "Abhiram is a wild card, he surprises everyone with his innovative ideas.",
    },
    {
      name: "Monce",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Monce.jpg",
      metaphor:
        "Abhiram was like my mapmaker, charting my course through the uncharted territory of my own potential.",
    },
    {
      name: "Mrinalini",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Mrinalini.PNG",
      metaphor:
        "You have been my guiding star, illuminating the path and helping me navigate through the complexities of business decisions.",
    },
    {
      name: "Nazia",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Nazia.jpeg",
      metaphor:
        "He was a steadfast guardian, a guiding light in my moments of solitude.",
    },
    {
      name: "Nini",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Nini.HEIC",
      metaphor:
        "Abhi was the magnet that attracted chicks, drama and chaos; nonetheless, he’s amazing (for all the wrong reasons)",
    },
    {
      name: "Nithin",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Nithin.jpeg",
      metaphor:
        "Abhiram, you're like a sunflower - standing tall and unwavering, spreading warmth and cheer. As you move on to new adventures, know that your impact here will always be cherished. Thank you for being a constant source of motivation and joy.",
    },
    {
      name: "Nithish",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Nithis+-+DoLabs.jpg",
      metaphor:
        "Abhi, our creative compass, led us to new peaks. As he takes a bow, his melody of mentorship will continue to inspire us.",
    },
    {
      name: "Nivetha",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Nivetha+(unlimited).jpeg",
      metaphor:
        '"He is the pole star directed me in the right away, He is a pillar have been a support system being there for me anytime I called him Zomato bought and treated me with a lot food Bridge - I\'m here because of him."',
    },
    {
      name: "Preetham",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Preetham+Kumaran+silks.PNG",
      metaphor:
        '"Abhi guided us truly as how compass would do to a captain of a ship mid ocean."',
    },
    {
      name: "Ramesh",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Ramesh+P%26M.jpg",
      metaphor: '"he is as straight as a line always gives true feedback"',
    },
    {
      name: "Rats",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Rats.jpeg",
      metaphor:
        "He is a Big Friendly Giant (BFG) waiting to awaken from within.",
    },
    {
      name: "Rinsha",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Rinsha.jpg",
      metaphor:
        "Abhiram is the Swiss Army knife of my life, seamlessly transforming into whatever I need at every turn. Like a lighthouse, he guides me through the stormiest seas and the sunniest shores alike",
    },
    {
      name: "Sai",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/sai+.jpg",
      metaphor:
        "having a best friend who always brings the perfect snack to the party – comforting, uplifting, and making everything better.",
    },
    {
      name: "Sanath",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Sanath.jpg",
      metaphor:
        "Abhiram was like the bright spot in our interactions, always bringing his chill vibe and strong voice to the table.",
    },
    {
      name: "Santhosh",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Santhosh+Eatitude.jpg",
      metaphor:
        "Abhiram was the spark plug of my entrepreneurial engine, firing up my drive and ambitions to where it is right now!",
    },
    {
      name: "Shakthi anna",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/sakthi.jpeg",
      metaphor: "Divine Vessel - His care if never ending.",
    },
    {
      name: "Sharadha akka",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Sharadda+(Nini+Neighbour).jpeg",
      metaphor:
        "Abhi is to me as integration is to calculus, expertly breaking down any complex thoughts and ideas I come up with.",
    },
    {
      name: "Sid",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Siddharth+Pencil+%26+Monk.jpg",
      metaphor:
        "He’s been an arrow or a missile or a bullet. Tell him the target and he’ll get it done",
    },
    {
      name: "Sudharshan",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Sudharshan+Bversity.JPG",
      metaphor:
        "Friendly neighbourhood leader. Abhiram is a go-to friend for any needs at workspace",
    },
    {
      name: "Suvika",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Suvika.jpeg",
      metaphor:
        "Abhiram was like the ghee in dosa, adding that extra crispiness to my career",
    },
    {
      name: "Swathi",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Swathi.jpeg",
      metaphor:
        "Thank you for being the guiding light in my startup's early journey, sharing invaluable contacts, and charting a roadmap for success. Your dedication and support have been instrumental. Best wishes on your next adventure!",
    },
    {
      name: "Thiyagu",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Thiyagu.jpeg",
      metaphor: "He is a keystone that addresses the core problem",
    },
    {
      name: "Varnisha",
      image_url:
        "https://postactionsbucket.s3.ap-south-1.amazonaws.com/abhiram-dolabs/Varnisha.jpeg",
      metaphor:
        "Tony Stark to my Peter Parker. Mentored me and allowed me to explore with a lot of freedom.",
    },
  ];

  const rotateCircle = () => {
    if (highlightedDot === null) {
      if (audioRef.current) {
        audioRef.current.play();
      }
      if (circleRef.current) {
        circleRef.current.style.animation =
          "spin 7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards";
      }
    }
  };

  useEffect(() => {
    let arrayData = [];

    const addItemToArray = async (item) => {
      const newArray = [...arrayData, item];
      arrayData = newArray;
      // setArrayData(newArray);
      await Cookies.set("arrayData", JSON.stringify(newArray));
    };
    // rotateCircle();
    const getCookieData = async () => {
      const cookieArray = await Cookies.get("arrayData");
      if (cookieArray) {
        let temp = JSON.parse(cookieArray);
        if (temp.length === 120) {
          let emptyData = [];
          await Cookies.set("arrayData", JSON.stringify(emptyData));
        } else {
          arrayData = temp;
        }
        // setArrayData(temp);
      }
    };

    getCookieData();

    const arrowNumber = Math.floor(Math.random() * 4) + 1;
    setTimeout(() => {
      setSelectArrow(arrowNumber);
    }, 1000);

    const handleAnimationEnd = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (circleRef.current) {
        circleRef.current.style = null;
      }
      let generateRandomDot = () => {
        let randomDot;
        do {
          randomDot = Math.floor(Math.random() * (numDots + 1));
        } while (arrayData.includes(randomDot));
        return randomDot;
      };
      let randomDot = generateRandomDot();
      setHighlightedDot(randomDot);
      addItemToArray(randomDot);

      // setTimeout(() => {
      // }, 3000);
    };

    if (pageIndex === 1) {
      setShowConfetti(true);
      // setTimeout(() => {
      //   setShowConfetti(false);
      // }, 5000);
    } else {
      setShowConfetti(false);
    }

    const circle = circleRef.current;
    if (circle !== null) {
      circle.addEventListener("animationend", handleAnimationEnd);
    }
    return () => {
      if (circle) {
        circle.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [pageIndex]);

  for (let i = 0; i < numDots; i++) {
    const angle = (i / numDots) * 360;
    // const isHighlighted = i === highlightedDot;
    const translateX = `calc(50px + ${dotSize / 2}px)`;
    dots.push(
      <div
        key={i}
        className={`dot  ${i === highlightedDot ? "highlighted" : ""}`}
        style={{
          position: "absolute",
          // width: `${dotSize}px`,
          // height: `${dotSize}px`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transformOrigin: "0 -25px",
          transform: `rotate(${angle}deg) translate(calc(${translateX} + 50px)) rotate(-${angle}deg)`,
        }}
      >
        {/* {i === highlightedDot && (
          <img
            key={highlightedDot}
            src={highlightedImage}
            alt="Highlighted Image"
            className={`highlighted-image ${
              i === highlightedDot ? "highlighted" : ""
            }`}
            style={{
              position: "absolute",
              width: `${imageSize}px`, // Set the dimensions of the image to 50x50 pixels
              height: `${imageSize}px`, // Set the dimensions of the image to 50x50 pixels
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transformOrigin: "0 -25px",
              transform: `rotate(${angle}deg) translate(calc(${translateX} - 50px)) rotate(-${angle}deg)`,
              marginTop: `-${imageSize / 2}px`, // Adjust marginTop to vertically center the image
              marginLeft: `-${imageSize / 2}px`,
            }}
          />
        )} */}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "95vh",
        width: "100vw",
      }}
    >
      {showConfetti && (
        <Confetti
          width={cWidth}
          height={cHeight}
          run={pageIndex === 1 ? true : false}
        />
      )}

      {pageIndex == 1 ||
        (pageIndex == 2 && (
          <p style={{ fontSize: "30px" }}>A note to our darling!</p>
        ))}

      <div
        style={{
          borderRadius: "20px",
          height: `${highlightedDot !== null ? "70vh" : "60vh"}`,
          marginBottom: "80px",
        }}
        className={`circle-container  ${pageIndex === 1 ? "flipped" : ""} ${
          pageIndex === 2 ? "metaphor" : ""
        }`}
      >
        {pageIndex === 0 && (
          <div>
            <p className="abi-text">Abhiram TVS</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70vw",
                position: "relative",
                top: "70px",
                // backgroundColor: "#fff",
              }}
            >
              {selectArrow === 1 && (
                <audio
                  preload="auto"
                  type="audio/mpeg"
                  ref={audioRef}
                  src={getRandomAudio()}
                />
              )}
              {selectArrow === 1 && (
                <img
                  src={BottomLeftArrow}
                  alt="bottom left arrow"
                  className="arrow top-left"
                  onClick={() => {
                    rotateCircle();
                  }}
                  style={{
                    position: "relative",
                    bottom: `${
                      selectArrow === 1 || selectArrow === 2 ? "40px" : "0px"
                    }`,
                  }}
                />
              )}
              {selectArrow === 2 && (
                <audio
                  preload="auto"
                  type="audio/mpeg"
                  ref={audioRef}
                  src={getRandomAudio()}
                />
              )}

              {selectArrow === 2 && <div />}

              {selectArrow === 2 && (
                <img
                  src={BottomLeftArrow}
                  alt="bottom left arrow"
                  className="arrow top-right"
                  onClick={() => rotateCircle()}
                  style={{
                    position: "relative",
                    bottom: `${
                      selectArrow === 1 || selectArrow === 2 ? "40px" : "0px"
                    }`,
                  }}
                />
              )}
            </div>
            <div
              className="circle"
              ref={circleRef}
              style={{
                position: "relative",
                bottom: `${highlightedDot !== null ? "20px" : "0px"}`,
              }}
            >
              {dots}
              <img
                className="center-image"
                alt="abiram"
                src={require("./assets/abi.png")}
                style={{
                  width: "197px",
                  height: "197px",
                  position: "relative",
                  bottom: "40px",
                  right: "72px",
                  top: "-72px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70vw",
                position: "relative",
                top: "-70px",
              }}
            >
              {selectArrow === 3 && (
                <audio
                  preload="auto"
                  type="audio/mpeg"
                  ref={audioRef}
                  src={getRandomAudio()}
                />
              )}

              {selectArrow === 3 && (
                <img
                  src={BottomLeftArrow}
                  alt="bottom left arrow"
                  className="arrow bottom-left"
                  onClick={() => rotateCircle()}
                />
              )}

              {selectArrow === 4 && (
                <audio
                  preload="auto"
                  type="audio/mpeg"
                  ref={audioRef}
                  src={getRandomAudio()}
                />
              )}

              {selectArrow === 4 && <div />}

              {selectArrow === 4 && (
                <img
                  src={BottomLeftArrow}
                  alt="bottom left arrow"
                  className="arrow bottom-right"
                  onClick={() => rotateCircle()}
                />
              )}
            </div>

            {highlightedDot !== null && (
              <div>
                <p className="selected-number">{highlightedDot}</p>
                <p className="proceed-button" onClick={() => setPageIndex(1)}>
                  View
                </p>
              </div>
            )}
          </div>
        )}
        {pageIndex === 1 && (
          <div className="flipped-div">
            <img
              alt="profile"
              style={{ width: "250px", height: "250px", borderRadius: "30px" }}
              src={data[highlightedDot].image_url}
            />
            <p
              style={{
                fontWeight: "700",
                fontSize: "25px",
              }}
            >
              {data[highlightedDot].name}
            </p>
            <div
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "16px",
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
              onClick={() => setPageIndex(2)}
            >
              <p>Flip</p>
            </div>
          </div>
        )}
        {pageIndex === 2 && (
          <div className="metaphor-div">
            <h1
              style={{
                textAlign: "center",
                position: "relative",
                bottom: "20px",
              }}
            >
              {" "}
              From my heart
            </h1>
            <blockquote>
              <p>{data[highlightedDot].metaphor}</p>
            </blockquote>
            <p
              style={{
                textAlign: "right",
                position: "relative",
                left: "-50px",
                top: "-20px",
              }}
            >
              -- {data[highlightedDot].name}
            </p>
            <div
              style={{
                display: "flex",
                width: "90vw",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: "16px",
                  width: "100px",
                  position: "relative",
                  top: "-30px",
                  left: "-20px",
                }}
                onClick={() => {
                  setHighlightedDot(null);
                  setPageIndex(0);
                  setSelectArrow(0);
                  setClickedHeart(HeartPNG);
                  circleRef.current = null;
                }}
              >
                <p>Start again</p>
              </div>
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  position: "relative",
                  top: "-30px",
                  left: "10px",
                }}
                src={clickedHeart}
                alt="heart reaction"
                onClick={() => {
                  setTimeout(() => {
                    setClickedHeart(HeartGIF);
                  }, 100);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Circle;
