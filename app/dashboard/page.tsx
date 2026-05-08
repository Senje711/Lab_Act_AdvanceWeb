import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';
import SignOutButton from './SignOutButton';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return (
    <div className="flex flex-col min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold border-b-2 border-black pb-2 mb-4 w-fit">
        Welcome to your Dashboard!
      </h1>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded shadow-sm w-fit">
        <p className="text-gray-800 font-medium">
          Logged in as:{' '}
          <span className="font-normal text-gray-600">{user.email}</span>
        </p>
        <p className="text-xs text-gray-400 mt-2 font-mono">
          User ID: {user.id}
        </p>
      </div>

      <SignOutButton />
    </div>
  );
}
