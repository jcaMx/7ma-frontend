import { useEffect } from 'react';
import { getPresentationStatus } from '../api/presentation';

type Props = {
  requestId: string;
  onCompleted: (url: string) => void;
};

export default function ProcessingView({ requestId, onCompleted }: Props) {
  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const res = await getPresentationStatus(requestId);
        if (res.status === 'completed' && res.slides_url) {
          onCompleted(res.slides_url);
          clearInterval(timer);
        }
      } catch (err) {
        console.error(err);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [requestId, onCompleted]);

  return (
    <div
      className="
        min-h-screen hero-grad bg-prussian
        flex items-center justify-center
        text-slate-100 font-body
        selection:bg-indigo-500/30 selection:text-white
        p-6
      "
    >
      {/* Glass Card */}
      <div
        className="
          glass bg-white/10 border border-white/15
          rounded-2xl px-10 py-12
          shadow-glow
          flex flex-col items-center
        "
      >
        <p className="mb-8 text-lg tracking-wide text-slate-200">
          Generating presentation…
        </p>

        {/* Circular Spinner */}
        <svg
          className="animate-spin h-16 w-16 text-mustard"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
          />
        </svg>

        <p className="mt-6 text-sm text-grayx">
          This usually takes a few moments
        </p>
      </div>
    </div>
  );
}
