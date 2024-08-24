import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import type { User } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { publicRoutes } from "./routes";
import Mainlayout from "@/layouts/Mainlayout";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Mainlayout /> : <Navigate to={publicRoutes.login.path} />;
};

export default ProtectedRoute;
