import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const ServicesData = [
  {
    name: "UX research",
    description: "The study of learning what end users of a system or product need and want, then employing those insights to enhance the design process for products, services or software.",
    icon: <AiFillLayout className="text-1xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "App Development",
    description: "The process of planning, designing, creating, testing, and deploying a software application to perform various business operations.",
    icon: <MdOutlinePhoneAndroid className="text-1xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description: "The tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.",
    icon: <HiMiniComputerDesktop className="text-1xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description: "A wide array of investments, such as stocks, bonds, notes, debentures, limited partnership interests.",
    icon: <MdSecurity className="text-1xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-1">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-1">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
