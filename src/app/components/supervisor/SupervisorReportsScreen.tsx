import { useMemo, useState } from 'react';
import { Download } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { testLogs } from '../../supervisor/mockData';
import { Button } from '../ui/button';

const RESULT_COLORS = ['#2D865F', '#D64545'];

export function SupervisorReportsScreen() {
  const [resultFilter, setResultFilter] = useState<'ALL' | 'FAILED'>('ALL');
  const [roadblockFilter, setRoadblockFilter] = useState('ALL');
  const [fromDate, setFromDate] = useState('2026-04-01');
  const [toDate, setToDate] = useState('2026-04-06');

  const roadblocks = useMemo(() => ['ALL', ...new Set(testLogs.map((x) => x.roadblock))], []);

  const filtered = useMemo(() => {
    return testLogs.filter((x) => {
      const logDate = x.timestamp.split(' ')[0];
      if (logDate < fromDate || logDate > toDate) return false;
      if (resultFilter === 'FAILED' && x.result !== 'FAILED') return false;
      if (roadblockFilter !== 'ALL' && x.roadblock !== roadblockFilter) return false;
      return true;
    });
  }, [fromDate, toDate, resultFilter, roadblockFilter]);

  const hourlyTrend = useMemo(() => {
    const base = Array.from({ length: 24 }, (_, hour) => ({
      hour: `${hour.toString().padStart(2, '0')}:00`,
      failures: 0,
    }));

    filtered.forEach((item) => {
      if (item.result !== 'FAILED') return;
      const hour = Number(item.timestamp.split(' ')[1]?.split(':')[0] ?? 0);
      if (!Number.isNaN(hour) && base[hour]) {
        base[hour].failures += 1;
      }
    });

    return base.filter((point) => point.failures > 0);
  }, [filtered]);

  const resultBreakdown = useMemo(() => {
    const passed = filtered.filter((x) => x.result === 'PASSED').length;
    const failed = filtered.length - passed;
    return [
      { name: 'Passed', value: passed },
      { name: 'Failed', value: failed },
    ];
  }, [filtered]);

  const topOfficerStats = useMemo(() => {
    const counts = new Map<string, number>();
    filtered.forEach((item) => {
      counts.set(item.officerName, (counts.get(item.officerName) ?? 0) + 1);
    });
    return [...counts.entries()]
      .map(([name, tests]) => ({ name, tests }))
      .sort((a, b) => b.tests - a.tests)
      .slice(0, 4);
  }, [filtered]);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Reports & Analytics</h1>
          <p className="mt-1 text-sm text-[#486581]">Court-ready exports and supervisory performance insight</p>
        </div>
        <a
          href="/reports/weekly-report-2026-W14.md"
          download
          className="inline-flex h-10 items-center rounded-md bg-[#102A43] px-4 text-sm font-medium text-white hover:bg-[#0b2033]"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Weekly Report File
        </a>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[#102A43]">Filters</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <label className="text-sm">
            <span className="mb-1 block text-slate-500">From</span>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-500">To</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-500">Result</span>
            <select
              value={resultFilter}
              onChange={(e) => setResultFilter(e.target.value as 'ALL' | 'FAILED')}
              className="h-10 w-full rounded-lg border border-slate-300 px-3"
            >
              <option value="ALL">All Results</option>
              <option value="FAILED">Fail Only</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-500">Roadblock</span>
            <select
              value={roadblockFilter}
              onChange={(e) => setRoadblockFilter(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-300 px-3"
            >
              {roadblocks.map((rb) => (
                <option key={rb} value={rb}>
                  {rb}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-3 text-sm text-slate-500">Showing {filtered.length} records for selected filters.</p>
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-[#102A43]">DUI Trends by Hour</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="hour" stroke="#64748B" />
                <YAxis allowDecimals={false} stroke="#64748B" />
                <Tooltip />
                <Line type="monotone" dataKey="failures" stroke="#102A43" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-[#102A43]">Result Breakdown</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={resultBreakdown} dataKey="value" nameKey="name" outerRadius={90} label>
                  {resultBreakdown.map((entry, idx) => (
                    <Cell key={entry.name} fill={RESULT_COLORS[idx % RESULT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-[#102A43]">Top Performing Officers</h2>
        <div className="space-y-3">
          {topOfficerStats.map((row) => (
            <div key={row.name} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
              <span className="text-sm font-medium text-slate-700">{row.name}</span>
              <span className="text-sm font-bold text-[#102A43]">{row.tests} tests</span>
            </div>
          ))}
          {topOfficerStats.length === 0 && <p className="text-sm text-slate-500">No officer activity in selected range.</p>}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-[#102A43]">Statement of Fact (Auto-generated Preview)</h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
          <p className="font-semibold text-[#102A43]">I, the undersigned, hereby certify under oath that:</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>I am a qualified traffic officer and certified operator of the listed breathalyser equipment.</li>
            <li>
              The specimen was provided under standard observation protocol, and the device result is recorded as
              tamper-evident data.
            </li>
            <li>
              The reading is evaluated against the legal limit based on driver category under the National Road
              Traffic Act.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

