import Parcels from "@/pages/Parcel/Parcels";
import type { ISidebarItems } from "@/types";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Parcels",
        url: "/user/parcels",
        component: Parcels,
      },
    ],
  },
];
