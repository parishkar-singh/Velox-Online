import React from 'react';
import AuthLayout from "@/components/Auth/AuthLayout";
import RegistrationForm from "@/components/Auth/RegistrationForm";

const Register: React.FC = () => {
    return (
        <AuthLayout>
            <RegistrationForm/>
            <div>
                This is the register page
            </div>
        </AuthLayout>
    );
};

export default Register;
