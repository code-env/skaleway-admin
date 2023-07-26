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
      <html lang="en">
        <body>
          <div className="flex w-full font-sans">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Header />
              <div className="p-10">{children}</div>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default AdminLayout;

// app/layout.tsx
// import "@/styles/globals.css";
// import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }
