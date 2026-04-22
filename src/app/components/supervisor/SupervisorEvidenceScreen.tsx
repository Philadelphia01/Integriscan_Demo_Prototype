import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ClipboardList, ArrowLeft, MapPin, Mic, FileDown, Copy } from 'lucide-react';
import { testLogs } from '../../supervisor/mockData';
import { officerRegistry } from '../../supervisor/officerRegistryData';
import { Button } from '../ui/button';

export function SupervisorEvidenceScreen() {
  const navigate = useNavigate();
  const { caseId } = useParams();

  const record = useMemo(() => testLogs.find((x) => x.id === caseId) ?? testLogs[0], [caseId]);
  const officerProfile = useMemo(
    () => officerRegistry.find((x) => x.id === record.officerServiceNo),
    [record.officerServiceNo],
  );
  const limit = record.driverCategory === 'Professional' ? 0.02 : 0.05;
  const statusTone = record.result === 'PASSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700';

  return (
    <div className="mx-auto w-full max-w-[920px] space-y-5">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => navigate('/supervisor/logs')}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#102A43] transition hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to logs
        </button>

        <div className="flex items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusTone}`}>{record.result}</span>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(record.id)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#102A43] transition hover:bg-slate-50"
            title="Copy case ID"
          >
            <Copy className="h-4 w-4" />
            Copy Case ID
          </button>
        </div>
      </div>

      <header className="flex items-center justify-center gap-2 text-center">
        <ClipboardList className="h-6 w-6 text-[#102A43]" />
        <h1 className="text-2xl font-bold text-[#102A43]">Driver Report</h1>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <p className="text-sm font-semibold text-slate-500">Case ID</p>
          <p className="mt-1 font-mono text-[13px] font-bold text-[#102A43]">{record.id}</p>
        </div>

        <div className="divide-y divide-slate-100">
          <section className="px-6 py-5">
            <h2 className="text-[13px] font-bold text-[#4A80F0]">Driver Information</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-slate-700 md:grid-cols-2">
              <div>
                <dt className="text-xs text-slate-500">Full Name</dt>
                <dd className="mt-0.5 font-medium text-[#102A43]">{record.driverName}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Driver ID</dt>
                <dd className="mt-0.5 font-mono font-semibold text-[#102A43]">{record.driverId}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Category</dt>
                <dd className="mt-0.5">
                  {record.driverCategory} (limit {limit.toFixed(2)} g/100ml)
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Location</dt>
                <dd className="mt-0.5 inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4A80F0]" />
                  <span className="font-medium text-slate-700">{record.location}</span>
                </dd>
              </div>
            </dl>
          </section>

          <section className="px-6 py-5">
            <h2 className="text-[13px] font-bold text-[#4A80F0]">Test Results</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-slate-700 md:grid-cols-2">
              <div>
                <dt className="text-xs text-slate-500">Timestamp</dt>
                <dd className="mt-0.5 font-medium">{record.timestamp}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Roadblock</dt>
                <dd className="mt-0.5 font-medium">{record.roadblock}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Result</dt>
                <dd className="mt-0.5">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${statusTone}`}>
                    {record.result}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Reading</dt>
                <dd className="mt-0.5 font-mono text-base font-bold text-[#102A43]">
                  {record.reading.toFixed(2)} g/100ml
                </dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-xs text-slate-500">GPS</dt>
                <dd className="mt-0.5 font-mono text-xs text-slate-600">{record.gps}</dd>
              </div>
            </dl>
          </section>

          <section className="px-6 py-5">
            <h2 className="text-[13px] font-bold text-[#4A80F0]">Officer Details</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-slate-700 md:grid-cols-2">
              <div>
                <dt className="text-xs text-slate-500">Officer Name</dt>
                <dd className="mt-0.5 font-medium text-[#102A43]">{record.officerName}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Service Number</dt>
                <dd className="mt-0.5 font-mono font-semibold text-[#102A43]">{record.officerServiceNo}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Rank</dt>
                <dd className="mt-0.5 font-medium">{officerProfile?.rank ?? 'Sergeant'}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Station</dt>
                <dd className="mt-0.5 font-medium">{officerProfile?.station ?? 'Johannesburg Central'}</dd>
              </div>
            </dl>
          </section>

          <section className="px-6 py-5">
            <h2 className="text-[13px] font-bold text-[#4A80F0]">Officer Notes</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{record.notes}</p>
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Mic className="mt-0.5 h-4 w-4 text-slate-500" />
              <p className="text-sm text-slate-600">{record.voiceNoteSummary}</p>
            </div>
          </section>

          <section className="px-6 py-5">
            <h2 className="text-[13px] font-bold text-[#4A80F0]">Evidence</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {record.photos.map((src, idx) => (
                <figure
                  key={`${src}-${idx}`}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-[0_10px_20px_-14px_rgba(15,23,42,0.35)]"
                >
                  <img src={src} alt={`Evidence ${idx + 1}`} className="h-44 w-full object-cover" />
                </figure>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-slate-100 bg-white px-6 py-4">
          <Button variant="outline" className="border-slate-300 bg-white text-[#102A43] hover:bg-slate-50">
            Save as Draft
          </Button>
          <Button className="bg-[#102A43] text-white hover:bg-[#0b2033]">
            <FileDown className="mr-2 h-4 w-4" />
            Export Driver Report (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
}

