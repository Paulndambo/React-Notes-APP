import React from 'react'
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

const AppUpdated = () => {
  return <AuthProvider>
    <App />
  </AuthProvider>
  
}

export default AppUpdated