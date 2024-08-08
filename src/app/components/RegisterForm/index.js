"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import axios from 'axios';
import { useRouter } from 'next/router';
import { setToken } from '@/utils';  // 确保这个工具函数存在，用于保存 JWT

export default function Component() {
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target.closest('form');
        const username = form.querySelector('[name="username"]').value;
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;
        const confirm_password = form.querySelector('[name="confirm_password"]').value;

        const values = { username, email, password, confirm_password };
        console.log(values)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = response.data;
            setToken(data.access);  // 保存 token
            setError(null);
            router.push('/dashboard');
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Registration failed');
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-black to-blue-950 p-2 sm:p-4 lg:p-8">
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
                <p className="pb-2 text-xl font-medium">Sign Up</p>
                {error && <p className="text-red-500">{error}</p>}
                <form className="flex flex-col gap-3">
                    <Input
                        isRequired
                        label="Username"
                        name="username"
                        placeholder="Enter your username"
                        type="text"
                        variant="bordered"
                    />
                    <Input
                        isRequired
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                    />
                    <Input
                        isRequired
                        endContent={
                            <button type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-closed-linear"
                                    />
                                ) : (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-bold"
                                    />
                                )}
                            </button>
                        }
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                    />
                    <Input
                        isRequired
                        endContent={
                            <button type="button" onClick={toggleConfirmVisibility}>
                                {isConfirmVisible ? (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-closed-linear"
                                    />
                                ) : (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-bold"
                                    />
                                )}
                            </button>
                        }
                        label="Confirm Password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                        type={isConfirmVisible ? "text" : "password"}
                        variant="bordered"
                    />
                    <Checkbox isRequired className="py-4" size="sm">
                        I agree with the&nbsp;
                        <Link href="#" size="sm">
                            Terms
                        </Link>
                        &nbsp; and&nbsp;
                        <Link href="#" size="sm">
                            Privacy Policy
                        </Link>
                    </Checkbox>
                    <Button color="primary" type="button" onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </form>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        startContent={<Icon icon="flat-color-icons:google" width={24} />}
                        variant="bordered"
                    >
                        Continue with Google
                    </Button>
                    <Button
                        startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
                        variant="bordered"
                    >
                        Continue with Github
                    </Button>
                </div>
                <p className="text-center text-small">
                    Already have an account?&nbsp;
                    <Link href="/login" size="sm">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
