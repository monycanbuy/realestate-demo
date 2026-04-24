import { MoreHorizontal, Phone, CalendarDays } from "lucide-react";

type Status = "Pending" | "Confirmed" | "Completed";

interface Booking {
  name: string;
  initials: string;
  phone: string;
  event: string;
  date: string;
  status: Status;
  note: string;
  avatarColor: string;
}

const bookings: Booking[] = [
  {
    name: "Ngozi & Chinedu",
    initials: "NC",
    phone: "08012345678",
    event: "Wedding",
    date: "May 12",
    status: "Confirmed",
    note: "Hall reserved",
    avatarColor: "from-pink-500 to-rose-500",
  },
  {
    name: "Tunde A.",
    initials: "TA",
    phone: "07098765432",
    event: "Birthday",
    date: "April 28",
    status: "Pending",
    note: "Awaiting deposit",
    avatarColor: "from-blue-500 to-indigo-500",
  },
  {
    name: "Aisha Events",
    initials: "AE",
    phone: "08122233445",
    event: "Conference",
    date: "June 5",
    status: "Completed",
    note: "Successfully hosted",
    avatarColor: "from-emerald-500 to-teal-500",
  },
];

const statusStyles = {
  Pending: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  Confirmed: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },
  Completed: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
};

export default function BookingTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Event Bookings</h2>
          <p className="text-sm text-slate-500">
            {bookings.length} upcoming & past events
          </p>
        </div>

        <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:scale-105">
          + New Booking
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-xs uppercase text-slate-500">
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Event</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Note</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => {
              const s = statusStyles[b.status];
              return (
                <tr
                  key={b.name}
                  className="border-b hover:bg-slate-50"
                  style={{
                    animation: `fadeIn 0.4s ease both`,
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${b.avatarColor}`}
                    >
                      {b.initials}
                    </div>
                    <span className="font-semibold text-slate-900">
                      {b.name}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-600 flex items-center gap-1">
                    <Phone size={13} />
                    {b.phone}
                  </td>

                  <td className="px-6 py-4">{b.event}</td>

                  <td className="px-6 py-4 flex items-center gap-1">
                    <CalendarDays size={13} />
                    {b.date}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${s.bg} ${s.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                      {b.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-500">{b.note}</td>

                  <td className="px-6 py-4">
                    <MoreHorizontal size={16} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
