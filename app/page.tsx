import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Real-time Trend Intelligence",
    desc: "Twin AI scans thousands of data points every hour to surface viral topics in your niche before they peak.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Auto-Creates & Posts",
    desc: "Scripts, voiceovers, visuals, captions, thumbnails — generated and published automatically, 24/7.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Fully Automated Channels",
    desc: "Your channels run on autopilot — no filming, no editing, no manual uploads. Pure passive income.",
  },
];

const stats = [
  { value: "10,000+", label: "Channels Powered" },
  { value: "$2.4M+", label: "Revenue Generated" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              AI-Powered Faceless Video Platform
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              Turn Any Niche Into{" "}
              <span className="gradient-text">Passive Income</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Twin AI builds, manages, and grows faceless video channels for you — from trend research to publishing — completely hands-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="gradient-bg text-white font-bold text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/40"
              >
                Get Started Free
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white/5 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="border-y border-purple-900/20 bg-purple-950/10 py-10">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Everything runs on <span className="gradient-text">autopilot</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From finding viral ideas to posting daily videos, Twin AI handles every step of the channel operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/3 border border-purple-900/30 rounded-2xl p-8 hover:border-purple-600/50 transition-colors group"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-24">
          <div className="relative bg-gradient-to-br from-purple-900/40 to-violet-950/40 border border-purple-700/30 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/20 rounded-full blur-[60px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Start your first channel today
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                No tech skills. No camera. No experience needed. Pick a niche and Twin AI does the rest.
              </p>
              <Link
                href="/pricing"
                className="gradient-bg text-white font-bold text-base px-10 py-4 rounded-full hover:opacity-90 transition-opacity inline-block"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
