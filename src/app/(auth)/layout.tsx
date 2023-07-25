import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 min-h-screen items-center justify-center backdrop-blur-sm bg-white/5">
      {children}
    </div>
  );
};

export default layout;
