import Navbar from "./components/NavbarLinks";


export default function HomePage() {
  return (
    <div className="h-screen w-full bg-[#7e22ce] relative overflow-hidden font-sans flex flex-col">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] via-[#7e22ce] to-[#be185d] -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -z-10" />
      
      {/* Decorative Dots (Fixed position) */}
      <div className="absolute bottom-10 left-10 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full" />
        ))}
      </div>

      <Navbar />

      {/* Main Hero Container */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pb-10">
        
        {/* Left Content */}
        <div className="max-w-xl text-white z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight leading-none">
            Connect Instantly.
          </h1>
          <p className="text-[10px] font-bold tracking-[0.4em] text-pink-200 mb-6 uppercase">
            Experience Next-Gen Messaging
          </p>
          
          <div className="w-16 h-1 bg-white/30 mb-6" />
          
          <p className="text-base text-white/80 leading-relaxed max-w-md font-light mb-8">
            The world's fastest encrypted chat platform. Secure your conversations with end-to-end encryption and real-time syncing across all your devices.
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-purple-800 font-bold rounded-xl shadow-lg hover:bg-pink-50 transition-all">
              Start Chatting
            </button>
            <button className="px-8 py-3 border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Mockup (Scaled for Laptop Screens) */}
        <div className="relative mt-8 md:mt-0 flex justify-center items-center h-full max-h-[500px]">
          <div className="w-[280px] h-[420px] md:w-[320px] md:h-[480px] bg-white rounded-[2.5rem] p-3 shadow-2xl transition-transform duration-500 hover:rotate-1">
            <div className="w-full h-full bg-[#1e1b4b] rounded-[2rem] overflow-hidden p-6 flex flex-col">
                {/* Chat UI Elements */}
                <div className="w-12 h-1 bg-pink-500 rounded-full mb-8" />
                
                <div className="space-y-4">
                    <div className="w-full h-8 bg-indigo-500/20 rounded-lg border border-indigo-500/30 flex items-center px-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse" />
                        <div className="w-20 h-2 bg-white/10 rounded" />
                    </div>
                    <div className="w-4/5 h-8 bg-pink-500/20 rounded-lg border border-pink-500/30 ml-auto" />
                    <div className="w-full h-8 bg-indigo-500/20 rounded-lg border border-indigo-500/30" />
                    <div className="w-3/4 h-8 bg-pink-500/20 rounded-lg border border-pink-500/30 ml-auto" />
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-full h-7 bg-white/5 rounded-full px-3 py-1 text-[8px] text-white/40 flex items-center">
                        Type a message...
                    </div>
                    <div className="w-7 h-7 bg-pink-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rotate-45 ml-[-1px]" />
                    </div>
                </div>
            </div>
          </div>
          
          {/* Decorative Triangles from Image */}
          <div className="absolute -top-4 -right-4 flex gap-1 opacity-40">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-white" />
            ))}
          </div>
        </div>

      </main>

      {/* Subtle Bottom Branding */}
      <div className="px-20 pb-6 hidden md:block">
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
          Trusted by 2M+ users worldwide
        </p>
      </div>
    </div>
  );
}
