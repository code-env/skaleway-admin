import { useMemo } from "react";
import { Settings, LayoutGrid, PenSquare, MessageCircle } from "lucide-react";

export const useSidebarRoutes = () => {
  const routes = useMemo(
    () => [
      [
        {
          name: "Dashboard",
          icon: LayoutGrid,
          path: "/",
        },
        {
          name: "Create",
          icon: PenSquare,
          path: "/create",
        },
        {
          name: "Messages",
          icon: MessageCircle,
          path: "/messages",
        },
      ],
      [
        {
          name: "Settings",
          icon: Settings,
          path: "/settings",
        },
      ],
    ],
    []
  );

  return routes;
};
