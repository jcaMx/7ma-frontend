// src/components/deck/slides/ProfileSlide.tsx

import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";
import { getDynamicFontSize } from "../textHelper";

type Props = {
  name: string;
  profile: string;
  avatarUrl?: string;
  audioUrl?: string;
  slideNumber?: number;
};

export function ProfileSlide({
  name,
  profile,
  avatarUrl,
  audioUrl,
  slideNumber,
}: Props) {
  const profileFontSize = getDynamicFontSize(profile, 1.875, 1.0);

  return (
    <SlideFrame>
      <div className="relative flex h-full bg-[#02213b] text-white">

        {/* Left Panel */}
        <div className="flex w-[25%] flex-col items-center justify-center px-8">
          

            <img
              src="/src/assets/icons/profile.png"
              alt="Profile"
              className="h-40 w-40 object-contain"
            />
     

          <h2 className="mt-8 text-center text-3xl font-semibold leading-tight">
            {name}
          </h2>
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 items-center px-16 py-12">
          <p 
            className="max-w-5xl leading-relaxed text-[#f3f4f6]"
            style={{ fontSize: profileFontSize }}
          >
            {profile}
          </p>
        </div>

        {/* Audio */}
        <div className="absolute bottom-8 right-8">
          <AudioButton audioUrl={audioUrl} />
        </div>

        {/* Slide Number */}
        {slideNumber && (
          <span className="absolute bottom-5 left-6 text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}