// import { Calendar, Users, CheckCircle } from "lucide-react";

// export default function EventStats() {
//   const stats = [
//     { title: "Total Bookings", value: "32", icon: Calendar },
//     { title: "Upcoming Events", value: "8", icon: Users },
//     { title: "Completed Events", value: "20", icon: CheckCircle },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {stats.map((s) => {
//         const Icon = s.icon;
//         return (
//           <div key={s.title} className="bg-white p-4 rounded-xl shadow">
//             <div className="flex justify-between">
//               <p className="text-gray-500">{s.title}</p>
//               <Icon size={18} />
//             </div>
//             <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import {
  CalendarDays,
  PartyPopper,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "32",
    change: "+18%",
    icon: CalendarDays,
    gradient: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    text: "text-rose-600",
    ring: "ring-rose-100",
  },
  {
    title: "Upcoming Events",
    value: "8",
    change: "This week",
    icon: PartyPopper,
    gradient: "from-amber-500 to-yellow-400",
    bg: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-100",
  },
  {
    title: "Completed Events",
    value: "20",
    change: "+9%",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-100",
  },
  {
    title: "Revenue (MTD)",
    value: "₦4.2M",
    change: "+32%",
    icon: DollarSign,
    gradient: "from-indigo-500 to-purple-400",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-100",
  },
];

export default function EventStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{
              animation: `cardIn 0.5s ease both`,
              animationDelay: `${i * 80}ms`,
            }}
          >
            {/* gradient halo */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
            />

            {/* top row: icon + change */}
            <div className="flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.bg} ${s.text} ring-1 ${s.ring}`}
              >
                <Icon size={20} />
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${s.bg} ${s.text}`}
              >
                {s.change}
              </span>
            </div>

            {/* title + value */}
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{s.title}</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                {s.value}
              </p>
            </div>

            {/* bottom accent bar */}
            <div
              className={`mt-4 h-1 w-full rounded-full bg-gradient-to-r ${s.gradient} opacity-70 transition-opacity group-hover:opacity-100`}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
