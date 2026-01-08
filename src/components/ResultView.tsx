type Props = {
  slidesUrl: string;
  onReset: () => void;
};

export default function ResultView({ slidesUrl, onReset }: Props) {
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
          max-w-lg w-full
        "
      >
        <h1 className="text-2xl font-semibold text-mustard mb-2">
          7MA Presentation Generator
        </h1>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Presentation Ready 🎉
        </h2>


        <button           className="
            w-full py-4 rounded-xl
            bg-steel/90 hover:bg-steel
            text-white font-semibold
            backdrop-blur-sm
            border border-white/20
            transition-colors mb-10
          ">
                  <a
          href={slidesUrl}
          target="_blank"
          rel="noopener noreferrer"

        >
          Open Google Slides
        </a>

        </button>
        {/* Primary CTA */}


        {/* Secondary Action */}
        <button
          onClick={onReset}
          className="
            text-grayx underline
            hover:text-slate-100
            transition-colors
          "
        >
          Generate another presentation
        </button>
      </div>
    </div>
  );
}
