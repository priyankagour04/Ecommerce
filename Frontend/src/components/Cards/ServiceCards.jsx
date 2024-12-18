import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiMoneyWavy } from "react-icons/pi";
import { MdLockOpen } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

// Reusable Card Component
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 py-10 flex flex-col">
      <Icon className="text-4xl mb-4 text-primary" /> {/* Customizable icon */}
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  // Service data
  const services = [
    {
      Icon: TbTruckDelivery,
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      Icon: PiMoneyWavy,
      title: "Money Back",
      description: "30 days guarantee",
    },
    {
      Icon: MdLockOpen,
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      Icon: FiPhoneCall,
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];

  return (
    <div className="container mx-auto px-16 py-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
