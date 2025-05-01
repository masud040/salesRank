export default function ReadyToHire() {
  return (
    <div className="relative py-10 px-[24px] md:px-[40px] w-full h-full">
      {/* Background Noise Layer */}
      <div
        className="absolute inset-0 z-0 opacity-5 bg-[url('/assets/images/backgroundnoise.png')] bg-repeat"
        style={{ backgroundSize: "auto" }}
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[64px]" />

      <div className="relative z-20 mx-auto bg-gradient-to-r from-primary-600 to-primary-400 rounded-[24px] max-w-[1440px] w-full font-manrope py-20 lg:py-48 flex-column items-center gap-6 lg:gap-12">
        <div className="space-y-3 text-center">
          <h3 className="text-[30px] md:text-[38px] text-white font-semibold">
            Ready to Hire Smarter?
          </h3>
          <p className="text-[#B9BDC7]">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>
        </div>
        <button className="rounded-full bg-tertiary-500 py-2 md:py-4 px-5 md:px-9 font-medium">
          Join Now
        </button>
      </div>
    </div>
  );
}
