export interface OfficerRecord {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  rank: string;
  lastShiftDate: string;
  phone: string;
  email: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  station: string;
  compliance: {
    certifications: string[];
    firearmsClearance: string;
    fitnessStatus: string;
    disciplinaryNotes: string[];
  };
}

export const officerRegistry: OfficerRecord[] = [
  {
    id: 'SA-TRF-1182',
    firstName: 'Nomsa',
    lastName: 'Dlamini',
    age: 40,
    rank: 'Sergeant',
    lastShiftDate: '2026-04-07',
    phone: '(+27) 82 441 6543',
    email: 'nomsa.dlamini@integriscan.gov.za',
    address: '123 Commissioner Street, Johannesburg, Gauteng',
    emergencyContact: 'Michael Dlamini',
    emergencyPhone: '(+27) 82 987 4432',
    station: 'Johannesburg Central',
    compliance: {
      certifications: ['Breathalyser Operator Level 2', 'Roadside Evidence Handling', 'Bodycam Protocol v3'],
      firearmsClearance: 'Valid until 2027-10-31',
      fitnessStatus: 'Cleared for active roadside deployment',
      disciplinaryNotes: ['No active disciplinary actions'],
    },
  },
  {
    id: 'SA-TRF-1021',
    firstName: 'Themba',
    lastName: 'Maseko',
    age: 32,
    rank: 'Constable',
    lastShiftDate: '2026-04-06',
    phone: '(+27) 83 552 1811',
    email: 'themba.maseko@integriscan.gov.za',
    address: '44 Quartz Avenue, Braamfontein, Gauteng',
    emergencyContact: 'Lerato Maseko',
    emergencyPhone: '(+27) 83 761 0013',
    station: 'Braamfontein East',
    compliance: {
      certifications: ['Breathalyser Operator Level 1', 'Checkpoint Traffic Control'],
      firearmsClearance: 'Valid until 2026-12-16',
      fitnessStatus: 'Cleared with routine quarterly review',
      disciplinaryNotes: ['Verbal warning issued 2025-11 for late check-in'],
    },
  },
  {
    id: 'SA-TRF-1217',
    firstName: 'Refilwe',
    lastName: 'Nkomo',
    age: 29,
    rank: 'Constable',
    lastShiftDate: '2026-04-05',
    phone: '(+27) 72 119 4481',
    email: 'refilwe.nkomo@integriscan.gov.za',
    address: '8 Alandale Road, Midrand, Gauteng',
    emergencyContact: 'Sizwe Nkomo',
    emergencyPhone: '(+27) 71 002 3188',
    station: 'Allandale Slip',
    compliance: {
      certifications: ['Breathalyser Operator Level 1', 'Incident Documentation'],
      firearmsClearance: 'Valid until 2028-01-12',
      fitnessStatus: 'Cleared for all shifts',
      disciplinaryNotes: ['No active disciplinary actions'],
    },
  },
];

