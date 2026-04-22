import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Activity, AlertCircle, CheckCircle } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';

export function BreathalyzerResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { driverType, driverData } = location.state || {
    driverType: 'general',
    driverData: { name: 'Thabo Johannes Mthembu' },
  };

  // Demo reading: 0.04 is below general limit (0.05) but above professional (0.02) so both pass/fail flows work.
  const [reading] = useState(0.04);

  const limit = driverType === 'professional' ? 0.02 : 0.05;
  const hasPassed = reading <= limit;

  const handleConfirm = () => {
    const payload = { reading, hasPassed, driverType, driverData };
    if (hasPassed) {
      navigate('/test-passed', { state: { ...payload, limit } });
    } else {
      navigate('/finalize', { state: payload });
    }
  };

  return (
    <MobileLayout>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center gap-4 bg-[#102A43] px-6 py-4">
          <button
            onClick={() => navigate('/verification')}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Test Result</h1>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-8">
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-600">Driver Name</p>
            <p className="font-bold text-[#102A43]">{driverData.name}</p>
            <p className="mt-2 text-sm text-gray-600">Driver Type</p>
            <p className="font-semibold capitalize text-[#102A43]">{driverType}</p>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#102A43]/10">
              <Activity className="h-10 w-10 text-[#102A43]" />
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="mb-2 text-sm font-medium text-gray-600">Blood Alcohol Content</p>
            <div className="mb-4 rounded-2xl border-4 border-gray-300 bg-gray-100 px-6 py-8">
              <div className="mb-2 font-mono text-6xl font-bold text-[#102A43]">{reading.toFixed(2)}</div>
              <div className="text-xl font-semibold text-gray-600">g/100ml</div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs italic text-gray-500">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Reading is locked and tamper-proof</span>
            </div>
          </div>

          <div className="mb-6">
            {hasPassed ? (
              <div className="rounded-2xl bg-[#22C55E] p-6 text-center text-white">
                <div className="mb-3 flex justify-center">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <div className="mb-2 text-3xl font-bold">PASSED</div>
                <div className="text-sm opacity-90">Below legal limit of {limit.toFixed(2)} g/100ml</div>
              </div>
            ) : (
              <div className="rounded-2xl bg-[#EF4444] p-6 text-center text-white">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white">
                    <span className="text-4xl font-bold">!</span>
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold">FAILED</div>
                <div className="text-sm opacity-90">Above legal limit of {limit.toFixed(2)} g/100ml</div>
              </div>
            )}
          </div>

          <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-center text-xs text-[#102A43]">
              <span className="font-bold">Legal Limit ({driverType}):</span> {limit.toFixed(2)} g/100ml
            </p>
          </div>

          <div className="mt-auto space-y-3">
            <Button
              onClick={handleConfirm}
              className={`h-14 w-full text-lg font-bold text-white ${
                hasPassed ? 'bg-[#22C55E] hover:bg-[#1ea84e]' : 'bg-[#EF4444] hover:bg-[#dc2626]'
              }`}
            >
              Confirm & Continue
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
