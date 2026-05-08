'use client';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button
      onClick={handleSignOut}
      className="mt-6 border border-black bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors w-fit"
    >
      Sign Out
    </button>
  );
}
