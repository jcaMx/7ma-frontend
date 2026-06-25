// src/components/deck/slides/WelcomeSlide.tsx

import { SlideFrame } from "../SlideFrame";

type WelcomeSlideProps = {
  slideNumber?: number;
};

export function WelcomeSlide({ slideNumber }: WelcomeSlideProps) {
  return (
    <SlideFrame>
      <div className="flex h-full flex-col justify-center bg-[#02213b] p-20 text-white">
        <h1 className="max-w-4xl text-6xl font-light leading-tight">
          Welcome to Seven Moves Ahead
        </h1>
        <h3 className="mt-6 max-w-3xl text-3xl text-orange-400 leading-normal">
          Discover how AI can amplify your impact—one capability at a time.
        </h3>

        {slideNumber && (
          <span className="absolute bottom-5 left-6 text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}
