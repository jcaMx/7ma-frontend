// src/components/deck/AudioButton.tsx

import { Volume2 } from "lucide-react";

type AudioButtonProps = {
  audioUrl?: string;
};

export function AudioButton({ audioUrl }: AudioButtonProps) {
  if (!audioUrl) return null;

  return (
    <button
      onClick={() => new Audio(audioUrl).play()}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white sm:text-sm"
    >
      <Volume2 className="h-4 w-4" />
      Play Audio
    </button>
  );
}