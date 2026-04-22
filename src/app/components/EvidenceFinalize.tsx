import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Camera, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function EvidenceFinalize() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reading, hasPassed, driverType, driverData } = location.state || {
    reading: 0.07,
    hasPassed: false,
    driverType: 'general',
    driverData: { name: 'Thabo Johannes Mthembu', idNumber: '8506145234082' },
  };

  const [photosTaken, setPhotosTaken] = useState(0);
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleTakePhoto = () => {
    // Simulate camera capture
    setPhotosTaken((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (remarks.trim().length < 10) {
      alert('Please provide detailed officer remarks (minimum 10 characters)');
      return;
    }

    setSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setSubmitting(false);
      const referenceId = `ISR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
      navigate('/report-submitted', {
        state: {
          driverName: driverData.name,
          referenceId,
        },
      });
    }, 2000);
  };

  return (
    <MobileLayout>
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Header */}
        <div className="bg-[#102A43] px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Evidence & Finalize</h1>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {/* Test Summary - Non-editable */}
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-300">
            <h2 className="font-bold text-[#102A43] mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Test Summary (Locked)
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Driver:</span>
                <span className="font-semibold text-[#102A43]">{driverData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ID Number:</span>
                <span className="font-mono font-semibold text-[#102A43]">{driverData.idNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Driver Type:</span>
                <span className="font-semibold text-[#102A43] capitalize">{driverType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">BAC Reading:</span>
                <span className="font-mono font-bold text-[#102A43]">{Number(reading).toFixed(2)} g/100ml</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                <span className="text-gray-600">Result:</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    hasPassed ? 'bg-[#22C55E] text-white' : 'bg-[#EF4444] text-white'
                  }`}
                >
                  {hasPassed ? 'PASSED' : 'FAILED'}
                </span>
              </div>
            </div>
          </div>

          {/* Photo Evidence */}
          <div className="space-y-3">
            <Label className="text-[#102A43] font-bold text-lg flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Photo Evidence
            </Label>
            <p className="text-sm text-gray-600">
              Capture photos of the scene, vehicle, and driver for documentation
            </p>

            <div className="grid grid-cols-3 gap-3">
              {/* Photo Slots */}
              {[...Array(3)].map((_, i) => (
                <button
                  key={i}
                  onClick={handleTakePhoto}
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-[#102A43] hover:bg-gray-50 transition-colors"
                >
                  {i < photosTaken ? (
                    <>
                      <CheckCircle className="w-8 h-8 text-[#22C55E] mb-1" />
                      <span className="text-xs text-gray-600">Photo {i + 1}</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-500">Add Photo</span>
                    </>
                  )}
                </button>
              ))}
            </div>

            {photosTaken > 0 && (
              <p className="text-xs text-[#22C55E] flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                {photosTaken} photo{photosTaken > 1 ? 's' : ''} captured
              </p>
            )}
          </div>

          {/* Officer Remarks */}
          <div className="space-y-3">
            <Label htmlFor="remarks" className="text-[#102A43] font-bold text-lg flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Officer Remarks <span className="text-[#EF4444]">*</span>
            </Label>
            <p className="text-sm text-gray-600">
              Provide detailed notes about the test circumstances, driver behavior, and any relevant observations
            </p>
            <Textarea
              id="remarks"
              placeholder="Enter your observations here... (e.g., driver's behavior, weather conditions, location details)"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="min-h-[120px] text-base border-2 border-gray-300 focus:border-[#102A43] resize-none"
              required
            />
            <p className="text-xs text-gray-500">
              {remarks.length} characters • Minimum 10 characters required
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <p className="font-bold mb-1">Important Notice</p>
                <p>
                  By submitting this report, you certify that all information is accurate and the test was 
                  conducted according to proper procedures. This data is tamper-proof and will be encrypted 
                  and securely stored.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="shrink-0 border-t-2 border-gray-200 bg-white px-6 py-4">
          <Button
            onClick={handleSubmit}
            disabled={submitting || remarks.trim().length < 10}
            className="w-full h-14 bg-[#102A43] hover:bg-[#1a3a5a] text-white text-lg font-bold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Securing Data...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit and Secure Report
              </>
            )}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
