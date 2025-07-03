import React from 'react';
import './WhatsApp.css' // Make sure to create this CSS file

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!"; // Add your custom WhatsApp link here

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
