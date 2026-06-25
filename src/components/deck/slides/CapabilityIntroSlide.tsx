import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";
import { getDynamicFontSize } from "../textHelper";

type CapabilityIntroSlideProps = {
  capability: string;
  description: string;
  imageUrl: string;
  audioUrl?: string;
  slideNumber?: number;
};

export function CapabilityIntroSlide({
  capability,
  description,
  imageUrl,
  audioUrl,
  slideNumber,
}: CapabilityIntroSlideProps) {
  const descFontSize = getDynamicFontSize(description, 1.875, 0.95);

  return (
    <SlideFrame>
      <div className="grid h-full grid-cols-[60%_40%] bg-white font-raleway">
        {/* Left image */}
        <div className="relative h-full overflow-hidden">
          <img
            src={imageUrl}
            alt={capability}
            className="h-full w-full object-cover"
          />

          {slideNumber && (
            <span className="absolute bottom-5 left-6 text-sm text-white">
              {slideNumber}
            </span>
          )}
        </div>

        {/* Right content */}
        <div className="relative flex h-full flex-col justify-center px-12 text-[#003b67]">
          <div className="max-w-[420px]">
            <h1 className="text-5xl font-medium leading-tight">
              {capability}
            </h1>

            <p 
              className="mt-6 leading-snug text-[#003b67]/90"
              style={{ fontSize: descFontSize }}
            >
              {description}
            </p>
          </div>

          <div className="absolute bottom-6 right-6">
            <AudioButton audioUrl={audioUrl} />
          </div>
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