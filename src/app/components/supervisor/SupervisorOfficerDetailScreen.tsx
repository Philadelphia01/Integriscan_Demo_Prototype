import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ClipboardList, ArrowLeft } from 'lucide-react';
import { officerRegistry } from '../../supervisor/officerRegistryData';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-2xl font-semibold text-[#102A43]">{title}</h2>
      {children}
    </section>
  );
}

export function SupervisorOfficerDetailScreen() {
  const navigate = useNavigate();
  const { officerId } = useParams();
  const officer = useMemo(() => officerRegistry.find((x) => x.id === officerId) ?? officerRegistry[0], [officerId]);

  return (
    <div className="space-y-5">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/supervisor/officers')}
          className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h1 className="inline-flex items-center gap-2 text-4xl font-bold text-[#102A43]">
          <ClipboardList className="h-8 w-8" />
          Officer Profile Record
        </h1>
      </header>

      <Section title="Officer Information">
        <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 md:grid-cols-2">
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Full Name</p>
            <p className="font-medium">{officer.firstName} {officer.lastName}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Service Number</p>
            <p className="font-medium">{officer.id}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Rank</p>
            <p className="font-medium">{officer.rank}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Phone</p>
            <p className="font-medium">{officer.phone}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3 md:col-span-2">
            <p className="text-xs text-slate-500">Email</p>
            <p className="font-medium">{officer.email}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3 md:col-span-2">
            <p className="text-xs text-slate-500">Address</p>
            <p className="font-medium">{officer.address}</p>
          </div>
        </div>
      </Section>

      <Section title="Emergency Contact">
        <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 md:grid-cols-2">
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Name</p>
            <p className="font-medium">{officer.emergencyContact}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Phone</p>
            <p className="font-medium">{officer.emergencyPhone}</p>
          </div>
        </div>
      </Section>

      <Section title="Operational Compliance">
        <div className="space-y-3 text-sm text-slate-700">
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Certifications</p>
            <ul className="mt-1 list-disc pl-5">
              {officer.compliance.certifications.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Firearms Clearance</p>
            <p className="mt-1 font-medium">{officer.compliance.firearmsClearance}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Fitness Status</p>
            <p className="mt-1 font-medium">{officer.compliance.fitnessStatus}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-3">
            <p className="text-xs text-slate-500">Disciplinary Notes</p>
            <ul className="mt-1 list-disc pl-5">
              {officer.compliance.disciplinaryNotes.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

