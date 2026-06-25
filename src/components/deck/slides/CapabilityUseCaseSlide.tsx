import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";
import { getDynamicFontSize } from "../textHelper";

type Props = {
  capability: string;
  title: string;
  scenario: string;
  solution: string;
  audioUrl?: string;
  slideNumber?: number;
};

export function CapabilityUseCaseSlide({
  title,
  scenario,
  solution,
  audioUrl,
  slideNumber,
}: Props) {
  const scenarioFontSize = getDynamicFontSize(scenario, 1.75, 0.9);
  const solutionFontSize = getDynamicFontSize(solution, 1.75, 0.9);

  return (
    <SlideFrame>
      <div className="flex h-full flex-col bg-[#02213b] px-16 py-12 text-white">

        {/* Header */}
        <div className="flex items-start justify-between">
          <h1 className="max-w-5xl text-5xl font-medium leading-tight">
            {title}
          </h1>

          <AudioButton audioUrl={audioUrl} />
        </div>

        {/* Content */}
        <div className="mt-12 grid flex-1 grid-cols-2 gap-16">

          {/* Scenario */}
          <div className="flex flex-col">
            <img
              src="/src/assets/icons/scenario.png"
              alt="Scenario"
              className="mb-4 h-16 w-16 object-contain"
            />

            <p
              className="leading-relaxed text-white/90"
              style={{ fontSize: scenarioFontSize }}
            >
              {scenario}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col">
            <img
              src="/src/assets/icons/solution.png"
              alt="Solution"
              className="mb-4 h-16 w-16 object-contain"
            />

            <p
              className="leading-relaxed text-white/90"
              style={{ fontSize: solutionFontSize }}
            >
              {solution}
            </p>
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