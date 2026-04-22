const users = [
  { id: 'usr_supervisor_01', name: 'Nomsa Dlamini', role: 'Supervisor', station: 'Johannesburg Central', status: 'Active' },
  { id: 'usr_supervisor_02', name: 'Themba Maseko', role: 'Supervisor', station: 'Braamfontein East', status: 'Active' },
  { id: 'usr_admin_01', name: 'Khumo Ndlovu', role: 'Admin', station: 'HQ Command', status: 'Active' },
  { id: 'usr_supervisor_03', name: 'Refilwe Nkomo', role: 'Supervisor', station: 'Allandale Slip', status: 'Pending' },
];

export function SupervisorAdminUsersScreen() {
  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">User Management</h1>
          <p className="mt-1 text-sm text-[#486581]">Create, activate, and manage Supervisor/Admin portal users.</p>
        </div>
        <button className="rounded-lg bg-[#102A43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b2033]">
          Add New User
        </button>
      </header>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Station</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {users.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 font-mono text-xs">{row.id}</td>
                <td className="px-4 py-3 font-medium text-[#102A43]">{row.name}</td>
                <td className="px-4 py-3">{row.role}</td>
                <td className="px-4 py-3">{row.station}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      row.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-sm font-semibold text-[#102A43] hover:underline">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

