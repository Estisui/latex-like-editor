import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import { Toaster } from './components/ui/toaster';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <Toaster />
    </AuthProvider>
  );
};

export default App;