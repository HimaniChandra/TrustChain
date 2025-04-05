import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">Bitcoin Reputation</h1>
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
            <Link to="/staking" className="hover:text-blue-400 transition">Staking</Link>
            <Link to="/reputation" className="hover:text-blue-400 transition">Reputation</Link>
            <Link to="/audit-log" className="hover:text-blue-400 transition">Audit Log</Link>
          </nav>
        </div>
        <p className="text-sm text-gray-400 mt-10">© 2025</p>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
