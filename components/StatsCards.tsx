import { Users, UserCheck, CheckCircle2, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "124",
    change: "+12%",
    icon: Users,
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-100",
  },
  {
    title: "Active Clients",
    value: "38",
    change: "+5%",
    icon: UserCheck,
    gradient: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    text: "text-orange-600",
    ring: "ring-orange-100",
  },
  {
    title: "Closed Deals",
    value: "12",
    change: "+24%",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-100",
  },
  {
    title: "Follow-ups Today",
    value: "6",
    change: "Today",
    icon: Clock,
    gradient: "from-purple-500 to-fuchsia-400",
    bg: "bg-purple-50",
    text: "text-purple-600",
    ring: "ring-purple-100",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              animation: `cardIn 0.5s cubic-bezier(0.22,1,0.36,1) both`,
              animationDelay: `${i * 80}ms`,
            }}
          >
            {/* gradient halo */}
            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
            />

            <div className="flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.bg} ${s.text} ring-4 ${s.ring}`}
              >
                <Icon size={20} />
              </div>
              <span
                className={`text-xs font-semibold ${s.text} bg-white/60 backdrop-blur px-2 py-1 rounded-full`}
              >
                {s.change}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{s.title}</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                {s.value}
              </p>
            </div>

            {/* bottom accent bar */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${s.gradient} transition-all duration-500 group-hover:w-full`}
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
