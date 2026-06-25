import { SlideFrame } from "../SlideFrame";
import { AudioButton } from "../AudioButton";
import { getDynamicFontSize } from "../textHelper";

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
  const subtitleFontSize = getDynamicFontSize(subtitle, 1.5, 0.9);

  return (
    <SlideFrame>
      <div className="relative flex h-full flex-col justify-center bg-[#02213b] px-24 text-white">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-medium leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p 
              className="mt-5 leading-relaxed text-orange-400"
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