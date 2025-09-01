import { Parcel } from "@/pages/Admin/Parcels";
import type { ISidebarItems } from "@/types";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Parcels",
        url: "/user/parcels",
        component: Parcel,
      },
    ],
  },
];
