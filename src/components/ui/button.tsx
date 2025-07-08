import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      id="submit-button"
      type="submit"
      className="bg-primary-blue animation-hover text-white px-4 py-2 rounded-lg md:max-w-56 max-w-40 md:h-14 h-10 font-semibold flex items-center justify-center gap-4 cursor-pointer"
    >
      {children}
    </button>
  );
};
