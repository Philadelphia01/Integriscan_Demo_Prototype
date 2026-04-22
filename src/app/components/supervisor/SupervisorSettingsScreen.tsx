export function SupervisorSettingsScreen() {
  return (
    <div className="space-y-5">
      <header className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Settings</h1>
        <p className="mt-2 text-sm text-[#486581]">
          Configure command center preferences, report defaults, and role-based access policies.
        </p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#102A43]">General Preferences</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-[#102A43]">Default report interval</p>
            <p className="mt-1 text-sm text-slate-600">Weekly</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-[#102A43]">Evidence auto-retention</p>
            <p className="mt-1 text-sm text-slate-600">90 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}

