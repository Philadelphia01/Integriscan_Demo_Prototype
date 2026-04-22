import { ReactNode } from 'react';
import { WifiOff } from 'lucide-react';

/** Matches common Figma iPhone presets (375×812) so Builder.io → Figma frames stay consistent. */
export const PHONE_FRAME_WIDTH = 375;
export const PHONE_FRAME_HEIGHT = 812;

interface MobileLayoutProps {
  children: ReactNode;
  showOfflineIndicator?: boolean;
}

export function MobileLayout({ children, showOfflineIndicator = false }: MobileLayoutProps) {
  return (
    <div
      className="min-h-dvh w-full flex items-center justify-center overflow-auto bg-zinc-200 p-4 sm:p-6"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        data-phone-frame
        className="relative flex shrink-0 flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.08]"
        style={{
          width: PHONE_FRAME_WIDTH,
          height: PHONE_FRAME_HEIGHT,
        }}
      >
        {showOfflineIndicator && (
          <div className="absolute right-4 top-4 z-50 flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
            <WifiOff className="h-3.5 w-3.5" />
            <span>Offline Mode</span>
          </div>
        )}
        {/* min-h-0 lets nested flex-1 + overflow-y-auto scroll inside the fixed frame */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
