import { Metadata } from "next";
import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";

interface ReactNode {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
  description: "Skaleway admin panel",
};

const AdminLayout = ({ children }: ReactNode) => {
  return (
    <ClerkProvider>
      <div className="flex w-full font-sans">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default AdminLayout;
