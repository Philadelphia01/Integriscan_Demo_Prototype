import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Plus, Search } from 'lucide-react';
import { officerRegistry } from '../../supervisor/officerRegistryData';

export function SupervisorOfficersScreen() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return officerRegistry;
    return officerRegistry.filter(
      (item) =>
        item.firstName.toLowerCase().includes(q) ||
        item.lastName.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.station.toLowerCase().includes(q),
    );
  }, [query]);

  const performanceRows = [
    { id: 'SA-TRF-1182', name: 'Sgt. Nomsa Dlamini', station: 'Johannesburg Central', shift: '18:00 - 02:00', testsToday: 31, failRate: '18%', avgProcess: '06m 12s', status: 'On Patrol' },
    { id: 'SA-TRF-1021', name: 'Cst. Themba Maseko', station: 'Braamfontein', shift: '14:00 - 22:00', testsToday: 26, failRate: '13%', avgProcess: '05m 48s', status: 'Checkpoint' },
    { id: 'SA-TRF-1217', name: 'Cst. Refilwe Nkomo', station: 'Midrand', shift: '20:00 - 04:00', testsToday: 21, failRate: '11%', avgProcess: '05m 29s', status: 'On Patrol' },
  ];
  const statusTone: Record<string, string> = {
    'On Patrol': 'bg-emerald-100 text-emerald-700',
    Checkpoint: 'bg-sky-100 text-sky-700',
  };

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Officers</h1>
          <p className="mt-1 text-sm text-[#486581]">Manage shift rosters, add officers, and monitor deployment status.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/supervisor/officers/new" className="rounded-lg bg-[#102A43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b2033]">
            <Plus className="mr-1 inline h-4 w-4" /> Add Officer
          </Link>
          <button className="rounded-lg border border-[#102A43] px-4 py-2 text-sm font-semibold text-[#102A43] hover:bg-slate-50">
            Assign Officers to Shift
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Total active officers</p>
          <p className="mt-2 text-3xl font-bold text-[#102A43]">{officerRegistry.length}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Average tests / officer</p>
          <p className="mt-2 text-3xl font-bold text-[#102A43]">18.4</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Shift coverage health</p>
          <p className="mt-2 text-3xl font-bold text-[#102A43]">92%</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#102A43]">Officer Performance</h2>
            <label className="relative w-[260px] max-w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search officers..."
                className="h-9 w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-800"
              />
            </label>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-2 py-2">Officer</th>
                  <th className="px-2 py-2">Service No</th>
                  <th className="px-2 py-2">Shift</th>
                  <th className="px-2 py-2">Tests Today</th>
                  <th className="px-2 py-2">Fail Rate</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {performanceRows
                  .filter((row) => `${row.name} ${row.id} ${row.station}`.toLowerCase().includes(query.toLowerCase()))
                  .map((row) => (
                    <tr key={row.id} className="border-b border-slate-100 text-sm text-slate-700">
                      <td className="px-2 py-3">
                        <p className="font-semibold text-[#102A43]">{row.name}</p>
                        <p className="text-xs text-slate-500">{row.station}</p>
                      </td>
                      <td className="px-2 py-3 font-mono text-xs">{row.id}</td>
                      <td className="px-2 py-3">{row.shift}</td>
                      <td className="px-2 py-3 font-semibold text-[#102A43]">{row.testsToday}</td>
                      <td className="px-2 py-3">{row.failRate}</td>
                      <td className="px-2 py-3">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusTone[row.status]}`}>{row.status}</span>
                      </td>
                      <td className="px-2 py-3">
                        <Link to={`/supervisor/officers/${row.id}`} className="font-semibold text-[#102A43] hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#102A43]">Roster Assignment</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex justify-between"><span>06:00 - 14:00</span><span className="font-medium text-red-700">6 / 8 officers</span></li>
              <li className="flex justify-between"><span>14:00 - 22:00</span><span className="font-medium text-emerald-700">9 / 9 officers</span></li>
              <li className="flex justify-between"><span>22:00 - 06:00</span><span className="font-medium text-red-700">7 / 8 officers</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#102A43]">Live Deployment</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {filtered.slice(0, 4).map((officer) => (
                <li key={officer.id} className="flex justify-between">
                  <span>{officer.firstName} {officer.lastName}</span>
                  <span className="text-xs text-slate-500">{officer.station}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

