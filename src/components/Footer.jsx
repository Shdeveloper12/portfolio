import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="primary">
          Copyright © {new Date().getFullYear()} - All right reserved by Md Shafayet Hossen
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
