import { useNavigate } from 'react-router';

export function SupervisorAddOfficerScreen() {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-6">
        <p className="text-sm font-semibold text-slate-400">Supervisor / Admin</p>
        <h1 className="text-4xl font-bold text-[#102A43]">Add New Officer</h1>
        <p className="mt-2 text-sm text-slate-500">Enter the officer details below to add them to the command system.</p>
      </header>

      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">First Name</span>
            <input className="h-11 w-full rounded-lg border border-slate-300 px-3" placeholder="Nomsa" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Last Name</span>
            <input className="h-11 w-full rounded-lg border border-slate-300 px-3" placeholder="Dlamini" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Date of Birth</span>
            <input type="date" className="h-11 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Rank</span>
            <select className="h-11 w-full rounded-lg border border-slate-300 px-3">
              <option>Constable</option>
              <option>Sergeant</option>
              <option>Inspector</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Email</span>
            <input type="email" className="h-11 w-full rounded-lg border border-slate-300 px-3" placeholder="officer@integriscan.gov.za" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Phone Number</span>
            <input className="h-11 w-full rounded-lg border border-slate-300 px-3" placeholder="+27 ..." />
          </label>
        </div>

        <label className="text-sm">
          <span className="mb-1 block text-slate-600">Address</span>
          <textarea className="min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Street, suburb, city" />
        </label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Create Password</span>
            <input type="password" className="h-11 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Confirm Password</span>
            <input type="password" className="h-11 w-full rounded-lg border border-slate-300 px-3" />
          </label>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate('/supervisor/officers')}
            className="h-11 w-full rounded-lg bg-[#102A43] text-sm font-semibold text-white hover:bg-[#0b2033]"
          >
            Add Officer
          </button>
        </div>
      </form>
    </div>
  );
}

