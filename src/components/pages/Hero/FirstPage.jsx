import React from "react";
import personImg from "../../../assets/arun2-new.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-1">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Arunkumar S
              </p>
              <p className="text-black/75 text-left">Full Stack Developer and Designing</p>
              <p className="text-black/75">
                My soul is tranquil,My future is an ideal projection of what I envision now.
              </p>
              <a
                className="inline-block primary-btn "
                href="arunkumarame04@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
