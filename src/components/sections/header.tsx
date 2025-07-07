import Image from "next/image";
import React from "react";

const ProfilInfo = () => {
  return (
    <div className="flex items-center md:gap-4">
      <Image
        src="/icons/User-icon.svg"
        alt="logo"
        width={30}
        height={30}
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="font-medium text-black">Jean Dupont</p>
        <p className="text-dark-grey text-sm">1 000 €</p>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header role="banner" className="w-full border-b border-grey">
      <div className="flex items-center justify-between md:h-24 layout-header">
        <Image
          src="/logo/capsens_logo.svg"
          alt="logo"
          width={167}
          height={48}
          className="h-12"
        />
        <ProfilInfo />
      </div>
    </header>
  );
};
