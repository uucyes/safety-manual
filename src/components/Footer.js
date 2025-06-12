import React from "react";
import emergencyImg from "../assets/emergency-contact.jpg";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="company-logo">
  <img src="/images/company-logo.jpg" alt="회사 로고" />
</div>

      <button
        className="emergency-contact"
        onClick={() =>
          window.open(emergencyImg, "_blank", "noopener,noreferrer")
        }
      >
        📞 비상연락망
      </button>
    </footer>
  );
};

export default Footer;