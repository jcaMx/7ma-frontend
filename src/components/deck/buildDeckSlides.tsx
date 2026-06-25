// src/components/deck/buildDeckSlides.tsx

import { CoverSlide } from "./slides/CoverSlide";
import { WelcomeSlide } from "./slides/WelcomeSlide";
import { ProfileSlide } from "./slides/ProfileSlide";
import { CapabilityIntroSlide } from "./slides/CapabilityIntroSlide";
import { CapabilityUseCaseSlide } from "./slides/CapabilityUseCaseSlide";
import { TextSlideCenter } from "./slides/TextSlideCenter";

export function buildDeckSlides(data: any) {
  const capabilitySlides = data.capability_intros
    .flatMap((intro: any) => {
      const useCase = data.capability_use_cases.find(
        (item: any) => item.capability === intro.capability
      );

      return [
        {
          key: `${intro.capability}-intro`,
          render: (slideNumber: number) => (
            <CapabilityIntroSlide
              capability={intro.capability}
              description={intro.description}
              imageUrl={intro.image_url}
              audioUrl={intro.audio_url}
              slideNumber={slideNumber}
            />
          ),
        },
        useCase
          ? {
              key: `${intro.capability}-use-case`,
              render: (slideNumber: number) => (
                <CapabilityUseCaseSlide
                  capability={useCase.capability}
                  title={useCase.name}
                  scenario={useCase.scenario}
                  solution={useCase.solution}
                  audioUrl={useCase.audio_url}
                  slideNumber={slideNumber}
                />
              ),
            }
          : null,
      ];
    })
    .filter(Boolean);

  const slideDefinitions = [
    {
      key: "cover",
      render: (slideNumber: number) => (
        <CoverSlide
          prospectName={data.prospectName}
          company={data.company}
          slideNumber={slideNumber}
        />
      ),
    },
    {
      key: "welcome",
      render: (slideNumber: number) => (
        <WelcomeSlide slideNumber={slideNumber} />
      ),
    },
    {
      key: "profile",
      render: (slideNumber: number) => (
        <ProfileSlide
          name={data.profile?.name}
          profile={data.profile?.bio}
          audioUrl={data.profile?.audio_url}
          slideNumber={slideNumber}
        />
      ),
    },
    ...capabilitySlides,
    {
      key: "next-moves",
      render: (slideNumber: number) => (
        <TextSlideCenter
          title="Next Moves"
          subtitle="Start your personalized path to AI productivity and next-level results."
          slideNumber={slideNumber}
        />
      ),
    },
    {
      key: "closing",
      render: (slideNumber: number) => (
        <TextSlideCenter
          title="Let’s Get to Work"
          subtitle="You’ve seen what’s possible—now it’s time to make it happen."
          slideNumber={slideNumber}
        />
      ),
    },
  ];

  return slideDefinitions.map((slide, index) => (
    <div key={slide.key}>{slide.render(index + 1)}</div>
  ));
}