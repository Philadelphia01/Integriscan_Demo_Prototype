import { useState, type ElementType, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import {
  ArrowLeft,
  User,
  Building2,
  Bell,
  Moon,
  Wifi,
  Trash2,
  HelpCircle,
  FileText,
  Info,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';

const OFFICER_ID = 'ISP-88421';
const STATION = 'Johannesburg Central';

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">{children}</h2>
  );
}

function Row({
  icon: Icon,
  iconBg,
  label,
  sublabel,
  children,
  onClick,
  className,
}: {
  icon: ElementType;
  iconBg: string;
  label: string;
  sublabel?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const inner = (
    <>
      <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', iconBg)}>
        <Icon className="h-5 w-5 text-slate-700" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-slate-900">{label}</p>
        {sublabel && <p className="mt-0.5 text-[13px] text-slate-500">{sublabel}</p>}
      </div>
      {children}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'flex w-full items-center gap-3 rounded-[16px] border border-slate-200/90 bg-white px-4 py-3 text-left shadow-sm transition hover:bg-slate-50/80 active:scale-[0.99]',
          className,
        )}
      >
        {inner}
        <ChevronRight className="h-5 w-5 shrink-0 text-slate-300" strokeWidth={2} />
      </button>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-[16px] border border-slate-200/90 bg-white px-4 py-3 shadow-sm',
        className,
      )}
    >
      {inner}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative h-7 w-12 shrink-0 rounded-full transition-colors',
        checked ? 'bg-[#4A80F0]' : 'bg-slate-200',
      )}
    >
      <span
        className={cn(
          'absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform',
          checked ? 'left-5' : 'left-0.5',
        )}
      />
    </button>
  );
}

export function SettingsScreen() {
  const navigate = useNavigate();
  const [shiftAlerts, setShiftAlerts] = useState(true);
  const [keepAwake, setKeepAwake] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(false);

  return (
    <div className="flex min-h-0 h-full flex-col bg-[#F2FAF8]">
      <header className="shrink-0 border-b border-slate-200/80 bg-white px-4 pb-3 pt-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Settings</h1>
        </div>
      </header>

      <main className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-5 [-webkit-overflow-scrolling:touch]">
        <section>
          <SectionTitle>Account</SectionTitle>
          <div className="space-y-2">
            <Row icon={User} iconBg="bg-sky-50" label="Officer ID" sublabel={OFFICER_ID} />
            <Row icon={Building2} iconBg="bg-emerald-50" label="Station / branch" sublabel={STATION} />
          </div>
        </section>

        <section>
          <SectionTitle>Preferences</SectionTitle>
          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-[16px] border border-slate-200/90 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <Bell className="h-5 w-5 text-slate-700" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-slate-900">Shift &amp; hotspot alerts</p>
                <p className="mt-0.5 text-[13px] text-slate-500">Push-style notices for your area</p>
              </div>
              <Toggle id="alerts" checked={shiftAlerts} onChange={setShiftAlerts} />
            </div>
            <div className="flex items-center gap-3 rounded-[16px] border border-slate-200/90 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                <Moon className="h-5 w-5 text-slate-700" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-slate-900">Keep screen awake during test</p>
                <p className="mt-0.5 text-[13px] text-slate-500">Stops dimming while breathalyser is active</p>
              </div>
              <Toggle id="awake" checked={keepAwake} onChange={setKeepAwake} />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Data &amp; sync</SectionTitle>
          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-[16px] border border-slate-200/90 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Wifi className="h-5 w-5 text-slate-700" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-slate-900">Sync over Wi‑Fi only</p>
                <p className="mt-0.5 text-[13px] text-slate-500">Save mobile data when uploading evidence</p>
              </div>
              <Toggle id="wifi" checked={wifiOnly} onChange={setWifiOnly} />
            </div>
            <Row
              icon={Trash2}
              iconBg="bg-red-50"
              label="Clear local cache"
              sublabel="Removes temporary scans on this device"
              onClick={() => alert('Demo: cache cleared.')}
            />
          </div>
        </section>

        <section>
          <SectionTitle>Support</SectionTitle>
          <div className="space-y-2">
            <Row
              icon={HelpCircle}
              iconBg="bg-slate-100"
              label="Help &amp; FAQ"
              sublabel="Procedures, limits, device help"
              onClick={() => alert('Demo: open help centre.')}
            />
            <Row
              icon={FileText}
              iconBg="bg-slate-100"
              label="Privacy &amp; data policy"
              onClick={() => alert('Demo: open privacy policy.')}
            />
          </div>
        </section>

        <section>
          <SectionTitle>About</SectionTitle>
          <Row icon={Info} iconBg="bg-slate-100" label="IntegriScan" sublabel="Version 1.0.0 · UI prototype" />
        </section>

        <Button
          type="button"
          variant="outline"
          onClick={() => navigate('/login')}
          className="h-12 w-full rounded-[14px] border-2 border-red-200 bg-white text-[15px] font-bold text-red-700 hover:bg-red-50"
        >
          <LogOut className="mr-2 h-5 w-5" strokeWidth={2} />
          Log out
        </Button>

        <p className="pb-4 text-center text-[11px] text-slate-400">
          Changes apply on this device only until connected to command.
        </p>
      </main>
    </div>
  );
}
