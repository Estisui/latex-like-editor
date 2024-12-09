import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/works');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <AuthForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default Login;
