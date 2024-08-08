'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setRememberMe, togglePasswordVisibility } from '@/store/modules/user';
import { Button, Input, Checkbox, Link, Divider } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { setToken } from '@/utils';

export default function LoginForm() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { email, password, rememberMe, isVisible } = useSelector((state) => state.user);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = { email, password, rememberMe };
        setStatus('loading');
        console.log("准备发送请求", values); // 添加日志

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/react-login/', values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = response.data;
            console.log("成功的data:", data); // 添加日志
            const token = data.token
            setToken(token);  // 保存 token
            setStatus('succeeded');
            setError(null);
            // navigate('/dashboard');
            await router.push('/dashboard');
        } catch (error) {
            console.log("失败:", error); // 添加日志
            setStatus('failed');
            setError(error.response ? error.response.data.error : 'Login failed');
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-black to-blue-950 p-2 sm:p-4 lg:p-8">
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-large">
                <p className="pb-2 text-xl font-medium">Log In</p>
                {status === 'failed' && <p className="text-red-500">{error}</p>}
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Input
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    <Input
                        endContent={
                            <button type="button" onClick={() => dispatch(togglePasswordVisibility())}>
                                {isVisible ? (
                                    <Icon className="pointer-events-none text-2xl text-default-400" icon="solar:eye-closed-linear" />
                                ) : (
                                    <Icon className="pointer-events-none text-2xl text-default-400" icon="solar:eye-bold" />
                                )}
                            </button>
                        }
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        type={isVisible ? 'text' : 'password'}
                        variant="bordered"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                    <div className="flex items-center justify-between px-1 py-2">
                        <Checkbox
                            name="remember"
                            size="sm"
                            isSelected={rememberMe}
                            onChange={(e) => dispatch(setRememberMe(e.target.checked))}
                        >
                            Remember me
                        </Checkbox>
                        <Link className="text-default-500" href="#" size="sm">
                            Forgot password?
                        </Link>
                    </div>
                    <Button color="primary" type="submit" onClick={handleSubmit}>
                        Log In
                    </Button>
                </form>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button startContent={<Icon icon="flat-color-icons:google" width={24} />} variant="bordered">
                        Continue with Google
                    </Button>
                    <Button startContent={<Icon className="text-default-500" icon="fe:github" width={24} />} variant="bordered">
                        Continue with Github
                    </Button>
                </div>
                <p className="text-center text-small">
                    Need to create an account?&nbsp;
                    <Link href="/register" size="sm">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
