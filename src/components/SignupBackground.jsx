function SignupBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">

      {/* Wave shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-300/30 rounded-full animate-wave" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-blue-300/30 rounded-full animate-wave delay-3000" />
      <div className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] bg-yellow-300/30 rounded-full animate-wave delay-6000" />

      {/* Floating tags */}
      <div className="absolute top-20 right-24 px-4 py-2 bg-white/70 rounded-xl text-sm shadow animate-tag">
        🛍️ New Deals
      </div>

      <div className="absolute bottom-32 left-20 px-4 py-2 bg-white/70 rounded-xl text-sm shadow animate-tag delay-4000">
        🎁 Welcome Offer
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default SignupBackground;
