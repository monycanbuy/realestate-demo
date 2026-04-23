import { MoreHorizontal, Phone, MapPin } from "lucide-react";

type Status = "New" | "Interested" | "Closed";

interface Lead {
  name: string;
  initials: string;
  phone: string;
  property: string;
  budget: string;
  status: Status;
  followUp: string;
  avatarColor: string;
}

const leads: Lead[] = [
  {
    name: "John Doe",
    initials: "JD",
    phone: "08012345678",
    property: "2BR Lekki",
    budget: "₦25M",
    status: "New",
    followUp: "Call tomorrow",
    avatarColor: "from-blue-500 to-indigo-500",
  },
  {
    name: "Sarah K.",
    initials: "SK",
    phone: "07098765432",
    property: "Land Ajah",
    budget: "₦10M",
    status: "Interested",
    followUp: "Send details",
    avatarColor: "from-pink-500 to-rose-500",
  },
  {
    name: "Mike A.",
    initials: "MA",
    phone: "08122233445",
    property: "Duplex VI",
    budget: "₦80M",
    status: "Closed",
    followUp: "—",
    avatarColor: "from-emerald-500 to-teal-500",
  },
  {
    name: "Linda O.",
    initials: "LO",
    phone: "08033445566",
    property: "3BR Ikoyi",
    budget: "₦45M",
    status: "Interested",
    followUp: "Schedule visit",
    avatarColor: "from-orange-500 to-amber-500",
  },
  {
    name: "David E.",
    initials: "DE",
    phone: "09011223344",
    property: "Land Epe",
    budget: "₦8M",
    status: "New",
    followUp: "Send brochure",
    avatarColor: "from-purple-500 to-fuchsia-500",
  },
];

const statusStyles: Record<Status, { bg: string; text: string; dot: string }> =
  {
    New: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-400",
    },
    Interested: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      dot: "bg-blue-500",
    },
    Closed: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
  };

export default function PlotTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {/* Table header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Property Inquiries
          </h2>
          <p className="text-sm text-slate-500">
            {leads.length} Client Requests
          </p>
        </div>
        <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95">
          + Add Lead
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/60 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Property</th>
              <th className="px-6 py-3">Budget</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Follow-up</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => {
              const s = statusStyles[lead.status];
              return (
                <tr
                  key={lead.name}
                  className="border-b border-slate-50 transition-colors hover:bg-slate-50/70"
                  style={{
                    animation: `rowIn 0.4s ease both`,
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${lead.avatarColor} text-xs font-bold text-white shadow-sm`}
                      >
                        {lead.initials}
                      </div>
                      <span className="font-semibold text-slate-900">
                        {lead.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Phone size={13} className="text-slate-400" />
                      {lead.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400" />
                      {lead.property}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {lead.budget}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full ${s.bg} ${s.text} px-2.5 py-1 text-xs font-semibold`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${s.dot} animate-pulse`}
                      />
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{lead.followUp}</td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>{`
        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
