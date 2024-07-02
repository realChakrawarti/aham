export default function FooterDocker() {
  return (
    <div className="pointer-events-none fixed inset-0 right-0 top-[50%] z-20 mx-auto mb-4 flex h-12 px-6">
      <div
        className="pointer-events-auto relative mx-auto flex h-full items-center overflow-y-scroll
          rounded-[14px] bg-mauve-light-1 px-0.5
          shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px]
          dark:bg-mauve-dark-2
          dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]
          sm:overflow-y-visible"
      >
        <span
          className="absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-[6px] px-1 py-1.5
            transition-all duration-300"
          style={{ left: 0, width: 0 }}
        >
          <span className="h-full w-full rounded-[10px] bg-mauve-light-3 dark:bg-mauve-dark-3"></span>
        </span>
        {/* Here goes the icons */}
      </div>
    </div>
  );
}
