import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { hotspotPins } from '../demoData';

/** Bundled Google Maps screenshot — `public/maps/johannesburg-map.png` (Figma / Builder safe). */
const MAP_IMAGE = '/maps/johannesburg-map.png';

type Hotspot = { id: string; top: string; left: string; label: string };

/** Positions tuned for portrait JHB metro screenshot (Sandton north, Joburg centre, east corridor). */
const HOTSPOTS: Hotspot[] = hotspotPins;

function HotspotPin({ top, left, label }: Hotspot) {
  return (
    <div
      className="pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center"
      style={{ top, left }}
    >
      <div className="relative flex flex-col items-center">
        <span className="absolute bottom-1 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#EF4444]/30 blur-lg motion-safe:animate-[hotspotGlow_2s_ease-in-out_infinite]" />
        <motion.div
          className="relative z-10 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MapPin
            className="h-10 w-10 text-[#EF4444]"
            fill="currentColor"
            stroke="#7f1d1d"
            strokeWidth={1.25}
          />
        </motion.div>
        <span className="mt-0.5 max-w-[92px] rounded-md bg-black/80 px-1.5 py-0.5 text-center text-[9px] font-bold leading-tight text-white shadow-md">
          {label}
        </span>
      </div>
    </div>
  );
}

export function HotspotsMapScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-0 h-full flex-col bg-[#0c1829]">
        <style>{`
          @keyframes hotspotGlow {
            0%, 100% { opacity: 0.45; transform: translate(-50%, 0) scale(1); }
            50% { opacity: 0.9; transform: translate(-50%, 0) scale(1.12); }
          }
        `}</style>
        <div className="flex shrink-0 items-center gap-3 bg-[#102A43] px-4 py-3 text-white shadow-md">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="rounded-lg p-2 transition-colors hover:bg-white/10"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold leading-tight">Johannesburg hotspots</h1>
            <p className="text-xs text-blue-200">Google Maps snapshot · static asset</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-[#EF4444]/20 px-2.5 py-1 text-xs font-bold text-[#FECACA] ring-1 ring-[#EF4444]/40">
            <AlertTriangle className="h-3.5 w-3.5 text-[#EF4444]" />
            {HOTSPOTS.length}
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#1a2332]">
          {/* Real file in /public — img always paints in screenshots & Builder */}
          <img
            src={MAP_IMAGE}
            alt="Johannesburg and surrounds — map overview"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={375}
            height={640}
            decoding="async"
            fetchPriority="high"
          />

          <div className="absolute bottom-[18%] left-1/2 z-[5] -translate-x-1/2">
            <div className="relative flex flex-col items-center">
              <span className="absolute inline-flex h-9 w-9 rounded-full bg-sky-400/30 motion-safe:animate-ping" />
              <span className="relative z-10 h-3 w-3 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.85)]" />
              <p className="mt-1 whitespace-nowrap text-[10px] font-semibold text-white drop-shadow-md">
                You are here
              </p>
            </div>
          </div>

          {HOTSPOTS.map((h) => (
            <HotspotPin key={h.id} {...h} />
          ))}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-5 pt-16">
            <div className="pointer-events-auto rounded-xl border border-white/10 bg-[#102A43]/95 p-3 shadow-xl backdrop-blur-md">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-white">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#EF4444] shadow-[0_0_8px_#EF4444]" />
                Hotspots (demo)
              </p>
              <p className="text-[11px] leading-relaxed text-blue-100/85">
                Red pins: demo priority zones. Blue dot: your position. Basemap:{' '}
                <span className="font-mono text-[10px] text-white/90">public/maps/johannesburg-map.png</span>
                . Google Maps imagery © Google — use only per their terms.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
