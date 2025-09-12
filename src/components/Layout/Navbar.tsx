// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { role } from "@/constants/role";
// import {
//   authApi,
//   useLogoutMutation,
//   useUserInfoQuery,
// } from "@/redux/features/auth/auth.api";
// import { useAppDispatch } from "@/redux/hook";
// // import Cookies from "js-cookie";
// import { Package } from "lucide-react";
// import { Link } from "react-router";
// import ThemeToggle from "../theme-toggle";
// // Navigation links array to be used in both desktop and mobile menus
// const navigationLinks = [
//   { href: "/", label: "Home", role: "PUBLIC" },
//   { href: "/about", label: "About", role: "PUBLIC" },
//   { href: "/contact", label: "Contact", role: "PUBLIC" },
//   { href: "/track-my-parcel", label: "My Parcel", role: role?.user },
//   {
//     href: "/admin",
//     label: "Dashboard",
//     roles: [role?.admin, role?.superAdmin], // Use array of allowed roles
//   },
//   // { href: "/admin", label: "Dashboard", role: role?.superAdmin },
//   { href: "/user", label: "Dashboard", role: role?.user },
//   { href: "/sender", label: "Dashboard", role: role?.sender },
// ];

// export default function Navbar() {
//   const { data } = useUserInfoQuery(undefined);

//   console.log(data);
//   const [logout] = useLogoutMutation();
//   const dispatch = useAppDispatch();

//   console.log(data);
//   const handleLogout = async () => {
//     await logout(undefined);
//     dispatch(authApi.util.resetApiState());
//     dispatch(authApi.util.invalidateTags(["USER"]));
//   };

//   const shouldShowLink = (link) => {
//     if (link.role === "PUBLIC") return true;
//     if (link.roles) {
//       return link.roles.includes(data?.data?.role);
//     }
//     return link.role === data?.data?.role;
//   };

//   return (
//     <header className="border-b">
//       <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
//         {/* Left side */}
//         <div className="flex items-center gap-2">
//           {/* Mobile menu trigger */}
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 className="group size-8 md:hidden"
//                 variant="ghost"
//                 size="icon"
//               >
//                 <svg
//                   className="pointer-events-none"
//                   width={16}
//                   height={16}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M4 12L20 12"
//                     className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//                   />
//                   <path
//                     d="M4 12H20"
//                     className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//                   />
//                   <path
//                     d="M4 12H20"
//                     className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//                   />
//                 </svg>
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent align="start" className="w-36 p-1 md:hidden">
//               <NavigationMenu className="max-w-none *:w-full">
//                 <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
//                   {navigationLinks.map(
//                     (link, index) =>
//                       shouldShowLink(link) && (
//                         <NavigationMenuItem key={index}>
//                           <NavigationMenuLink
//                             asChild
//                             className="text-muted-foreground hover:text-primary py-1.5 font-medium"
//                           >
//                             <Link to={link.href}>{link.label}</Link>
//                           </NavigationMenuLink>
//                         </NavigationMenuItem>
//                       )
//                   )}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </PopoverContent>
//           </Popover>
//           {/* Main nav */}
//           <div className="flex items-center gap-6">
//             <div className="text-primary hover:text-primary/90">
//               <Link
//                 to="/"
//                 className="flex items-center text-primary font-bold text-xl"
//               >
//                 <Package className="w-8 h-8 mr-2" />
//                 ParcelDelivery
//               </Link>
//             </div>
//             {/* Navigation menu */}
//             <NavigationMenu className="max-md:hidden">
//               <NavigationMenuList className="gap-2">
//                 {navigationLinks.map(
//                   (link, index) =>
//                     shouldShowLink(link) && (
//                       <NavigationMenuItem key={index}>
//                         <NavigationMenuLink
//                           asChild
//                           className="text-muted-foreground hover:text-primary py-1.5 font-medium"
//                         >
//                           <Link to={link.href}>{link.label}</Link>
//                         </NavigationMenuLink>
//                       </NavigationMenuItem>
//                     )
//                 )}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         </div>
//         {/* Right side */}
//         <div className="flex items-center gap-2">
//           {/* <ModeToggle /> */}
//           <ThemeToggle />
//           {data?.data?.email && (
//             <Button
//               onClick={handleLogout}
//               variant="outline"
//               className="text-sm"
//             >
//               Logout
//             </Button>
//           )}
//           {!data?.data?.email && (
//             <Button asChild className="text-sm">
//               <Link to="/login">Login</Link>
//             </Button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { role } from "@/constants/role";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Package } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ThemeToggle from "../theme-toggle";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/track-my-parcel", label: "My Parcel", role: role?.user },
  {
    href: "/admin",
    label: "Dashboard",
    roles: [role?.admin, role?.superAdmin],
  },
  { href: "/user", label: "Dashboard", role: role?.user },
  { href: "/sender", label: "Dashboard", role: role?.sender },
  { href: "/reciver", label: "Dashboard", role: role?.reciver },
  { href: "/delivery", label: "Dashboard", role: role?.DELIVERY_MAN },
];

export default function Navbar() {
  const { data, isLoading, isError, refetch } = useUserInfoQuery(undefined);
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();

      // Clear the Redux store cache for auth
      dispatch(authApi.util.resetApiState());

      // Invalidate all tags to force refetch
      dispatch(authApi.util.invalidateTags(["USER"]));

      // Force a refetch of user info to ensure it's cleared
      refetch();

      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const shouldShowLink = (link) => {
    if (link.role === "PUBLIC") return true;
    if (link.roles) {
      return link.roles.includes(data?.data?.role);
    }
    return link.role === data?.data?.role;
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map(
                    (link, index) =>
                      shouldShowLink(link) && (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <div className="text-primary hover:text-primary/90">
              <Link
                to="/"
                className="flex items-center text-primary font-bold text-xl"
              >
                <Package className="w-8 h-8 mr-2" />
                ParcelDelivery
              </Link>
            </div>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map(
                  (link, index) =>
                    shouldShowLink(link) && (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {data?.data?.email && (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm"
              disabled={isLoggingOut}
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </Button>
          )}
          {!data?.data?.email && !isLoading && (
            <Button asChild className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
