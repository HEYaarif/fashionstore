import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";

const Dashboard = () => {
  return (
    <main className="ml-62 min-h-screen bg-slate-700 p-8">
      <header className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight text-white">WELCOME!</h3>
        <div className="flex items-center gap-5">
          <FiBell className="h-5 w-5 cursor-pointer text-slate-300 transition-colors hover:text-white" />
          <FiSettings className="h-5 w-5 cursor-pointer text-slate-300 transition-colors hover:text-white" />
          <img
            src="https://i.pravatar.cc/30"
            alt="user"
            className="h-8 w-8 rounded-full border border-slate-600 object-cover"
          />
        </div>
      </header>

      <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
        We regret to inform you that our server is currently experiencing technical issues.
      </div>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-4 rounded-xl border border-slate-600 bg-slate-800 p-5">
          <span className="text-2xl">📦</span>
          <div>
            <h4 className="text-sm font-medium text-slate-400">Total Orders</h4>
            <p className="mt-1 text-xl font-semibold text-white">13,647</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-600 bg-slate-800 p-5">
          <span className="text-2xl">🔔</span>
          <div>
            <h4 className="text-sm font-medium text-slate-400">New Leads</h4>
            <p className="mt-1 text-xl font-semibold text-white">9,526</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-600 bg-slate-800 p-5">
          <span className="text-2xl">🔐</span>
          <div>
            <h4 className="text-sm font-medium text-slate-400">Deals</h4>
            <p className="mt-1 text-xl font-semibold text-white">976</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-600 bg-slate-800 p-5">
          <span className="text-2xl">💰</span>
          <div>
            <h4 className="text-sm font-medium text-slate-400">Booked Revenue</h4>
            <p className="mt-1 text-xl font-semibold text-white">$123.6K</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;