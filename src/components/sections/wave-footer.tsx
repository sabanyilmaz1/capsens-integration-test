import Image from "next/image";
import React from "react";

export const WaveFooter = () => {
  return (
    <footer className="relative hidden md:block">
      <Image
        src="/wave.svg"
        alt="wave-footer"
        className="w-full "
        width={100}
        height={100}
      />
    </footer>
  );
};
