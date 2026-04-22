import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import { testLogs } from '../../supervisor/mockData';

export function SupervisorLogsScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return testLogs;
    return testLogs.filter(
      (item) =>
        item.officerName.toLowerCase().includes(q) ||
        item.driverId.toLowerCase().includes(q) ||
        item.driverName.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="space-y-5">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Live Test Logs</h1>
          <p className="mt-1 text-sm text-[#486581]">Search and inspect every recorded test event</p>
        </div>
        <div className="relative w-[320px] max-w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by officer, driver ID, case ID..."
            className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none ring-[#4A80F0]/20 focus:border-[#4A80F0] focus:ring-4"
          />
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="max-h-[620px] overflow-auto">
          <table className="min-w-full text-left">
            <thead className="sticky top-0 z-10 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Timestamp</th>
                <th className="px-4 py-3 font-semibold">Officer</th>
                <th className="px-4 py-3 font-semibold">Driver ID</th>
                <th className="px-4 py-3 font-semibold">Result</th>
                <th className="px-4 py-3 font-semibold">Reading</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer transition-colors hover:bg-slate-50"
                  onClick={() => navigate(`/supervisor/evidence/${row.id}`)}
                >
                  <td className="px-4 py-3 whitespace-nowrap">{row.timestamp}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.officerName}</td>
                  <td className="px-4 py-3 font-mono whitespace-nowrap">{row.driverId}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        row.result === 'PASSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {row.result}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono font-semibold text-[#102A43]">{row.reading.toFixed(2)} g/100ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

