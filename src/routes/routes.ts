import Auth from "@/pages/Auth";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));

export const publicRoutes = {
    login: {
        path: "/",
        name: "Auth",
        component: Auth
    }
}

export const publicRoutesArr = Object.values(publicRoutes);

export const protectedRoutes = {
    dashboard: {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    }
};

export const protectedRoutesArr = Object.values(protectedRoutes);