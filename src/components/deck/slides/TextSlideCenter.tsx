import { SlideFrame } from "../SlideFrame";
import { AudioButton } from "../AudioButton";
import { getDynamicFontSize } from "../textHelper";

type Props = {
  title: string;
  subtitle?: string;
  audioUrl?: string;
  slideNumber?: number;
};

export function TextSlideCenter({
  title,
  subtitle,
  audioUrl,
  slideNumber,
}: Props) {
  const subtitleFontSize = getDynamicFontSize(subtitle, 1.875, 1.0);

  return (
    <SlideFrame>
      <div className="relative flex h-full flex-col items-center justify-center bg-[#02213b] px-24 text-center text-white">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-medium leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p 
              className="mt-6 leading-relaxed text-orange-400"
              style={{ fontSize: subtitleFontSize }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="absolute bottom-8 right-8">
          <AudioButton audioUrl={audioUrl} />
        </div>

        {slideNumber && (
          <span className="absolute bottom-5 left-6 text-sm text-white/70">
            {slideNumber}
          </span>
        )}
      </div>
    </SlideFrame>
  );
}