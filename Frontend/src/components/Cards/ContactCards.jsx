import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const ContactCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-100 p-6 lg:px-14 text-center flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200">
    <Icon className="text-4xl mb-4 text-gray-800" aria-label={title} />
    <div className="font-semibold">
      <p className="text-gray-600">{title}</p>
      <p>{description}</p>
    </div>
  </div>
);

const ContactCards = () => {
  return (
    <>
     <div className="container mx-auto">
     <div className="text-center text-4xl font-semibold ">
        <h1>Contact Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:px-20 xl:px-20  md:p-6">
        <ContactCard
          icon={MdOutlineHomeWork}
          title="ADDRESS"
          description="234 Hai Trieu, Ho Chi Minh City, Viet Nam"
        />
        <ContactCard
          icon={FiPhoneCall}
          title="CONTACT US"
          description="+84 234 567 890"
        />
        <ContactCard
          icon={IoMailOutline}
          title="EMAIL"
          description="hello@3legant.com"
        />
      </div>
     </div>
    </>
  );
};

export default ContactCards;
