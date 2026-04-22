import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  ArrowLeft,
  ScanLine,
  AlertCircle,
  IdCard,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function LicenseScanner() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => {
        navigate('/verification');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [scanning, navigate]);

  return (
    <div className="flex min-h-0 h-full flex-col bg-[#0B1220]">
      {/* Top bar */}
      <header className="relative z-20 flex shrink-0 items-center gap-3 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-bold tracking-tight text-white">License scan</h1>
          <p className="text-[12px] text-slate-400">Capture driver card for verification</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D865F]/25 text-[#6EE7B7]">
          <Sparkles className="h-4 w-4" strokeWidth={2} />
        </div>
      </header>

      {/* Viewfinder */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pb-2">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,420px)] w-[min(120%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D865F]/[0.12] blur-3xl"
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col items-center justify-center py-4">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Align card in frame
          </p>

          <div className="relative w-full max-w-[300px]">
            <div className="aspect-[1.586/1] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-slate-800/90 to-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/[0.03]" />

              {/* Corners */}
              <div className="absolute left-3 top-3 h-9 w-9 rounded-tl-[14px] border-l-[3px] border-t-[3px] border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.35)]" />
              <div className="absolute right-3 top-3 h-9 w-9 rounded-tr-[14px] border-r-[3px] border-t-[3px] border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.35)]" />
              <div className="absolute bottom-3 left-3 h-9 w-9 rounded-bl-[14px] border-b-[3px] border-l-[3px] border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.35)]" />
              <div className="absolute bottom-3 right-3 h-9 w-9 rounded-br-[14px] border-b-[3px] border-r-[3px] border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.35)]" />

              {scanning && (
                <motion.div
                  className="absolute left-2 right-2 z-10 h-[2px] rounded-full bg-[#34D399] shadow-[0_0_16px_4px_rgba(52,211,153,0.65)]"
                  initial={{ top: '12%' }}
                  animate={{ top: ['12%', '88%', '12%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                />
              )}

              <div className="absolute inset-5 flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/25">
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <IdCard className="h-7 w-7 text-white/45" strokeWidth={1.75} />
                </div>
                <ScanLine className="h-6 w-6 text-emerald-400/50" strokeWidth={2} />
                <p className="mt-2 px-4 text-center text-[11px] font-medium text-slate-400">
                  {scanning ? 'Reading chip & barcode…' : 'Hold steady — avoid glare'}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span className={`h-1.5 w-1.5 rounded-full ${scanning ? 'bg-emerald-400/80' : 'bg-slate-600'}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${scanning ? 'animate-pulse bg-emerald-400/60' : 'bg-slate-600'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="relative z-20 shrink-0 rounded-t-[28px] bg-[#F2FAF8] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-6 shadow-[0_-16px_40px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/60">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-slate-300/80" aria-hidden />

        {!scanning ? (
          <>
            <p className="mb-4 text-center text-[15px] font-semibold text-slate-800">Ready when you are</p>
            <Button
              type="button"
              onClick={() => setScanning(true)}
              className="h-[52px] w-full rounded-[14px] border-0 bg-[#2D865F] text-[16px] font-bold text-white shadow-md shadow-[#2D865F]/25 transition hover:bg-[#277556] active:scale-[0.99]"
            >
              <ScanLine className="mr-2 h-5 w-5" strokeWidth={2} />
              Start scan
            </Button>
            <button
              type="button"
              onClick={() => navigate('/verification')}
              className="mt-3 w-full py-2 text-[14px] font-semibold text-[#4A80F0] transition hover:text-[#3d6fd8]"
            >
              Skip — manual entry
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center py-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="mb-3 text-[#2D865F]"
            >
              <RefreshCw className="h-8 w-8" strokeWidth={2} />
            </motion.div>
            <p className="text-[16px] font-bold text-slate-900">Processing license…</p>
            <p className="mt-1 text-center text-[13px] text-slate-500">Extracting details securely</p>
          </div>
        )}

        <div className="mt-5 flex gap-3 rounded-[14px] border border-slate-200/90 bg-white px-3 py-3 shadow-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
          <p className="text-left text-[12px] leading-relaxed text-slate-600">
            Use even lighting, fill the frame, and keep the barcode visible. Glare or fingerprints may cause a
            retry.
          </p>
        </div>
      </div>
    </div>
  );
}
