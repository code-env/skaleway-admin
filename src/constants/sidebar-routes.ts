import { useMemo } from "react";
import { Settings, LayoutGrid, PenSquare, MessageCircle } from "lucide-react";

export const useSidebarRoutes = () => {
  const routes = useMemo(
    () => [
      [
        {
          name: "Dashboard",
          icon: LayoutGrid,
          path: "/admin",
        },
        {
          name: "Create",
          icon: PenSquare,
          path: "/admin/create",
        },
        {
          name: "Messages",
          icon: MessageCircle,
          path: "/admin/messages",
        },
      ],
      [
        {
          name: "Settings",
          icon: Settings,
          path: "/admin/settings",
        },
      ],
    ],
    []
  );

  return routes;
};
