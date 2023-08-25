import React from "react";
import Plx from "react-plx";
import Text1 from "./assets/text3.png";
import bg1 from "./assets/bg3.jpg";
import Second from "./second";
const parallaxData = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 1,
        endValue: 1.6,
        property: "scale",
      },
    ],
  },
];
const App = () => {
  return (
    <div>
      <Plx
        parallaxData={parallaxData}
        style={{
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        <img
          src={bg1}
          className="h-screen w-screen bg-center max-w-screen"
        />
      </Plx>

      <Plx
        className="MyAwesomeParallax"
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center ">
          {/* hello My name is Punit */}
          <img
            src={Text1}
            className=""
          />
        </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        <Second />
      </Plx>
    </div>
  );
};

export default App;
