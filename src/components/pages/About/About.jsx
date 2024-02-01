import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Today, I am brimming with energy and overflowing with joy,My body is healthy; my mind is brilliant; my soul is tranquil,My future is an ideal projection of what I envision now."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        I am a B.Tech/BE student at Karpagam College of Engineering (KCE), Coimbatore, Tamil Nadu, specializing in Artificial Intelligence and Data Science. I am proficient in Python, R, and various AI and data science tools and techniques. I am passionate about using technology to solve real-world problems and am eager to learn and grow in this field.
        </p>{" "}
        <br />
        <p>
        Love myself I do. Not everything, but I love the good as well as the bad. I love my crazy lifestyle, and I love my hard discipline. I love my freedom of speech and the way my eyes get dark when I'm tired. I love that I have learned to trust people with my heart, even if it will get broken. I am proud of everything that I am and will become.

Read More
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin href="https://github.com/arunkumar204"className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://drive.google.com/file/d/1pmbPh4w4eX4zSAV8i4FdJU5Xw1PMUhen/view?usp=sharing" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
