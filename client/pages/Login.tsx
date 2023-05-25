import React from 'react';
import AuthLayout from "@/components/Auth/AuthLayout";
import LoginForm from "@/components/Auth/LoginForm"
const Login: React.FC = () => {
    return (
        <AuthLayout>
            <LoginForm/>
            <div>
                This is Login Page
            </div>
        </AuthLayout>
    );
};

export default Login;
