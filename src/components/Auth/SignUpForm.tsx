import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle registration logic here
    // After successful registration, navigate to sign in
    navigate('/signin');
  };

  return (
    <div className="flex items-center mt-12 justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-4 bg-white ">
        <h1 className="text-3xl font-bold text-center mb-4">REGISTER</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-1">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm mb-1">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              placeholder="Last Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                <Eye className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            CREATE MY ACCOUNT
          </button>

          <div className="text-center">
            <Link to="/signin" className="text-sm text-gray-800 hover:underline">
              Return To Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
