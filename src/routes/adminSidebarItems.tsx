import CreateParcelForm from "@/components/Parcel/CreateParcelForm";
import ParcelTracker from "@/components/Parcel/ParcelTracker";
import User from "@/pages/User/User";
import type { ISidebarItems } from "@/types";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        component: User,
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Create Parcel",
        url: "/admin/create-parcel",
        component: CreateParcelForm,
      },
      {
        title: "Track parcel",
        url: "/admin/track-parcel",
        component: ParcelTracker,
      },
    ],
  },
];
