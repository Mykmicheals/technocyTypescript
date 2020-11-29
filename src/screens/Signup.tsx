import React from 'react';

const SignupForm = () => {
    return (
        <form className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign Up</h1>
            <label
                className="block font-bold text-gray-700 mb-2"
                htmlFor="email"
            >
                Email/ username
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                id="email"
            />
            <label
                className="block font-bold text-gray-700 mb-2 mt-4"
                htmlFor="password"
            >
                Password
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                id="password"
            />
            <button
                className="w-full py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
