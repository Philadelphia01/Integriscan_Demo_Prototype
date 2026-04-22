import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';

export function TestPassedScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reading, driverType, driverData, limit } = location.state || {
    reading: 0.03,
    driverType: 'general',
    driverData: { name: 'Thabo Johannes Mthembu' },
    limit: 0.05,
  };

  const handleContinue = () => {
    navigate('/finalize', {
      state: {
        reading,
        hasPassed: true,
        driverType,
        driverData,
      },
    });
  };

  return (
    <MobileLayout>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex shrink-0 items-center gap-4 bg-[#102A43] px-6 py-4">
          <button
            type="button"
            onClick={() => navigate('/result', { state: { driverType, driverData } })}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Test passed</h1>
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center overflow-y-auto px-6 py-10">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#22C55E] shadow-lg shadow-[#22C55E]/40"
          >
            <CheckCircle className="h-16 w-16 text-white" strokeWidth={2.5} />
          </motion.div>

          <h2 className="mb-2 text-center text-2xl font-bold text-[#102A43]">Driver passed</h2>
          <p className="mb-8 text-center text-sm text-gray-600">
            Blood alcohol content is below the legal limit for this driver type.
          </p>

          <div className="mb-8 w-full rounded-xl border-2 border-[#22C55E]/30 bg-[#22C55E]/5 p-5">
            <div className="mb-4 flex items-center gap-2 text-[#102A43]">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Summary</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Driver</span>
                <span className="text-right font-semibold text-[#102A43]">{driverData.name}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">BAC reading</span>
                <span className="font-mono font-bold text-[#22C55E]">
                  {Number(reading).toFixed(2)} g/100ml
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Legal limit</span>
                <span className="font-mono font-semibold text-[#102A43]">
                  {Number(limit).toFixed(2)} g/100ml
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Driver type</span>
                <span className="capitalize font-semibold text-[#102A43]">{driverType}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto w-full space-y-3 pt-4">
            <Button
              type="button"
              onClick={handleContinue}
              className="h-14 w-full bg-[#102A43] text-lg font-bold text-white hover:bg-[#1a3a5a]"
            >
              Continue to evidence & finalize
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
