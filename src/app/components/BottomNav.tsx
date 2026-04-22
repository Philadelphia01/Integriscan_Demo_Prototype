import { NavLink } from 'react-router';
import { LayoutGrid, MapPinned, ScanLine } from 'lucide-react';
import { cn } from './ui/utils';

const sideTabs = [
  { to: '/dashboard', label: 'Home', Icon: LayoutGrid },
  { to: '/hotspots', label: 'Hotspots', Icon: MapPinned },
] as const;

export function BottomNav() {
  return (
    <nav
      className="relative shrink-0 border-t border-[#E2E8F0] bg-white pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_-8px_rgba(15,23,42,0.1)]"
      aria-label="Main navigation"
    >
      <ul className="flex items-end justify-between px-4 pb-1 pt-1">
        <li className="flex min-w-0 flex-1 justify-center">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              cn(
                'flex w-full max-w-[100px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-semibold transition-colors',
                isActive ? 'text-[#4A80F0]' : 'text-slate-400 hover:text-slate-600',
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors',
                    isActive ? 'bg-[#4A80F0]/12 text-[#4A80F0]' : 'bg-transparent',
                  )}
                >
                  <LayoutGrid className="h-5 w-5" strokeWidth={isActive ? 2.25 : 2} />
                </span>
                <span className="truncate">Home</span>
              </>
            )}
          </NavLink>
        </li>

        <li className="relative flex w-[72px] shrink-0 justify-center">
          <NavLink
            to="/scanner"
            className="absolute bottom-[calc(100%-0.25rem)] left-1/2 flex h-[52px] w-[52px] -translate-x-1/2 items-center justify-center rounded-full bg-[#4A80F0] text-white shadow-[0_8px_24px_-6px_rgba(74,128,240,0.75)] ring-4 ring-white transition hover:bg-[#3d6fd8] active:scale-[0.97]"
            aria-label="Scan — start new test"
          >
            <ScanLine className="h-6 w-6" strokeWidth={2.25} />
          </NavLink>
          <span className="invisible pt-10 text-[11px]">Scan</span>
        </li>

        <li className="flex min-w-0 flex-1 justify-center">
          <NavLink
            to="/hotspots"
            className={({ isActive }) =>
              cn(
                'flex w-full max-w-[100px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-semibold transition-colors',
                isActive ? 'text-[#4A80F0]' : 'text-slate-400 hover:text-slate-600',
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors',
                    isActive ? 'bg-[#4A80F0]/12 text-[#4A80F0]' : 'bg-transparent',
                  )}
                >
                  <MapPinned className="h-5 w-5" strokeWidth={isActive ? 2.25 : 2} />
                </span>
                <span className="truncate">Hotspots</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
