import { DeckRenderer } from "./components/deck/DeckRenderer";
import { renderSlide } from "./components/deck/renderSlide";
import { sampleDeck } from "./data/sampleDeck";

export function DeckTestPage() {
  const slides = sampleDeck.slides.map((slide, index) => (
    <div key={slide.id}>
      {renderSlide(slide, index + 1)}
    </div>
  ));

  return <DeckRenderer slides={slides} />;
}