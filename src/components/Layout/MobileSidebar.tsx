// components/layout/MobileSidebar.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  Info,
  LayoutDashboard,
  Package,
  Phone,
  Settings,
  Truck,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

interface MobileSidebarProps {
  role?: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ role }) => {
  const location = useLocation();

  const publicItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const senderItems = [
    { name: "Dashboard", href: "/sender-dashboard", icon: LayoutDashboard },
    { name: "Create Parcel", href: "/sender-dashboard/create", icon: Package },
    { name: "My Parcels", href: "/sender-dashboard/parcels", icon: Truck },
  ];

  const receiverItems = [
    { name: "Dashboard", href: "/receiver-dashboard", icon: LayoutDashboard },
    {
      name: "Incoming Parcels",
      href: "/receiver-dashboard/incoming",
      icon: Package,
    },
    {
      name: "Delivery History",
      href: "/receiver-dashboard/history",
      icon: Truck,
    },
  ];

  const adminItems = [
    { name: "Dashboard", href: "/admin-dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/admin-dashboard/users", icon: Users },
    { name: "Parcels", href: "/admin-dashboard/parcels", icon: Package },
    { name: "Analytics", href: "/admin-dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin-dashboard/settings", icon: Settings },
  ];

  // Combine public items with role-specific items if user is authenticated
  const items = [
    ...publicItems,
    ...(role === "admin"
      ? adminItems
      : role === "receiver"
      ? receiverItems
      : role
      ? senderItems
      : []),
  ];

  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold mb-6"
      >
        <Package className="h-6 w-6" />
        <span className="sr-only">Parcel Delivery</span>
        Parcel Delivery
      </Link>

      {items.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;

        return (
          <Button
            key={item.name}
            asChild
            variant={isActive ? "secondary" : "ghost"}
            className={cn("justify-start w-full", isActive && "bg-accent")}
          >
            <Link to={item.href}>
              <Icon className="mr-2 h-5 w-5" />
              {item.name}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};

export default MobileSidebar;
