export function ServiceSection() {
  return (
    <section id="network" className="w-full bg-forge border-b border-forge/10 relative">
      <div className="w-full overflow-hidden relative">
        <video
          src="/images/videos/i_want_this_video_section_writ.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block scale-[1.08] origin-center filter contrast-[1.15] brightness-[0.85] saturate-[1.1]"
        />
        <img 
          src="/Enko logo black.jpeg" 
          alt="ENKO Logo" 
          className="absolute bottom-2 right-2 md:bottom-6 md:right-6 w-24 md:w-32 lg:w-40 z-10 object-contain rounded-md"
        />
      </div>
    </section>
  );
}
