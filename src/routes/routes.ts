import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));

export const publicRoutes = {
    login: {
        path: "/login",
        name: "Log In",
        component: Login
    },
    signUp: {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp
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