import React, { useEffect, useRef, useState } from "react";
import "./Circle.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import BottomLeftArrow from "./assets/bottomLeftArrow.svg";
import Audio1 from "./assets/audio1.mp3";
import Audio2 from "./assets/audio2.mp3";
import Audio3 from "./assets/audio3.mp3";
import Audio4 from "./assets/audio4.mp3";
import Cookies from "js-cookie";
import HeartGIF from "./assets/heart.gif";
import HeartPNG from "./assets/heart.png";

const Circle = () => {
  const dots = [];
  const numDots = 100;
  const dotSize = 3; // Size of the dot
  // const imageSize = 35;
  const [clickedHeart, setClickedHeart] = useState(HeartPNG);
  const [highlightedDot, setHighlightedDot] = useState(null);
  const circleRef = useRef(null);
  const audioRef = useRef(null);
  const [selectArrow, setSelectArrow] = useState(0);

  const [pageIndex, setPageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const [arrayData, setArrayData] = useState([]);

  const { cWidth, cHeight } = useWindowSize();

  const data = [
    { name: "Rats" },
    { name: "KP" },
    { name: "Varnisha" },
    { name: "Hiresh" },
    { name: "Sandip" },
    { name: "Avinash" },
    { name: "Joshwa" },
    { name: "Varadha" },
    { name: "Nini" },
    { name: "Joel" },
    { name: "Rinsha" },
    { name: "Madchef" },
    { name: "Kenny" },
    { name: "Madhur" },
    { name: "Vignesh" },
    { name: "Saru" },
    { name: "Amritha" },
    { name: "Tanmay" },
    { name: "Nickendra" },
    { name: "Gaurav" },
    { name: "Rahul" },
    { name: "Rahul" },
    { name: "Nazia" },
    { name: "Anjali" },
    { name: "Mukesh" },
    { name: "Asha" },
    { name: "Bhuvana Akka" },
    { name: "Ranjith" },
    { name: "Madhan" },
    { name: "Aishwariya" },
    { name: "Danish" },
    { name: "Aakif" },
    { name: "Nithish" },
    { name: "Vipin" },
    { name: "Sid" },
    { name: "Jameer" },
    { name: "Farook" },
    { name: "Kayal" },
    { name: "Bhisham" },
    { name: "Sanath" },
    { name: "Sharadha akka" },
    { name: "Harish" },
    { name: "Nitish" },
    { name: "Hurshitha" },
    { name: "Ramesh" },
    { name: "Akshaya" },
    { name: "Aashik" },
    { name: "Abbas" },
    { name: "Nithin" },
    { name: "Sudharshan" },
    { name: "Lokesh" },
    { name: "Thiyagu" },
    { name: "Madhu Menon" },
    { name: "Shakthi anna" },
    { name: "Chandru" },
    { name: "Jignesh" },
    { name: "Hari" },
    { name: "Jothi" },
    { name: "Aishwariya" },
    { name: "Shruti" },
    { name: "Arun Subbaiah" },
    { name: "Hari Krshnan" },
    { name: "Bhara" },
    { name: "Nivetha" },
    { name: "Shakthi" },
    { name: "Vetri" },
    { name: "Ashwin" },
    { name: "Suvika" },
    { name: "Kevin" },
    { name: "Hari" },
    { name: "Hari" },
    { name: "Santhosh" },
    { name: "Tilak" },
    { name: "Nafees" },
    { name: "Chandru" },
    { name: "Neera Kabilan" },
    { name: "Shakti" },
    { name: "Sai" },
    { name: "Harsh" },
    { name: "Kavya" },
    { name: "Mithra" },
    { name: "Vilasini" },
    { name: "Koushik" },
    { name: "Jigar" },
    { name: "Teja" },
    { name: "Nicky" },
    { name: "Shyam" },
    { name: "Shakthi" },
    { name: "Pankaj" },
    { name: "Alfred" },
    { name: "Bala" },
    { name: "Edwin" },
    { name: "Bhavesh" },
    { name: "Rohit" },
    { name: "Vaishnavi" },
    { name: "Neil Smith" },
    { name: "Tarun" },
    { name: "Karthic" },
    { name: "Karthik" },
    { name: "Mehul" },
    { name: "AB" },
    { name: "Sanjeev Propal" },
    { name: "Monce" },
    { name: "Rithwin" },
    { name: "Kritish" },
    { name: "Dhivya Mam" },
    { name: "Janani" },
    { name: "Ayaz" },
    { name: "Mrinalini" },
    { name: "Sarath" },
    { name: "Deep" },
    { name: "John" },
    { name: "Fahad" },
    { name: "Ramesh" },
    { name: "Preetham" },
  ];

  const saveArrayToCookies = (array) => {
    Cookies.set("arrayData", JSON.stringify(array));
  };

  const addItemToArray = (item) => {
    const newArray = [...arrayData, item];
    setArrayData(newArray);
    saveArrayToCookies(newArray);
  };

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
    // rotateCircle();

    const cookieArray = Cookies.get("arrayData");
    if (cookieArray) {
      let temp = JSON.parse(cookieArray);
      setArrayData(temp);
    }

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
  }, [pageIndex, addItemToArray, arrayData]);

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

      <div
        style={{
          borderRadius: "20px",
          height: `${highlightedDot !== null ? "70vh" : "60vh"}`,
        }}
        className={`circle-container  ${pageIndex === 1 ? "flipped" : ""} ${
          pageIndex === 2 ? "metaphor" : ""
        }`}
      >
        {pageIndex === 0 && (
          <div>
            <p className="abi-text">Abhiram</p>
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
              {selectArrow === 1 && <audio ref={audioRef} src={Audio1} />}
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
              {selectArrow === 2 && <audio ref={audioRef} src={Audio2} />}

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
              {selectArrow === 3 && <audio ref={audioRef} src={Audio3} />}

              {selectArrow === 3 && (
                <img
                  src={BottomLeftArrow}
                  alt="bottom left arrow"
                  className="arrow bottom-left"
                  onClick={() => rotateCircle()}
                />
              )}

              {selectArrow === 4 && <audio ref={audioRef} src={Audio4} />}

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
                  Proceed
                </p>
              </div>
            )}
          </div>
        )}
        {pageIndex === 1 && (
          <div className="flipped-div">
            <img
              alt="profile"
              style={{ width: "150px", height: "150px", borderRadius: "30px" }}
              src="https://www.w3schools.com/tags/img_girl.jpg"
            />
            <p
              style={{
                fontWeight: "700",
                fontFamily: "cursive",
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
              <p>Show metaphor</p>
            </div>
          </div>
        )}
        {pageIndex === 2 && (
          <div className="metaphor-div">
            <h1 style={{ textAlign: "center" }}> Metaphor</h1>
            <div
              style={{
                display: "flex",
                width: "60vw",
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
                style={{ width: "40px", height: "40px" }}
                src={clickedHeart}
                alt="heart reaction"
                onClick={() => {
                  setTimeout(() => {
                    setClickedHeart(HeartGIF);
                  }, 300);
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
