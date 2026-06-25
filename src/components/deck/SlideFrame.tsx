import { useEffect, useRef, useState } from "react";

type SlideFrameProps = {
  children: React.ReactNode;
};

export function SlideFrame({ children }: SlideFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      const containerWidth = container.offsetWidth;
      // Target design width is 1200px
      const newScale = containerWidth / 1200;
      setScale(newScale);
    };

    handleResize();

    // Use ResizeObserver for accurate container resizing
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto block overflow-hidden rounded-2xl shadow-xl bg-[#02213b]"
      style={{
        width: "100%",
        maxWidth: 1200,
        aspectRatio: "16 / 9",
      }}
    >
      <div
        style={{
          width: 1200,
          height: 675,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </section>
  );
}