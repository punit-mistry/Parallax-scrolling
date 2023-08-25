import React from "react";
import img1 from "./assets/img1.webp";
import Footer from "./Footer";
const Second = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-10 justify-center items-center   bg-white text-3xl h-[100vh] font-[Roboto]">
        <div className="text-4xl  w-[55vw] font-bold mr-24">
          <div>News</div>
          <div>LAMBORGHINI WORLD</div>
        </div>
        <div className="w-[55vw]">
          <img src={img1} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Second;
