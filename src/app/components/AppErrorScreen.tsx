import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

export function AppErrorScreen() {
  const navigate = useNavigate();
  const error = useRouteError();

  let title = 'Something went wrong';
  let message = 'An unexpected error occurred while loading this page.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = typeof error.data === 'string' ? error.data : 'The page could not be loaded.';
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#F0F4F8] p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-[#102A43]">{title}</h1>
        <p className="mt-2 text-sm text-[#486581]">{message}</p>
        <div className="mt-5 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#102A43] hover:bg-slate-50"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-lg bg-[#102A43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b2033]"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

