import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SupervisorLoginScreen() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'supervisor' | 'admin'>('supervisor');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [stationId, setStationId] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = username.trim().length > 1 && password.length > 3 && stationId.trim().length > 1;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    localStorage.setItem('portalRole', role);
    navigate(role === 'admin' ? '/supervisor/admin/users' : '/supervisor/dashboard');
  };

  return (
    <div className="min-h-dvh bg-[#F0F4F8] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] items-center justify-center">
        <div className="w-full max-w-[480px] rounded-2xl border border-slate-200 bg-white px-8 py-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43] text-white">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="text-[32px] font-bold tracking-tight text-[#102A43]">IntegriScan</h1>
            <p className="mt-1 text-sm text-[#334E68]">Supervisor / Super Admin Portal</p>
          </div>

          <div className="mb-6 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1">
            <span className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-[#102A43] shadow-sm">Login</span>
            <Link
              to="/supervisor/register"
              className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-slate-500 transition hover:text-[#102A43]"
            >
              Register
            </Link>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="portal-role" className="text-[#102A43]">
                Portal role
              </Label>
              <select
                id="portal-role"
                value={role}
                onChange={(e) => setRole(e.target.value as 'supervisor' | 'admin')}
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm"
              >
                <option value="supervisor">Supervisor</option>
                <option value="admin">Super Admin</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="supervisor-username" className="text-[#102A43]">
                Username
              </Label>
              <Input
                id="supervisor-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="supervisor@integriscan"
                className="h-11 border-slate-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supervisor-password" className="text-[#102A43]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="supervisor-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
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
              <Label htmlFor="station-id" className="text-[#102A43]">
                Station ID
              </Label>
              <Input
                id="station-id"
                value={stationId}
                onChange={(e) => setStationId(e.target.value)}
                placeholder="JHB-CENTRAL-01"
                className="h-11 border-slate-300"
              />
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="h-12 w-full bg-[#102A43] text-base font-semibold text-white hover:bg-[#0b2033]"
            >
              Enter {role === 'admin' ? 'Admin Console' : 'Command Center'}
            </Button>
            <p className="text-xs text-slate-500">
              Traffic officers are mobile-login only. Registration and access provisioning are managed by supervisors/admin.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

