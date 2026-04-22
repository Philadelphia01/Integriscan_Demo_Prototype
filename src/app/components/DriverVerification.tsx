import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, User, IdCard, Car, AlertTriangle } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Label } from './ui/label';

export function DriverVerification() {
  const navigate = useNavigate();
  const [driverType, setDriverType] = useState<'general' | 'professional' | null>(null);

  // Simulated extracted data from license scan
  const driverData = {
    name: 'Thabo Johannes Mthembu',
    idNumber: '8506145234082',
    licenseClass: 'Code 08 (B)',
  };

  const handleContinue = () => {
    if (!driverType) {
      alert('Please select a driver type before continuing');
      return;
    }
    navigate('/result', { state: { driverType, driverData } });
  };

  return (
    <MobileLayout>
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Header */}
        <div className="bg-[#102A43] px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/scanner')}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Driver Verification</h1>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {/* Success Banner */}
          <div className="bg-[#22C55E]/10 border border-[#22C55E] rounded-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#102A43]">License Data Extracted</p>
              <p className="text-sm text-gray-600">Information verified successfully</p>
            </div>
          </div>

          {/* Extracted Data - Non-editable */}
          <div className="space-y-4">
            <h2 className="font-bold text-[#102A43] text-lg">License Information</h2>

            {/* Name Field */}
            <div className="space-y-2">
              <Label className="text-[#102A43] font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <div className="h-14 px-4 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center text-gray-700 font-medium">
                {driverData.name}
              </div>
              <p className="text-xs text-gray-500 italic">* Data is read-only and tamper-proof</p>
            </div>

            {/* ID Number Field */}
            <div className="space-y-2">
              <Label className="text-[#102A43] font-semibold flex items-center gap-2">
                <IdCard className="w-4 h-4" />
                ID Number
              </Label>
              <div className="h-14 px-4 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center text-gray-700 font-medium font-mono">
                {driverData.idNumber}
              </div>
            </div>

            {/* License Class Field */}
            <div className="space-y-2">
              <Label className="text-[#102A43] font-semibold flex items-center gap-2">
                <Car className="w-4 h-4" />
                License Class
              </Label>
              <div className="h-14 px-4 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center text-gray-700 font-medium">
                {driverData.licenseClass}
              </div>
            </div>
          </div>

          {/* Driver Type Selection - Required */}
          <div className="space-y-3 pt-4 border-t-2 border-gray-200">
            <Label className="text-[#102A43] font-bold text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
              Driver Type Selection <span className="text-[#EF4444]">*</span>
            </Label>
            <p className="text-sm text-gray-600">Select the applicable alcohol limit for this driver</p>

            <div className="space-y-3">
              {/* General Driver */}
              <button
                onClick={() => setDriverType('general')}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  driverType === 'general'
                    ? 'border-[#102A43] bg-[#102A43]/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      driverType === 'general'
                        ? 'border-[#102A43] bg-[#102A43]'
                        : 'border-gray-400'
                    }`}
                  >
                    {driverType === 'general' && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#102A43]">General Driver</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Alcohol limit: <span className="font-bold">0.05 g/100ml</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      For private vehicle drivers with standard licenses
                    </p>
                  </div>
                </div>
              </button>

              {/* Professional Driver */}
              <button
                onClick={() => setDriverType('professional')}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  driverType === 'professional'
                    ? 'border-[#102A43] bg-[#102A43]/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      driverType === 'professional'
                        ? 'border-[#102A43] bg-[#102A43]'
                        : 'border-gray-400'
                    }`}
                  >
                    {driverType === 'professional' && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#102A43]">Professional Driver</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Alcohol limit: <span className="font-bold">0.02 g/100ml</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      For commercial drivers (taxi, bus, truck operators)
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 border-t-2 border-gray-200 bg-white px-6 py-4">
          <Button
            onClick={handleContinue}
            disabled={!driverType}
            className="h-14 w-full bg-[#102A43] text-lg font-bold text-white hover:bg-[#1a3a5a] disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Continue to Breathalyzer Test
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
