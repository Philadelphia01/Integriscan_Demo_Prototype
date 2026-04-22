import { useNavigate } from 'react-router';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';

const SPLASH_IMAGE = '/splash-hero.png';

export function SplashScreen() {
  const navigate = useNavigate();

  return (
    <MobileLayout showOfflineIndicator={false}>
      <div className="flex min-h-0 flex-1 flex-col bg-white">
        <div className="flex min-h-0 flex-1 flex-col items-center px-6 pt-6">
          <div className="flex w-full max-w-[300px] flex-1 flex-col items-center justify-start">
            <img
              src={SPLASH_IMAGE}
              alt=""
              className="w-full max-h-[min(42vh,320px)] object-contain object-top"
              width={300}
              height={280}
              decoding="async"
            />

            <h1 className="mt-4 text-center text-[34px] font-black tracking-tight text-slate-900">DOND</h1>
            <p className="mt-3 max-w-[260px] text-center text-[14px] leading-relaxed text-slate-500">
              Stay safe on the road. Responsible testing, clearer roads, stronger communities.
            </p>
          </div>
        </div>

        <div className="shrink-0 px-6 pb-10 pt-4">
          <Button
            type="button"
            onClick={() => navigate('/login')}
            className="h-[52px] w-full rounded-full border-0 bg-[#84CC16] text-[15px] font-bold tracking-wide text-white shadow-sm transition hover:bg-[#73B514] active:scale-[0.99]"
          >
            LET&apos;S GO
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
