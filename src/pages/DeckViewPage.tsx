// src/pages/DeckViewPage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DeckRenderer } from "../components/deck/DeckRenderer";
import { getPresentationDeck } from "../api/presentation";
import { renderSlide } from "../components/deck/renderSlide";
import { mapBackendToDeck } from "../components/deck/mapBackendToDeck";

export function DeckViewPage() {
  const { requestId } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeck(id: string) {
      try {
        const rawJson = await getPresentationDeck(id);
        const deckJson = rawJson.slides ? rawJson : mapBackendToDeck(rawJson, id);
        setData(deckJson);
      } catch (err) {
        console.error("Failed to load HTML deck", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    if (requestId) loadDeck(requestId);
  }, [requestId]);

  if (loading) return <div className="p-10 text-white">Loading deck...</div>;

  if (!data?.slides) {
    return <div className="p-10 text-white">Deck not found.</div>;
  }

  const slides = data.slides.map((slide: any, index: number) => (
    <div key={slide.id}>{renderSlide(slide, index + 1)}</div>
  ));

  return <DeckRenderer slides={slides} />;
}
