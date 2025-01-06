// import React, { useState } from 'react';

// import { Eye } from 'lucide-react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const SignUpForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">REGISTER</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="firstName" className="block text-sm mb-2">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
//             placeholder="First Name"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="lastName" className="block text-sm mb-2">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
//             placeholder="Last Name"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm mb-2">Email Address:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
//             placeholder="Email"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm mb-2">Password:</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
//               placeholder="Password"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2"
//             >
//               <Eye className="h-5 w-5 text-gray-500" />
//             </button>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors"
//         >
//           CREATE MY ACCOUNT
//         </button>
        
//         <div className="text-center">
//           <a href="#" className="text-sm text-gray-600 hover:underline">
//             Return To Store
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle registration logic here
    // After successful registration, navigate to sign in
    navigate('/signin');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">REGISTER</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
            placeholder="First Name"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
            placeholder="Last Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-2">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-1"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
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
          <Link to="/signin" className="text-sm text-gray-600 hover:underline">
            Return To Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;