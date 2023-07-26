"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--color-orange)",
          color: "var(--color-neutral)",
          border: "1px solid hsl(var(--border))",
        },
      }}
    />
  );
}
