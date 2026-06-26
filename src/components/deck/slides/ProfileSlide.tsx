import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";

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
  audioUrl,
  slideNumber,
}: Props) {

  return (
    <SlideFrame>
      <div className="relative flex flex-col md:flex-row flex-1 w-full min-h-full bg-[#02213b] text-white">

        {/* Left Panel */}
        <div className="flex w-full md:w-[30%] flex-col items-center justify-center p-6 md:px-8 md:py-12 border-b border-white/10 md:border-b-0 md:border-r">
          <img
            src="/src/assets/icons/profile.png"
            alt="Profile"
            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain"
          />

          <h2 className="mt-4 md:mt-8 text-center text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
            {name}
          </h2>
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 items-center p-6 pb-16 sm:p-10 sm:pb-20 md:px-16 md:py-12">
          <p 
            className="max-w-5xl leading-relaxed text-[#f3f4f6] text-sm sm:text-base md:text-lg lg:text-xl"
          >
            {profile}
          </p>
        </div>

        {/* Audio */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <AudioButton audioUrl={audioUrl} />
        </div>

        {/* Slide Number */}
        {slideNumber && (
          <span className="absolute bottom-4 left-4 md:bottom-5 md:left-6 text-xs md:text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}