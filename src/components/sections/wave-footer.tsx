import Image from "next/image";
import React from "react";

export const WaveFooter = () => {
  return (
    <footer className="fixed bottom-0">
      <Image
        src="/wave.svg"
        alt="wave-footer"
        className="w-full md:min-h-[102px]"
        width={100}
        height={100}
      />
    </footer>
  );
};
