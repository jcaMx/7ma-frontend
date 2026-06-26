import { AudioButton } from "../AudioButton";
import { SlideFrame } from "../SlideFrame";

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

  return (
    <SlideFrame>
      <div className="flex flex-1 w-full min-h-full flex-col bg-[#02213b] p-6 pb-12 sm:p-10 sm:pb-14 md:px-16 md:py-12 text-white">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h1 className="max-w-5xl text-xl sm:text-2xl md:text-5xl font-medium leading-tight">
            {title}
          </h1>


        </div>

        {/* Content */}
        <div className="mt-6 md:mt-12 grid flex-1 grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-2 md:p-10">

          {/* Scenario */}
          <div className="flex flex-col">
            <img
              src="/src/assets/icons/scenario.png"
              alt="Scenario"
              className="mb-3 h-12 w-12 md:h-20 md:w-20 object-contain"
            />

            <p
              className="leading-relaxed text-white/90 text-sm sm:text-base md:text-lg"
            >
              {scenario}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col">
            <img
              src="/src/assets/icons/solution.png"
              alt="Solution"
              className="mb-3 h-12 w-12 md:h-20 md:w-20 object-contain"
            />

            <p
              className="leading-relaxed text-white/90 text-sm sm:text-base md:text-lg"
            >
              {solution}
            </p>
          </div>
        </div>

        <div className="flex justify-between">

          <div className="w-full flex justify-end items-end mb-10">
            {/* <AudioButton audioUrl={audioUrl} /> */}
          </div>
          {slideNumber && (
            <span className="text-xs md:text-sm text-white/70">
              {slideNumber}
            </span>
          )}
        </div>


      </div>
    </SlideFrame>
  );
}