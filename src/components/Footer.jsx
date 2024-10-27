import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex items-center justify-center min-h-[60px]">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
