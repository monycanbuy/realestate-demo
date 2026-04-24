// "use client";

// import BookingTable from "@/components/events/BookingTable";
// import EventTasks from "@/components/events/EventStats";
// import EventStats from "@/components/events/EventTasks";

// export default function EventDashboard() {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* HEADER */}
//       <header className="border-b bg-white px-6 py-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-xl font-bold">Lahl Event Center</h1>
//           <p className="text-sm text-gray-500">
//             Booking & Event Management Dashboard
//           </p>
//         </div>
//       </header>

//       {/* CONTENT */}
//       <main className="p-6 space-y-6">
//         <EventStats />
//         <EventTasks />
//         <BookingTable />
//       </main>
//     </div>
//   );
// }

"use client";

import { Search, Filter, Bell, ChevronDown } from "lucide-react";
import EventStats from "@/components/events/EventTasks";
import EventTasks from "@/components/events/EventStats";
import BookingTable from "@/components/events/BookingTable";

export default function EventDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/40">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-md">
              E
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Lahl Event Center
              </h1>
              <p className="text-xs text-slate-500">
                Booking & Event Management
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
            Welcome back, <span className="text-purple-600">Admin</span> 🎉
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Here's what's happening with your bookings today.
          </p>
        </div>

        {/* Stats */}
        <EventStats />

        {/* Search */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search clients, events..."
              className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-4 text-sm focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button className="flex h-11 items-center gap-2 rounded-xl border px-4 text-sm hover:bg-purple-50">
            <Filter size={15} />
            Filter
          </button>
        </div>

        {/* TABLE + SIDE */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingTable />
          </div>
          <EventTasks />
        </div>
      </main>
    </div>
  );
}
