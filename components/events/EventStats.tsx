// export default function EventTasks() {
//   const tasks = [
//     "Confirm Saturday wedding booking",
//     "Call decorator",
//     "Prepare chairs and tables",
//     "Send invoice to client",
//   ];

//   return (
//     <div className="bg-white p-4 rounded-xl shadow">
//       <h2 className="font-bold mb-3">Today's Tasks</h2>

//       <ul className="space-y-2 text-sm">
//         {tasks.map((t, i) => (
//           <li key={i} className="border p-2 rounded">
//             {t}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { CheckCircle2, Circle, CalendarHeart, Sparkles } from "lucide-react";

interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  done: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Confirm Saturday wedding booking",
    time: "9:00 AM",
    color: "bg-rose-500",
    done: false,
  },
  {
    id: 2,
    title: "Call decorator",
    time: "11:00 AM",
    color: "bg-amber-500",
    done: true,
  },
  {
    id: 3,
    title: "Prepare chairs and tables",
    time: "1:00 PM",
    color: "bg-emerald-500",
    done: false,
  },
  {
    id: 4,
    title: "Send invoice to client",
    time: "3:30 PM",
    color: "bg-indigo-500",
    done: false,
  },
  {
    id: 5,
    title: "Final walkthrough with couple",
    time: "5:00 PM",
    color: "bg-pink-500",
    done: false,
  },
];

export default function EventTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggle = (id: number) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  const completed = tasks.filter((t) => t.done).length;
  const progress = Math.round((completed / tasks.length) * 100);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 text-white shadow-md">
            <CalendarHeart size={17} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Today&apos;s Events
            </h3>
            <p className="text-xs text-slate-500">
              {completed} of {tasks.length} completed
            </p>
          </div>
        </div>
        <Sparkles size={18} className="text-amber-400" />
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-1.5 text-right text-xs font-semibold text-slate-500">
          {progress}%
        </p>
      </div>

      {/* Tasks */}
      <ul className="mt-4 space-y-2">
        {tasks.map((task, i) => (
          <li
            key={task.id}
            style={{
              animation: `taskIn 0.4s ease both`,
              animationDelay: `${i * 70}ms`,
            }}
          >
            <button
              onClick={() => toggle(task.id)}
              className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all hover:shadow-sm ${
                task.done
                  ? "border-slate-100 bg-slate-50"
                  : "border-slate-100 bg-white hover:border-rose-200"
              }`}
            >
              <span className="flex-shrink-0">
                {task.done ? (
                  <CheckCircle2 className="text-emerald-500" size={20} />
                ) : (
                  <Circle
                    className="text-slate-300 group-hover:text-rose-400"
                    size={20}
                  />
                )}
              </span>
              <span
                className={`h-2 w-2 flex-shrink-0 rounded-full ${task.color}`}
              />
              <span
                className={`flex-1 text-sm font-medium ${
                  task.done ? "text-slate-400 line-through" : "text-slate-800"
                }`}
              >
                {task.title}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {task.time}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Add task button */}
      <button className="mt-4 w-full rounded-xl border-2 border-dashed border-slate-200 py-2.5 text-sm font-semibold text-slate-500 transition-all hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-600">
        + Add new event task
      </button>

      <style>{`
        @keyframes taskIn {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
