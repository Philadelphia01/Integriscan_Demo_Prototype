import { useNavigate } from 'react-router';
import { Activity, AlertTriangle, ShieldAlert, Users } from 'lucide-react';
import { todayStats } from '../../supervisor/mockData';

function StatCard({
  label,
  value,
  Icon,
  accent,
  onClick,
}: {
  label: string;
  value: number;
  Icon: React.ElementType;
  accent: string;
  onClick?: () => void;
}) {
  const Comp = onClick ? 'button' : 'div';
  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-[#102A43]">{value}</p>
        </div>
        <span className={`rounded-lg p-2 ${accent}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </Comp>
  );
}

export function SupervisorDashboardScreen() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Overview Dashboard</h1>
          <p className="mt-1 text-sm text-[#486581]">Today&apos;s enforcement activity at a glance</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-45" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
          </span>
          <span className="text-sm font-medium text-emerald-900">Live sync active</span>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Tests"
          value={todayStats.totalTests}
          Icon={Activity}
          accent="bg-sky-50 text-sky-700"
          onClick={() => navigate('/supervisor/logs')}
        />
        <StatCard
          label="Total Failures"
          value={todayStats.totalFailures}
          Icon={ShieldAlert}
          accent="bg-red-50 text-red-700"
        />
        <StatCard
          label="Active Officers"
          value={todayStats.activeOfficers}
          Icon={Users}
          accent="bg-violet-50 text-violet-700"
        />
        <StatCard
          label="Pending Reviews"
          value={todayStats.pendingReviews}
          Icon={AlertTriangle}
          accent="bg-amber-50 text-amber-700"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-[#102A43]">Hotspot Map</h2>
        <p className="mb-4 mt-1 text-sm text-[#627D98]">Live test concentration across Johannesburg precincts</p>
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
          <img
            src="/maps/johannesburg-map.png"
            alt="Johannesburg hotspot map"
            className="h-[320px] w-full object-cover"
          />
          <span className="absolute left-[34%] top-[42%] h-3 w-3 rounded-full bg-red-500 ring-4 ring-red-500/25" />
          <span className="absolute left-[50%] top-[25%] h-3 w-3 rounded-full bg-red-500 ring-4 ring-red-500/25" />
          <span className="absolute left-[64%] top-[34%] h-3 w-3 rounded-full bg-red-500 ring-4 ring-red-500/25" />
        </div>
      </section>
    </div>
  );
}

