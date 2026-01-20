function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-100 via-purple-100 to-pink-100">
      
      {/* Floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-16 w-32 h-32 bg-purple-300/30 rounded-full animate-float delay-2000" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-300/30 rounded-full animate-float delay-4000" />
      <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-green-300/30 rounded-full animate-float delay-6000" />

      {/* Page Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default AnimatedBackground;
