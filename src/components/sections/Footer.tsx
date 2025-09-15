import React from "react";

import SocialMediaLinks from "../SocialMediaLinks";
import ThemeToggle from "../ThemeToggle";
import { FooterMyName } from "@/constant";

export default function Footer() {
  return (
    <footer 
      className="relative border-t border-neutral-400/20 px-6 py-10" 
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="wrapper grid gap-6 md:grid-cols-3 md:items-center">
        {/* Left: Copyright */}
        <p className="text-foreground/80 text-sm text-center md:text-left">
          © {new Date().getFullYear()} {FooterMyName}. All rights reserved.
        </p>

        {/* Center: Social Icons */}
        <div className="flex justify-center">
          <SocialMediaLinks />
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex justify-center md:justify-end">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
