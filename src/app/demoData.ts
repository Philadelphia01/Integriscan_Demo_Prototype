export const officerProfile = {
  firstName: 'Nomsa',
  surname: 'Dlamini',
  officerId: 'SA-TRF-1182',
  unit: 'Johannesburg Metro Traffic Unit',
  shiftWindow: '14:00 - 22:00',
};

export const officerRecentActivity = [
  { id: 'IS-2026-0407-101', driver: 'J. Mthembu', result: 'PASSED' as const, time: '17 min ago', reading: '0.03' },
  { id: 'IS-2026-0407-099', driver: 'S. van der Berg', result: 'FAILED' as const, time: '41 min ago', reading: '0.09' },
  { id: 'IS-2026-0407-094', driver: 'T. Khumalo', result: 'PASSED' as const, time: '1h 12m ago', reading: '0.00' },
  { id: 'IS-2026-0407-090', driver: 'L. Msimang', result: 'FAILED' as const, time: '2h 01m ago', reading: '0.06' },
  { id: 'IS-2026-0407-086', driver: 'B. Nkosi', result: 'PASSED' as const, time: '2h 40m ago', reading: '0.01' },
];

export const roadNews = [
  {
    id: 1,
    title: 'N3 resurfacing operation',
    summary: 'Single-lane control from Gillooly’s to Geldenhuys, 20:00-04:30 through Thursday.',
    tone: 'bg-amber-100',
  },
  {
    id: 2,
    title: 'Holiday enforcement directive',
    summary: 'High-visibility breath testing on N1, M1, and R21 corridors from 17:00 daily.',
    tone: 'bg-sky-100',
  },
  {
    id: 3,
    title: 'Low visibility advisory',
    summary: 'Dense fog expected around Midrand before 07:30. Increase stop distance at checkpoints.',
    tone: 'bg-slate-200',
  },
  {
    id: 4,
    title: 'Accident clearance complete',
    summary: 'M2 westbound reopened at Maritzburg interchange. Heavy residual congestion remains.',
    tone: 'bg-emerald-100',
  },
];

export const hotspotPins = [
  { id: '1', top: '20%', left: '50%', label: 'Sandton · high fail rate' },
  { id: '2', top: '54%', left: '48%', label: 'CBD · repeat offenders' },
  { id: '3', top: '34%', left: '84%', label: 'Kempton · freight corridor' },
  { id: '4', top: '68%', left: '62%', label: 'Alberton · late-night checks' },
];

