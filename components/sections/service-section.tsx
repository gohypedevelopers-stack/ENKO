export function ServiceSection() {
  return (
    <section id="network" className="w-full bg-forge border-b border-forge/10 relative">
      <div className="w-full overflow-hidden relative group cursor-crosshair">
        <video
          src="/images/videos/i_want_this_video_section_writ.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block scale-[1.08] origin-center filter contrast-[1.15] brightness-[0.85] saturate-[1.1] transition-transform duration-700 group-hover:scale-100"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-forge/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-center items-center text-center p-6 md:p-12 backdrop-blur-sm">
          <p className="text-charge font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
            [ NETWORK SUBSYSTEM ] / REGIONAL INFRASTRUCTURE.
          </p>
          <p className="text-white/80 max-w-4xl text-sm md:text-base lg:text-lg leading-relaxed">
            We don&apos;t just build chargers; we support the physical infrastructure layer. Our systems are strategically operational across Tamil Nadu, Kerala, and Andhra Pradesh, providing a reliable backbone that charging networks depend on daily.
          </p>
        </div>

        <img 
          src="/Enko logo black.jpeg" 
          alt="ENKO Logo" 
          className="absolute bottom-2 right-2 md:bottom-6 md:right-6 w-24 md:w-32 lg:w-40 z-10 object-contain rounded-md"
        />
      </div>
    </section>
  );
}
