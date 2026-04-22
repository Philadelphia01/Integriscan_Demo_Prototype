import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import {
  PlayCircle,
  FileText,
  Bell,
  LogOut,
  ChevronRight,
  MapPin,
  RefreshCw,
  WifiOff,
  Settings,
} from 'lucide-react';
import { Button } from './ui/button';
import { officerProfile, officerRecentActivity, roadNews } from '../demoData';

function SectionLabel({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-slate-400">{children}</h2>
      {action}
    </div>
  );
}

export function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-0 h-full flex-col bg-white">
      <header className="shrink-0 border-b border-slate-100 px-5 pb-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 pt-0.5">
            <p className="text-[15px] text-slate-500">Welcome</p>
            <h1 className="mt-0.5 truncate text-[26px] font-semibold tracking-tight text-slate-900">
              {officerProfile.firstName} {officerProfile.surname}
            </h1>
            <p className="mt-1 text-[12px] text-slate-500">
              {officerProfile.officerId} · {officerProfile.shiftWindow}
            </p>
          </div>
          <div className="flex shrink-0 gap-0">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Notifications"
            >
              <Bell className="h-[20px] w-[20px]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => navigate('/settings')}
              className="flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Settings"
            >
              <Settings className="h-[20px] w-[20px]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-red-600"
              aria-label="Log out"
            >
              <LogOut className="h-[20px] w-[20px]" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-slate-700">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            GPS active
          </span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-2 text-slate-600">
            <WifiOff className="h-4 w-4 text-slate-400" strokeWidth={2} />
            Working offline
          </span>
        </div>
        <p className="mt-2 flex items-start gap-2 text-[13px] leading-snug text-slate-500">
          <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} />
          Reports queue on this device and upload when you reconnect.
        </p>
      </header>

      <main className="min-h-0 flex-1 space-y-8 overflow-y-auto px-5 py-6 [-webkit-overflow-scrolling:touch]">
        <button
          type="button"
          onClick={() => navigate('/hotspots')}
          className="flex w-full items-center gap-4 rounded-2xl bg-[#102A43] p-4 text-left text-white transition active:opacity-95"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <MapPin className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">Hotspots</p>
            <p className="mt-0.5 text-[17px] font-semibold leading-snug">Incident map &amp; alerts</p>
            <p className="mt-1 text-[13px] text-white/70">Zones and notices for your shift</p>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-white/50" strokeWidth={2} />
        </button>

        <Button
          type="button"
          onClick={() => navigate('/scanner')}
          className="h-[50px] w-full rounded-xl bg-[#2D865F] text-[15px] font-semibold text-white shadow-none hover:bg-[#277556]"
        >
          <PlayCircle className="mr-2 h-5 w-5" strokeWidth={2} />
          Start new test
        </Button>

        <section>
          <SectionLabel>Recent activity</SectionLabel>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <ul className="divide-y divide-slate-100">
              {officerRecentActivity.map((activity) => (
                <li key={activity.id} className="flex items-center gap-3 px-4 py-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                    <FileText className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-slate-900">{activity.driver}</p>
                    <p className="text-[13px] text-slate-500">{activity.time}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span
                      className={`text-[11px] font-semibold uppercase ${
                        activity.result === 'PASSED' ? 'text-emerald-600' : 'text-red-600'
                      }`}
                    >
                      {activity.result}
                    </span>
                    <p className="mt-0.5 font-mono text-[12px] text-slate-600">
                      {activity.reading}{' '}
                      <span className="font-normal text-slate-400">g/100ml</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="road-updates">
          <SectionLabel
            action={
              <button type="button" className="text-[13px] font-medium text-[#102A43] hover:underline">
                See all
              </button>
            }
          >
            Road updates
          </SectionLabel>
          <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {roadNews.map((item) => (
              <article
                key={item.id}
                className="w-[188px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className={`h-20 ${item.tone}`} aria-hidden />
                <div className="p-3">
                  <p className="text-[13px] font-medium leading-snug text-slate-900 line-clamp-2">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-500 line-clamp-2">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="text-center text-[12px] leading-relaxed text-slate-400">
          Location services improve record accuracy and hotspot routing.
        </p>
      </main>
    </div>
  );
}
