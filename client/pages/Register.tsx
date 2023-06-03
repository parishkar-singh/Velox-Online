import React from 'react';
import AuthLayout from "@/components/Auth/AuthLayout";
import RegistrationForm from "@/components/Auth/RegistrationForm";

const Register: React.FC = () => {
    return (
        <div className={``}>
            <AuthLayout>
                <RegistrationForm/>
                <div>
                    This is the register page
                </div>
            </AuthLayout>
        </div>
    );
};

export default Register;
