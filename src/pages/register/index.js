import RegisterForm from "@/app/components/RegisterForm"
import React from "react";
import "@/app/components/LoginForm/star.scss"

const Register = () => {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative z-10">
                <RegisterForm />
            </div>
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="layer1"></div>
                <div className="layer2"></div>
                <div className="layer3"></div>
                <div className="layer4"></div>
                <div className="layer5"></div>
                <div className="layer6"></div>
            </div>
        </div>
    )
}

export default Register