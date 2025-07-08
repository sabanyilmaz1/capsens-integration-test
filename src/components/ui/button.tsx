import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      id="submit-button"
      type="submit"
      className="bg-primary-blue text-white px-4 py-2 rounded-lg max-w-56 md:h-14 h-10 font-semibold flex items-center justify-center gap-4"
    >
      {children}
    </button>
  );
};
