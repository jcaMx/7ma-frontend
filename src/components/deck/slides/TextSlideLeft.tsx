import { SlideFrame } from "../SlideFrame";
import { AudioButton } from "../AudioButton";

type Props = {
  title: string;
  subtitle?: string;
  audioUrl?: string;
  slideNumber?: number;
};

export function TextSlideLeft({
  title,
  subtitle,
  audioUrl,
  slideNumber,
}: Props) {

  return (
    <SlideFrame>
      <div className="relative flex flex-1 w-full min-h-full flex-col justify-center bg-[#02213b] px-6 pb-16 sm:px-12 sm:pb-20 md:px-24 md:py-8 text-white">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p 
              className="mt-4 sm:mt-5 text-base sm:text-lg md:text-2xl leading-relaxed text-orange-400"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <AudioButton audioUrl={audioUrl} />
        </div>

        {slideNumber && (
          <span className="absolute bottom-4 left-4 md:bottom-5 md:left-6 text-xs md:text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}