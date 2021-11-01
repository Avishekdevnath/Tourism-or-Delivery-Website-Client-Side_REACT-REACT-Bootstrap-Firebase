import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

// Code for useAuth
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;