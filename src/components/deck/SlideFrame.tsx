type SlideFrameProps = {
  children: React.ReactNode;
  bgClass?: string;
};

export function SlideFrame({ children, bgClass = "bg-[#02213b]" }: SlideFrameProps) {
  return (
    <section
      className={`relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl shadow-xl flex flex-col min-h-[500px] sm:min-h-[600px] md:min-h-0 md:aspect-[16/9] ${bgClass}`}
    >
      <div className="flex-1 flex flex-col min-h-0 w-full relative">
        {children}
      </div>
    </section>
  );
}
