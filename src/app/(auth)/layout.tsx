import React, { FC } from "react";

interface RootProps {
  children: React.ReactNode;
}

const AuthLayout: FC<RootProps> = ({ children }: RootProps) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 min-h-screen items-center justify-center backdrop-blur-sm bg-white/5 flex">
      {children}
    </div>
  );
};

export default AuthLayout;
