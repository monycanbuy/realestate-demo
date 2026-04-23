"use client";

import { Search, Filter, Bell, ChevronDown } from "lucide-react";
import StatsCards from "@/components/StatsCards";
import PlotTable from "@/components/PlotTable";
import TaskPanel from "@/components/TaskPanel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-md">
              A
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                ABC Properties
              </h1>
              <p className="text-xs text-slate-500">
                Lead Management Dashboard
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-xs font-bold text-white">
                AD
              </div>
              <span className="text-sm font-semibold text-slate-700">
                Admin
              </span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1440px] px-6 py-8">
        {/* Welcome */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Welcome back, <span className="text-indigo-600">Admin</span> 👋
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Here's what's happening with your pipeline today.
          </p>
        </div>

        {/* Stats */}
        <StatsCards />

        {/* Search */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search clients..."
              className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <button className="flex h-11 items-center gap-2 rounded-xl border px-4 text-sm">
            <Filter size={15} />
            Filter
          </button>
        </div>

        {/* TABLE + SIDE */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PlotTable />
          </div>
          <TaskPanel />
        </div>
      </main>
    </div>
  );
}
