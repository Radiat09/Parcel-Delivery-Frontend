import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import LandingPage from "@/pages/GrinderMachine/Landing.grinder";
import LoginForm from "@/pages/Login/LoginForm";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        Component: DashboardLayout,
        path: "dashboard",
      },
    ],
  },
  {
    Component: LoginForm,
    path: "login",
  },
]);
