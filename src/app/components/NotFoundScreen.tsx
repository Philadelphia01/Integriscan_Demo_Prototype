import { useNavigate } from 'react-router';

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#F0F4F8] p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">404</p>
        <h1 className="mt-1 text-2xl font-bold text-[#102A43]">Page not found</h1>
        <p className="mt-2 text-sm text-[#486581]">The link is invalid or the page has moved.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-5 rounded-lg bg-[#102A43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b2033]"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

