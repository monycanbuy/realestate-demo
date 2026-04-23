// import PlotTable from "@/components/PlotTable";
// import StatsCards from "@/components/StatsCards";
// import TaskPanel from "@/components/TaskPanel";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <StatsCards />
//       <TaskPanel />
//       <PlotTable />
//     </main>
//   );
// }

import StatsCards from "@/components/StatsCards";
import TaskPanel from "@/components/TaskPanel";
import PlotTable from "@/components/PlotTable";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>

        <Link
          href="/add-client"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Client
        </Link>
      </div>

      <StatsCards />
      <TaskPanel />
      <PlotTable />
    </main>
  );
}
