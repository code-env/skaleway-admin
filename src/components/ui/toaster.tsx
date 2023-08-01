"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "white",
          color: "black",
          border: "1px solid hsl(var(--border))",
        },
      }}
      visibleToasts={6}
    />
  );
}
