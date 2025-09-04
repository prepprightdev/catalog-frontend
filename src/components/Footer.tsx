// src/components/Footer.tsx
import React from "react";
import colors from "../theme/colors";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundColor: colors.primary }}
      className="text-white p-4 mt-12"
    >
      <div className="max-w-7xl mx-auto text-center text-sm">
        © 2025 PreppRight.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
