import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import type { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";``
import Mainlayout from "@/layouts/Mainlayout";
import { PageLoad } from "@/components/PageLoad";

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
    return <PageLoad />;
  }

  return user ? <Mainlayout /> : <Navigate to={publicRoutes.login.path} />;
};

export default ProtectedRoute;
