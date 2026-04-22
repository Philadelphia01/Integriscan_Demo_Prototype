import { useNavigate, useLocation } from 'react-router';
import { Check, User, Hash, Lock, Shield } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';

export function ReportSubmittedScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { driverName, referenceId } = location.state || {
    driverName: 'Driver',
    referenceId: `ISR-${Date.now().toString(36).toUpperCase().slice(-8)}`,
  };

  return (
    <MobileLayout>
      <div className="flex min-h-0 flex-1 flex-col bg-[#FAFBFA]">
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-b from-[#DCFCE7]/90 via-[#ECFDF5] to-[#FAFBFA] px-6 pb-10 pt-12">
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[#2D865F]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-[28px] bg-gradient-to-br from-[#2D865F] to-[#1d6B4d] shadow-lg ring-4 ring-white/80">
              <Check className="h-[52px] w-[52px] text-white" strokeWidth={3} />
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Submission confirmed</p>
            <h1
              id="report-submitted-title"
              className="mt-2 max-w-[300px] text-[26px] font-bold leading-[1.15] tracking-tight text-slate-900"
            >
              Your report is on file
            </h1>
            <p
              id="report-submitted-desc"
              className="mx-auto mt-3 max-w-[300px] text-[15px] leading-relaxed text-slate-600"
            >
              The record is encrypted and ready for station review and chain-of-custody.
            </p>
          </div>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-6 pb-6 [-webkit-overflow-scrolling:touch]">
          <div className="-mt-8 relative rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.2)]">
            <div className="absolute left-4 right-4 top-0 h-px border-t border-dashed border-slate-200" aria-hidden />

            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <Shield className="h-5 w-5 text-[#2D865F]" strokeWidth={2} />
              <span className="text-[13px] font-semibold text-slate-800">IntegriScan reference</span>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                  <User className="h-4 w-4 text-slate-600" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Subject</p>
                  <p className="mt-0.5 text-[15px] font-semibold text-slate-900">{driverName}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                  <Hash className="h-4 w-4 text-slate-600" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Reference ID</p>
                  <p className="mt-1 break-all font-mono text-[13px] font-semibold leading-snug text-[#102A43]">
                    {referenceId}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-3">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" strokeWidth={2} />
              <p className="text-[12px] leading-relaxed text-slate-600">
                Tamper-evident storage. Do not alter device time or attempt to edit after submission.
              </p>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="h-[54px] w-full rounded-[14px] border-0 bg-[#102A43] text-[16px] font-bold text-white shadow-md shadow-[#102A43]/25 transition hover:bg-[#0d2235] active:scale-[0.99]"
          >
            Back to dashboard
          </Button>

          <p className="pb-2 text-center text-[11px] text-slate-400">
            Thank you for accurate roadside documentation.
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
