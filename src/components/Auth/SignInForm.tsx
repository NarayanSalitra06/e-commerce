// import React, { useState } from 'react';

// import { Eye, EyeOff, LogIn } from 'lucide-react';

// const SignInForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle sign in logic here
//   };

//   return (
//     <>
//     <div className="w-full  max-w-md mx-auto p-6 mt-12 bg-white">
//       <h1 className="text-2xl font-bold text-center mb-8">SIGN IN</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="liam@acme.com"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
//               Forgot your password?
//             </a>
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors group flex items-center justify-center"
//         >
//           <span>Sign In</span>
//           <LogIn className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
//         </button>

//         <div className="text-center text-sm">
//           <span className="text-gray-600">New to Alphalete Athletics? </span>
//           <a href="#" className="text-blue-600 hover:text-blue-800">
//             Create An Account
//           </a>
//         </div>

//         <div className="relative flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <button
//           type="button"
//           className="w-full bg-[#5A31F4] text-white py-2 px-4 rounded-md hover:bg-[#4f2bd3] transition-colors text-base font-medium"
//         >
//           Sign in with shop
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default SignInForm;

import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-12 bg-white">
      <h1 className="text-2xl font-bold text-center mb-8">SIGN IN</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="liam@acme.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot your password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors group flex items-center justify-center"
        >
          <span>Sign In</span>
          <LogIn className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-600">New to Alphalete Athletics? </span>
          <Link to="/register" className="text-blue-600 hover:text-blue-800">
            Create An Account
          </Link>
        </div>

        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full bg-[#5A31F4] text-white py-2 px-4 rounded-md hover:bg-[#4f2bd3] transition-colors text-base font-medium"
        >
          Sign in with shop
        </button>
      </form>
    </div>
  );
};
export default SignInForm;