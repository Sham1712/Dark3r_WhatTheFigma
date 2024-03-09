    import React from 'react'
    import { FcGoogle } from "react-icons/fc";
    import h from '../assets/Hero.png'


    export const LoginPage = () => {
        return (
        <div className="bg-blue-200 flex items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                    Your email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Log In
                </button>
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot password?
                </a>
                </div>
                <div className="mt-4 text-center">
                <span className="text-gray-600">or</span>
                </div>
                <div className="mt-4 flex justify-center">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2 flex items-center"
                >
                    <FcGoogle className='w-5 h-5 mr-1' />
                    Google
                </button>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    <svg className="w-5 h-5 inline-block mr-1 mb-1" viewBox="0 0 24 24">
                    <path
                        fill="#3B5998"
                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                    />
                    </svg>
                    Facebook
                </button>
                </div>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Don't have an account?
                <a
                href="#"
                className="text-blue-500 hover:text-blue-800 font-bold"
                >Sign Up</a>
            </p>
            </div>
            <div className="md:w-1/2 p-8 bg-blue-200 flex items-center justify-center">
            <div>
                <h1 className="text-3xl font-bold mb-4">The future belongs to those who <span className='text-[#3062D4]'>believe</span> in the <span className='text-[#3062D4]'>beauty of their dreams</span>.</h1>
                <p className="text-gray-700 italic mb-8">- Eleanor Roosevelt</p>
                <img
                src={h}
                alt="Hero Image"
                className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            </div>
        </div>
        </div>
        )
    }
