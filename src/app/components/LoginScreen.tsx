import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, Fingerprint } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { cn } from './ui/utils';

/** Same as Register */
const inputClass =
  'h-12 w-full rounded-[10px] border border-[#E2E8F0] bg-white px-4 text-[15px] text-slate-900 shadow-none ring-0 transition placeholder:text-slate-400 focus-visible:border-[#102A43] focus-visible:ring-2 focus-visible:ring-[#102A43]/15';

const linkBlue = '#3182CE';

export function LoginScreen() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    officerId: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleBiometric = () => {
    navigate('/dashboard');
  };

  return (
    <MobileLayout showOfflineIndicator={false}>
      <div className="flex min-h-0 flex-1 flex-col bg-white">
        <header className="relative flex shrink-0 items-center justify-center px-5 pt-8 pb-3">
          <span className="border-b-[3px] border-[#102A43] pb-2 text-[15px] font-bold text-[#102A43]">Officer Login</span>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-2 [-webkit-overflow-scrolling:touch]">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="officerId" className="text-[15px] font-bold text-[#102A43]">
                Officer ID
              </Label>
              <Input
                id="officerId"
                type="text"
                placeholder="e.g. OFC-12345"
                autoComplete="username"
                value={credentials.officerId}
                onChange={(e) => setCredentials({ ...credentials, officerId: e.target.value })}
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[15px] font-bold text-[#102A43]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className={cn(inputClass, 'pr-12')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-[14px] font-semibold underline underline-offset-2 transition hover:opacity-90"
                style={{ color: linkBlue }}
                onClick={() => {}}
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="h-14 w-full rounded-full border-0 bg-[#2D865F] text-[16px] font-bold text-white shadow-[0_6px_24px_-6px_rgba(45,134,95,0.55)] transition hover:bg-[#277556] active:scale-[0.99]"
            >
              Login
            </Button>

            <button
              type="button"
              onClick={handleBiometric}
              className="flex w-full items-center justify-center gap-2 text-[15px] font-bold text-[#102A43] transition hover:opacity-80"
            >
              <Fingerprint className="h-5 w-5" strokeWidth={2} />
              Use biometrics
            </button>

            <p className="px-1 pt-2 text-center text-[13px] leading-relaxed text-slate-500">
              Officer accounts are created by your supervisor. Contact command center support if you need access.
            </p>
          </form>
        </div>
      </div>
    </MobileLayout>
  );
}
