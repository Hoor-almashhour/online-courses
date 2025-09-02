'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { login, register } from '@/redux/slices/authSlice';
import { RootState } from '@/redux/store';

const LoginRegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [hasTriedLogin, setHasTriedLogin] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username: loginForm.username, password: loginForm.password }));
    setHasTriedLogin(true); 
  };

  // Handle register
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    dispatch(
      register({
        id: Date.now(),
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password,
        name: registerForm.username,
      })
    );

    alert('Registered successfully. You can now log in.');
    setRegisterForm({ username: '', email: '', password: '', confirmPassword: '' });
  };

 
    useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, hasTriedLogin]);
  return (
    <section className="py-[60px]">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-6 mb-12">
        <div className="mx-6 md:mx-[70px]">
          <p className="text-gray-500 flex items-center">
            Homepage <span className="mx-2"><MdChevronRight /></span>
            <span className="font-medium text-gray-400">Home</span>
          </p>
        </div>
      </section>

      {/* Forms */}
      <div className="max-w-[89vw] mx-auto flex flex-col md:flex-row gap-10 justify-between">
        
        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full md:w-1/2 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">Login</h2>
          <div className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Email or username*"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password*"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              />
              <span
                className="absolute top-3.5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold"
            >
              Login
            </button>
            <p className="text-orange-500 text-sm cursor-pointer mt-2">
              Lost your password?
            </p>
          </div>
        </form>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="w-full md:w-1/2 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">Register</h2>
          <div className="mt-6 space-y-5">
            <input
              type="email"
              placeholder="Email*"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
              value={registerForm.email}
              onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Username*"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
              value={registerForm.username}
              onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
            />
            <div className="relative">
              <input
                type={showRegisterPassword ? 'text' : 'password'}
                placeholder="Password*"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              />
              <span
                className="absolute top-3.5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
              >
                {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password*"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
              />
              <span
                className="absolute top-3.5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginRegisterPage;
