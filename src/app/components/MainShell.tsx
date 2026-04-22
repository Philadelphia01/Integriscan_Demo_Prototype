import { Outlet } from 'react-router';
import { MobileLayout } from './MobileLayout';
import { BottomNav } from './BottomNav';

/** Logged-in shell: phone frame + scrollable main + bottom tab bar. */
export function MainShell() {
  return (
    <MobileLayout showOfflineIndicator={false}>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="min-h-0 flex-1 overflow-hidden">
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </MobileLayout>
  );
}
