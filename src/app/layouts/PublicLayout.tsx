import { Outlet } from 'react-router';
import { PublicNav } from '../components/PublicNav';
import { Footer } from '../components/Footer';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--ca-paper)]">
      <PublicNav />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
