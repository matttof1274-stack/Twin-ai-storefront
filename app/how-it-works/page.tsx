import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    number: "01",
    title: "Pick Your Niche",
    desc: "Tell Twin AI which niche you want to dominate — finance, health, tech, travel, true crime, gaming, or anything else. Our AI will map the competitive landscape and find untapped angles.",
    bullets: [
      "Browse 500+ pre-validated niches",
      "AI scores each niche for profitability",
      "See estimated monthly revenue potential",
    ],
  },
  {
    number: "02",
    title: "AI Creates Content",
    desc: "Twin AI handles 100% of the content creation pipeline. It researches trending topics, writes engaging scripts, generates voiceovers, selects visuals, creates thumbnails, and produces publish-ready videos.",
    bullets: [
      "Daily trend scanning & topic selection",
      "AI-written scripts optimized for watch time",
      "Realistic AI voiceovers in any accent or tone",
      "Auto-generated thumbnails that get clicks",
    ],
  },
  {
    number: "03",
    title: "Channels Grow on Autopilot",
    desc: "Once set up, your channels post consistently, engage with trends, and compound growth over time — generating ad revenue, sponsorships, and affiliate income without any manual work.",
    bullets: [
      "Consistent daily uploads (proven to grow faster)",
      "SEO-optimized titles, tags, and descriptions",
      "YouTube, TikTok, Instagram Reels & more",
      "Track revenue in your Twin AI dashboard",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Three Steps to{" "}
              <span className="gradient-text">Passive Income</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              From zero to a fully automated income-generating channel in under 10 minutes.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                {/* Number */}
                <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white font-black text-xl">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-black text-white mb-3">{step.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector line (not for last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 mt-16 w-px h-16 bg-purple-900/40" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-br from-purple-900/40 to-violet-950/40 border border-purple-700/30 rounded-3xl p-12">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to start?
            </h2>
            <p className="text-gray-400 mb-8">
              Your first channel can be live within 10 minutes.
            </p>
            <Link
              href="/pricing"
              className="gradient-bg text-white font-bold text-base px-10 py-4 rounded-full hover:opacity-90 transition-opacity inline-block"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
