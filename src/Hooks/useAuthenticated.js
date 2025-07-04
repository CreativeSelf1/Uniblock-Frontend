import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null indica "cargando"
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/auth/check`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Not authenticated");

        const data = await res.json();
        setIsAuthenticated(data.authenticated);
      } catch (err) {
        console.error("Auth check error:", err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Opcional: verificar periódicamente (cada 5 min)
    const interval = setInterval(checkAuth, 300000);
    return () => clearInterval(interval);
  }, []);

  return isAuthenticated;
};
