// src/components/deck/slides/CoverSlide.tsx

import { SlideFrame } from "../SlideFrame";
import { AudioButton } from "../AudioButton";

type CoverSlideProps = {
  prospectName: string;
  company: string;
  slideNumber?: number;
  audioUrl?: string;
};

export function CoverSlide({
  prospectName,
  company,
  slideNumber,
  audioUrl,
}: CoverSlideProps) {
  return (
    <SlideFrame>
      <div className="flex flex-1 w-full min-h-full flex-col justify-between bg-[#02213b] text-white">

        {/* Title Area */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
            Seven Moves Ahead
          </h1>

          <p className="mt-3 text-lg sm:text-xl md:text-3xl text-orange-400">
            7 AI Capabilities to Win at Work
          </p>
        </div>

        {/* Image Strip */}
        <div className="grid h-16 sm:h-20 md:h-24 grid-cols-3 md:grid-cols-6 overflow-hidden">
          <img
            src="/src/assets/cover/1.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="/src/assets/cover/2.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="/src/assets/cover/3.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="/src/assets/cover/4.jpg"
            className="h-full w-full object-cover hidden md:block"
          />
          <img
            src="/src/assets/cover/5.jpg"
            className="h-full w-full object-cover hidden md:block"
          />
          <img
            src="/src/assets/cover/6.jpg"
            className="h-full w-full object-cover hidden md:block"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-center px-6 pt-6 pb-12 md:px-12 md:py-8">
          <p className="text-sm sm:text-base md:text-xl text-white/90">
            Prepared for:
          </p>

          <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold">
            {prospectName}
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400">
            {company}
          </p>
        </div>



        {slideNumber && (
          <span className="absolute bottom-4 right-4 text-xs md:text-sm text-white/70">
            {slideNumber}
          </span>
        )}

        {audioUrl && (
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-12">
            <AudioButton audioUrl={audioUrl} />
          </div>
        )}
      </div>

    </SlideFrame>
  );
}
