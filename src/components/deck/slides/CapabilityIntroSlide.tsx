import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";

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

  return (
    <SlideFrame bgClass="bg-white">
      <div className="bg-white flex flex-col md:grid md:grid-cols-[60%_40%] flex-1 w-full min-h-full font-raleway">
        {/* Left image */}
        <div className="relative w-full h-48 sm:h-64 md:h-full overflow-hidden">
          <img
            src={imageUrl}
            alt={capability}
            className="h-full w-full object-cover"
          />

          {slideNumber && (
            <span className="absolute bottom-4 left-4 text-xs md:text-sm text-white">
              {slideNumber}
            </span>
          )}
        </div>

        {/* Right content */}
        <div className="relative flex-1 flex flex-col justify-center p-6 sm:p-10 md:px-12 md:py-8 pb-16 md:pb-8 text-[#003b67]">
          <div className="max-w-[420px]">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight">
              {capability}
            </h1>

            <p
              className="mt-4 md:mt-6 leading-snug text-[#003b67]/90 text-sm sm:text-base md:text-lg"
            >
              {description}
            </p>
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <AudioButton audioUrl={audioUrl} />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}