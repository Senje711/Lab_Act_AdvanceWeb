'use client';
import { useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  const handleOAuth = async (provider: 'google' | 'github') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white text-black">
      <h1 className="text-2xl font-bold">Sign In</h1>

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded w-72 focus:outline-none focus:border-black"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 rounded w-72 focus:outline-none focus:border-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-2 rounded w-72 hover:bg-gray-800 transition-colors"
      >
        Sign In with Email
      </button>

      <div className="flex items-center w-72 my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-xs text-gray-500 uppercase tracking-widest">
          or
        </span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button
        onClick={() => handleOAuth('google')}
        className="border border-black bg-white text-black px-6 py-2 rounded w-72 hover:bg-gray-50 transition-colors"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => handleOAuth('github')}
        className="border border-black bg-white text-black px-6 py-2 rounded w-72 hover:bg-gray-50 transition-colors"
      >
        Sign in with GitHub
      </button>

      {error && (
        <p className="text-sm text-red-500 text-center w-72">{error}</p>
      )}

      <a
        href="/signup"
        className="text-gray-500 hover:text-black text-sm transition-colors mt-2"
      >
        No account? Sign up
      </a>
    </div>
  );
}
