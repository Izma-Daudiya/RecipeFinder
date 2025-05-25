import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await resetPassword(email);
      setMessage('Password reset email sent! Please check your inbox.');
    } catch (err) {
      setError('Failed to send reset email. Please check your email.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-6">
      <h2 className="text-center text-2xl font-bold mb-6">Reset Your Password</h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
