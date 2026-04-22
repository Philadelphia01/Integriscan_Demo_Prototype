import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { cn } from './ui/utils';

/** Matches reference: borders #E2E8F0, ~10px radius */
const inputClass =
  'h-12 w-full rounded-[10px] border border-[#E2E8F0] bg-white px-4 text-[15px] text-slate-900 shadow-none ring-0 transition placeholder:text-slate-400 focus-visible:border-[#102A43] focus-visible:ring-2 focus-visible:ring-[#102A43]/15';

const linkBlue = '#3182CE';
const hintMuted = '#5B7FA8';

export function RegistrationScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    officerId: '',
    station: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      alert('Password must contain 8 characters.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    navigate('/login');
  };

  return (
    <MobileLayout showOfflineIndicator={false}>
      <div className="flex min-h-0 flex-1 flex-col bg-white">
        <header className="relative flex shrink-0 items-center justify-center px-5 pt-8 pb-3">
          <Link
            to="/login"
            className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2E8F0] bg-slate-100 text-[#102A43] transition hover:bg-slate-200/80"
            aria-label="Back to login"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2} />
          </Link>
          <nav className="flex items-end gap-16">
            <Link
              to="/login"
              className="pb-2 text-[15px] font-bold text-[#102A43] transition hover:opacity-80"
            >
              Login
            </Link>
            <span className="border-b-[3px] border-[#102A43] pb-2 text-[15px] font-bold text-[#102A43]">
              Register
            </span>
          </nav>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-2 [-webkit-overflow-scrolling:touch]">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[15px] font-bold text-[#102A43]">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[15px] font-bold text-[#102A43]">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[15px] font-bold text-[#102A43]">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="officerId" className="text-[15px] font-bold text-[#102A43]">
                Officer ID
              </Label>
              <Input
                id="officerId"
                type="text"
                placeholder="e.g. OFC-12345"
                autoComplete="off"
                value={formData.officerId}
                onChange={(e) => setFormData({ ...formData, officerId: e.target.value })}
                className={inputClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="station" className="text-[15px] font-bold text-[#102A43]">
                Station / branch
              </Label>
              <Input
                id="station"
                type="text"
                placeholder="e.g. Sandton SAPS"
                autoComplete="organization"
                value={formData.station}
                onChange={(e) => setFormData({ ...formData, station: e.target.value })}
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
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={cn(inputClass, 'pr-12')}
                  minLength={8}
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
              <p className="text-[13px] font-medium" style={{ color: hintMuted }}>
                must contain 8 char.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-[15px] font-bold text-[#102A43]">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={cn(inputClass, 'pr-12')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="mt-1 h-14 w-full rounded-full border-0 bg-[#2D865F] text-[16px] font-bold text-white shadow-[0_6px_24px_-6px_rgba(45,134,95,0.55)] transition hover:bg-[#277556] active:scale-[0.99]"
            >
              Create Account
            </Button>

            <p className="px-1 pt-1 text-center text-[13px] leading-relaxed text-slate-500">
              By continuing, you agree to our{' '}
              <a
                href="#"
                className="font-medium underline underline-offset-2 hover:opacity-90"
                style={{ color: linkBlue }}
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="font-medium underline underline-offset-2 hover:opacity-90"
                style={{ color: linkBlue }}
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </MobileLayout>
  );
}
