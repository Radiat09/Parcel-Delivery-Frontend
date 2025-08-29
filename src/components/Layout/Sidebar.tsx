// components/layout/Sidebar.tsx
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

interface SidebarProps {
  role?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
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
    <div className="hidden border-r bg-muted/40 md:block w-64">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span className="">Parcel Delivery</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "justify-start mb-1 w-full",
                    isActive && "bg-accent"
                  )}
                >
                  <Link to={item.href}>
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
