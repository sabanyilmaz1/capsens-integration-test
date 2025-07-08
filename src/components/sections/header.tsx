import Image from "next/image";
import React from "react";

const ProfilInfo = () => {
  return (
    <div className="flex items-center md:gap-4 gap-2">
      <Image
        src="/icons/User-icon.svg"
        alt="logo"
        width={30}
        height={30}
        className="md:w-8 md:h-8 w-6 h-6"
      />
      <div className="flex flex-col">
        <p className="font-medium md:text-base text-sm text-black">
          Jean Dupont
        </p>
        <p className="text-dark-grey md:text-sm text-xs">1 000 €</p>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header role="banner" className="w-full border-b border-grey bg-white">
      <div className="flex items-center justify-between md:h-24 h-16 layout-header">
        <Image
          src="/logo/capsens_logo.svg"
          alt="logo"
          width={167}
          height={48}
          className="md:h-12 h-6 md:w-[167px] w-24"
        />
        <ProfilInfo />
      </div>
    </header>
  );
};
