import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Services"
        subtitle="The core repository for all information for all services in an organization. Each service is listed along with its current status and history."
      />

      {/* Services Card  */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
