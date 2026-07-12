import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { DeckTestPage } from "./DeckTestPage.tsx";
import { DeckViewPage } from "./pages/DeckViewPage.tsx";
import ProspectsPage from "./pages/ProspectsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prospects" element={<ProspectsPage />} />
      <Route path="/deck-test" element={<DeckTestPage />} />
      <Route path="/deck/:requestId" element={<DeckViewPage />} />
    </Routes>
  );
}