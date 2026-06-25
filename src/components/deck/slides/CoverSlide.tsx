// src/components/deck/slides/CoverSlide.tsx

import { SlideFrame } from "../SlideFrame";

type CoverSlideProps = {
  prospectName: string;
  company: string;
  slideNumber?: number;
};

export function CoverSlide({
  prospectName,
  company,
  slideNumber,
}: CoverSlideProps) {
  return (
    <SlideFrame>
      <div className="flex h-full flex-col bg-[#02213b] text-white">

        {/* Title Area */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <h1 className="text-6xl font-light">
            Seven Moves Ahead
          </h1>

          <p className="mt-4 text-3xl text-orange-400">
            7 AI Capabilities to Win at Work
          </p>


        </div>

        {/* Image Strip */}
        <div className="grid h-[18%] grid-cols-6 overflow-hidden">
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
            className="h-full w-full object-cover"
          />
          <img
            src="/src/assets/cover/5.jpg"
            className="h-full w-full object-cover"
          />
          <img
            src="/src/assets/cover/6.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Footer */}
        <div className="flex h-[25%] flex-col justify-center px-12">
          <p className="text-xl text-white/90">
            Prepared for:
          </p>

          <p className="mt-2 text-3xl">
            {prospectName}
          </p>

          <p className="text-3xl text-orange-400">
            {company}
          </p>
        </div>

        {slideNumber && (
          <span className="absolute bottom-5 right-6 text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}
