import React, { useState } from 'react';

type FormData = {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SignupForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState<FormData>({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const errors: FormData = {
            firstName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        let isValid = true;

        if (!formData.firstName) {
            isValid = false;
            errors.firstName = 'First name is required';
        }
        if (!formData.email) {
            isValid = false;
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            errors.email = 'Email is invalid';
        }
        if (!formData.password) {
            isValid = false;
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            isValid = false;
            errors.password = 'Password must be at least 6 characters';
        }
        if (!formData.confirmPassword) {
            isValid = false;
            errors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            isValid = false;
            errors.confirmPassword = 'Passwords do not match';
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            // submit form data
        } else {
            setIsSubmitting(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign Up</h1>
            <label
                className="block font-bold text-gray-700 mb-2"
                htmlFor="firstName"
            >
                First Name
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                id="firstName"
            />
            <label
                className="block font-bold text-gray-700 mb-2 mt-4"
                htmlFor="email"
            >
                Email
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
            <label
                className="block font-bold text-gray-700 mb-2 mt-4"
                htmlFor="confirmPassword"
            >
                Confirm Password
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
            />
            <button
                className="w-full py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Sign Up
            </button>
        </form>
    );
}

export default SignupForm;
