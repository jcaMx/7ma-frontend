import { Link } from "react-router-dom";

type Props = {
  requestId: string;
  slidesUrl: string;
  onReset: () => void;
};

export default function ResultView({ requestId, slidesUrl, onReset }: Props) {
  return (
    <div className="min-h-screen hero-grad bg-prussian flex items-center justify-center text-slate-100 font-body p-6">
      <div className="glass bg-white/10 border border-white/15 rounded-2xl px-10 py-12 shadow-glow flex flex-col items-center max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-mustard mb-2">
          7MA Presentation Generator
        </h1>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Presentation Ready 🎉
        </h2>

        <a
          href={slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 rounded-xl bg-steel/90 hover:bg-steel text-white font-semibold border border-white/20 transition-colors mb-4 text-center"
        >
          Open Google Slides
        </a>

        <Link
          to={`/deck/${requestId}`}
          className="w-full py-4 rounded-xl bg-mustard text-prussian font-semibold transition-colors mb-10 text-center"
        >
          Open HTML Deck
        </Link>

        <button
          onClick={onReset}
          className="text-grayx underline hover:text-slate-100 transition-colors"
        >
          Generate another presentation
        </button>
      </div>
    </div>
  );
}