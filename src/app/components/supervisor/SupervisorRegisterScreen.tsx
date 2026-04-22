import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SupervisorRegisterScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    stationId: '',
    role: 'supervisor',
    password: '',
    confirmPassword: '',
  });

  const canSubmit =
    form.fullName.trim().length > 2 &&
    form.email.includes('@') &&
    form.stationId.trim().length > 2 &&
    form.password.length > 5 &&
    form.password === form.confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    localStorage.setItem('portalRole', form.role === 'admin' ? 'admin' : 'supervisor');
    navigate(form.role === 'admin' ? '/supervisor/admin/audit' : '/supervisor/dashboard');
  };

  return (
    <div className="min-h-dvh bg-[#F0F4F8] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] items-center justify-center">
        <div className="w-full max-w-[520px] rounded-2xl border border-slate-200 bg-white px-8 py-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43] text-white">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="text-[32px] font-bold tracking-tight text-[#102A43]">IntegriScan</h1>
            <p className="mt-1 text-sm text-[#334E68]">Create Supervisor Portal Account</p>
          </div>

          <div className="mb-6 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1">
            <Link
              to="/supervisor"
              className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-slate-500 transition hover:text-[#102A43]"
            >
              Login
            </Link>
            <span className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-[#102A43] shadow-sm">
              Register
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name" className="text-[#102A43]">Full Name</Label>
              <Input
                id="full-name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Nomsa Dlamini"
                className="h-11 border-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#102A43]">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="supervisor@integriscan"
                  className="h-11 border-slate-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="station-id" className="text-[#102A43]">Station ID</Label>
                <Input
                  id="station-id"
                  value={form.stationId}
                  onChange={(e) => setForm({ ...form, stationId: e.target.value })}
                  placeholder="JHB-CENTRAL-01"
                  className="h-11 border-slate-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-[#102A43]">Role</Label>
              <select
                id="role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm"
              >
                <option value="supervisor">Supervisor</option>
                <option value="admin">Super Admin</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#102A43]">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Create password"
                    className="h-11 border-slate-300 pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-[#102A43]">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirm ? 'text' : 'password'}
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    placeholder="Confirm password"
                    className="h-11 border-slate-300 pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="h-12 w-full bg-[#102A43] text-base font-semibold text-white hover:bg-[#0b2033]"
            >
              Create Portal Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

