import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const logout = async () => {
    try {
      await fetch(`${backendUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      navigate("/");
      window.location.reload(); // Recargamos la página para asegurarnos de que el estado de la sesión se actualice
    }
  };

  return { logout };
};

export default useLogout;
