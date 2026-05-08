import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';
import Link from 'next/link';

export default async function SuccessPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white text-black">
      <div className="text-6xl">✅</div>

      <h1 className="text-4xl font-bold text-center">
        SUCCESSFUL GITHUB SIGN-IN
      </h1>

      <div className="bg-green-50 border border-green-300 p-6 rounded shadow-sm max-w-md">
        <p className="text-gray-800 font-medium mb-2">Welcome, {user.email}!</p>
        <p className="text-xs text-gray-600 font-mono">ID: {user.id}</p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/login"
          className="border border-black bg-white text-black px-6 py-2 rounded hover:bg-gray-50 transition-colors"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
