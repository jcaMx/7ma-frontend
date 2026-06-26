import { useState, useEffect, useRef } from "react";
import { Volume2, Square } from "lucide-react";

type AudioButtonProps = {
  audioUrl?: string;
};

export function AudioButton({ audioUrl }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setIsPlaying(false);
    };
  }, [audioUrl]);

  if (!audioUrl) return null;

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.addEventListener("ended", () => {
          setIsPlaying(false);
        });
      }
      
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
          setIsPlaying(false);
        });
    }
  };

  return (
    <button
      onClick={handleTogglePlay}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white sm:text-sm"
    >
      {isPlaying ? (
        <>
          <Square className="h-4 w-4 fill-slate-800" />
          Stop Audio
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          Play Audio
        </>
      )}
    </button>
  );
}