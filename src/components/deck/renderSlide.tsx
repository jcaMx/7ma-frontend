import { CoverSlide } from "./slides/CoverSlide";
import { TextSlideLeft } from "./slides/TextSlideLeft";
import { TextSlideCenter } from "./slides/TextSlideCenter";
import { ProfileSlide } from "./slides/ProfileSlide";
import { CapabilityIntroSlide } from "./slides/CapabilityIntroSlide";
import { CapabilityUseCaseSlide } from "./slides/CapabilityUseCaseSlide";

type DeckSlide = {
  id: string;
  type: string;
  data: any;
};

export function renderSlide(slide: DeckSlide, slideNumber: number) {
  const data = slide.data;

  switch (slide.type) {
    case "cover":
      return <CoverSlide {...data} slideNumber={slideNumber} />;

    case "text_left":
      return <TextSlideLeft {...data} slideNumber={slideNumber} />;

    case "text_center":
      return <TextSlideCenter {...data} slideNumber={slideNumber} />;

    case "profile":
      return <ProfileSlide {...data} slideNumber={slideNumber} />;

    case "capability_intro":
      return <CapabilityIntroSlide {...data} slideNumber={slideNumber} />;

    case "capability_use_case":
      return <CapabilityUseCaseSlide {...data} slideNumber={slideNumber} />;

    default:
      return (
        <div className="p-10 text-white">
          Unknown slide type: {slide.type}
        </div>
      );
  }
}