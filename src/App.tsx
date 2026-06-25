import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { DeckTestPage } from "./DeckTestPage.tsx";
import { DeckViewPage } from "./pages/DeckViewPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deck-test" element={<DeckTestPage />} />
      <Route path="/deck/:requestId" element={<DeckViewPage />} />
    </Routes>
  );
}