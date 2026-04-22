import { NavLink, Outlet } from 'react-router';
import { LayoutDashboard, ClipboardList, Users, BarChart3, Shield, Settings, LogOut, ScrollText } from 'lucide-react';
import { cn } from '../ui/utils';

const supervisorLinks = [
  { to: '/supervisor/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/supervisor/logs', label: 'Logs', Icon: ClipboardList },
  { to: '/supervisor/officers', label: 'Officers', Icon: Users },
  { to: '/supervisor/reports', label: 'Reports', Icon: BarChart3 },
] as const;

const adminLinks = [
  { to: '/supervisor/admin/users', label: 'User Management', Icon: Users },
  { to: '/supervisor/admin/audit', label: 'Audit Log', Icon: ScrollText },
  { to: '/supervisor/admin/config', label: 'System Configuration', Icon: Settings },
] as const;

export function SupervisorLayout() {
  const role = (localStorage.getItem('portalRole') as 'supervisor' | 'admin' | null) ?? 'supervisor';
  const links = role === 'admin' ? adminLinks : supervisorLinks;

  return (
    <div className="min-h-dvh bg-[#F0F4F8] text-[#334E68]">
      <div className="mx-auto grid min-h-dvh max-w-[1440px] grid-cols-[250px_1fr]">
        <aside className="border-r border-white/10 bg-[#102A43] px-5 py-6 text-slate-100">
          <button
            type="button"
            onClick={() => window.location.assign(role === 'admin' ? '/supervisor/admin/users' : '/supervisor/dashboard')}
            className="mb-8 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Shield className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight">IntegriScan</span>
              <span className="block text-xs text-slate-300/80">
                {role === 'admin' ? 'Super Admin Console' : 'Supervisor Command Center'}
              </span>
            </span>
          </button>

          <nav className="space-y-1.5">
            {links.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive ? 'bg-[#4A80F0]/20 text-[#B3D4FF]' : 'text-slate-300 hover:bg-white/8 hover:text-white',
                  )
                }
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('portalRole');
              window.location.assign('/supervisor');
            }}
            className="mt-6 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
          >
            <LogOut className="h-4.5 w-4.5" strokeWidth={2} />
            <span>Logout</span>
          </button>
        </aside>

        <main className="min-w-0 px-8 py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

