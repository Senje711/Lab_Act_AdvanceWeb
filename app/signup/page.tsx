'use client';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else {
      setMessage('Check email for confirmation!');
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white text-black">
      <h1 className="text-2xl font-bold">Create Account</h1>

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded w-72 focus:outline-none focus:border-black"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password (min 8 chars)"
        className="border border-gray-300 p-2 rounded w-72 focus:outline-none focus:border-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignUp}
        className="bg-black text-white px-6 py-2 rounded w-72 hover:bg-gray-800 transition-colors"
      >
        Sign Up
      </button>

      {message && <p className="text-sm text-red-500">{message}</p>}

      <a
        href="/login"
        className="text-gray-500 hover:text-black text-sm transition-colors"
      >
        Already have an account? Log in
      </a>
    </div>
  );
}
