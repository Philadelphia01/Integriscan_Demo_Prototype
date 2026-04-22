export function SupervisorSystemConfigScreen() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">System Configuration</h1>
        <p className="mt-1 text-sm text-[#486581]">Global admin controls for platform behavior and security.</p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#102A43]">Authentication Policy</h2>
          <p className="mt-2 text-sm text-slate-600">MFA: Required for Supervisor and Admin roles.</p>
          <p className="mt-1 text-sm text-slate-600">Session timeout: 30 minutes inactive.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#102A43]">Data Retention</h2>
          <p className="mt-2 text-sm text-slate-600">Evidence retention: 90 days.</p>
          <p className="mt-1 text-sm text-slate-600">Audit retention: 365 days.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#102A43]">Export Controls</h2>
          <p className="mt-2 text-sm text-slate-600">PDF export watermark: Enabled.</p>
          <p className="mt-1 text-sm text-slate-600">Excel export access: Admin only.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#102A43]">Environment</h2>
          <p className="mt-2 text-sm text-slate-600">Mode: Prototype demonstration.</p>
          <p className="mt-1 text-sm text-slate-600">Region: ZA-JHB-01.</p>
        </div>
      </section>
    </div>
  );
}

