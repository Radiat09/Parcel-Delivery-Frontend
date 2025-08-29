// types.ts
export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  //   setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
  setTheme: () => void;
};

// types/index.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  role: "sender" | "receiver" | "admin";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Parcel {
  _id: string;
  trackingId: string;
  sender: string | User;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  weight: number;
  description?: string;
  status: ParcelStatus;
  statusHistory: StatusUpdate[];
  createdAt: string;
  updatedAt: string;
}

export type ParcelStatus =
  | "pending"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export interface StatusUpdate {
  status: ParcelStatus;
  timestamp: string;
  updatedBy: string | User;
  note?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
