import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { Bell, LogOut, Menu, Moon, Sun, User } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";

import { useTheme } from "@/hooks/use-theme";
import { toast } from "sonner";
import MobileSidebar from "./MobileSidebar";

const Header: React.FC = () => {
  const { user, isAuthenticated } = {
    user: { role: "USER" },
    isAuthenticated: true,
  };
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { theme, setTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <MobileSidebar role={user?.role} />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2 md:ml-auto md:gap-4">
        {isAuthenticated && (
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              className="absolute -right-1 -top-1 h-4 w-4 rounded-full p-0 flex items-center justify-center"
              variant="destructive"
            >
              3
            </Badge>
          </Button>
        )}

        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  to={
                    user?.role === "admin"
                      ? "/admin-dashboard/profile"
                      : user?.role === "receiver"
                      ? "/receiver-dashboard/profile"
                      : "/sender-dashboard/profile"
                  }
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
