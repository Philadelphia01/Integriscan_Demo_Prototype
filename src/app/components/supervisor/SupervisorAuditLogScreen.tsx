const auditRows = [
  { id: 'AUD-9011', actor: 'admin.khumo', action: 'Created officer account', target: 'SA-TRF-1440', time: '2026-04-07 09:12' },
  { id: 'AUD-9012', actor: 'admin.khumo', action: 'Updated role permissions', target: 'Supervisor', time: '2026-04-07 10:04' },
  { id: 'AUD-9013', actor: 'admin.khumo', action: 'Reset officer password', target: 'SA-TRF-1021', time: '2026-04-07 11:36' },
  { id: 'AUD-9014', actor: 'admin.khumo', action: 'Exported security log', target: 'March 2026', time: '2026-04-07 12:18' },
];

export function SupervisorAuditLogScreen() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Audit Log Access</h1>
        <p className="mt-1 text-sm text-[#486581]">Administrative traceability and security event history.</p>
      </header>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Audit ID</th>
              <th className="px-4 py-3">Actor</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Target</th>
              <th className="px-4 py-3">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {auditRows.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 font-mono">{row.id}</td>
                <td className="px-4 py-3">{row.actor}</td>
                <td className="px-4 py-3">{row.action}</td>
                <td className="px-4 py-3">{row.target}</td>
                <td className="px-4 py-3">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

