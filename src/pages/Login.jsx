import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\S]{6}$/.test(password);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.includes(" ")) {
      setPasswordError("Password must not contain spaces.");
    } else if (value.length !== 6) {
      setPasswordError("Password must be exactly 6 characters.");
    } else if (!/[A-Za-z]/.test(value)) {
      setPasswordError("Password must include at least one letter.");
    } else if (!/\d/.test(value)) {
      setPasswordError("Password must include at least one digit.");
    } else if (!/[^A-Za-z0-9]/.test(value)) {
      setPasswordError("Password must include at least one special character.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!validateEmail(email)) {
      return setEmailError("Please enter a valid email address.");
    }

    if (!validatePassword(password)) {
      return setPasswordError("Invalid password format.");
    }

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setFormError(err.message || "Login failed. Please try again.");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setFormError(err.message || "Google Sign-in failed.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {formError && <p className="text-red-600 text-sm">{formError}</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a> */}
                <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
          </div>

          <button
            type="submit"
            disabled={emailError || passwordError}
            className="mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-indigo-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center mt-6 mb-4">
          <span className="text-sm text-gray-700">Or continue with</span>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleGoogle}
            className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Create your account
          </Link>
        </p>
      </div>
    </div>
  );
}
