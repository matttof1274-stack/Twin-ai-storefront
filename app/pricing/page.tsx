import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    desc: "Perfect for testing your first niche channel.",
    features: [
      "1 automated channel",
      "15 videos per month",
      "Basic trend intelligence",
      "Auto-upload to YouTube",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
    checkoutPath: "/pricing",
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    desc: "Scale up with multiple channels and advanced AI.",
    features: [
      "5 automated channels",
      "60 videos per month",
      "Advanced trend intelligence",
      "Multi-platform posting",
      "Custom thumbnails & branding",
      "Priority support",
    ],
    cta: "Start Growing",
    highlighted: true,
    checkoutPath: "/pricing",
  },
  {
    name: "Scale",
    price: "$199",
    period: "/mo",
    desc: "Full automation empire for serious creators.",
    features: [
      "Unlimited channels",
      "Unlimited videos",
      "Elite trend intelligence",
      "All platforms supported",
      "White-label branding",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Go All-In",
    highlighted: false,
    checkoutPath: "/pricing",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Pick the plan that fits your goals. Upgrade or cancel anytime.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-purple-900/50 to-violet-950/50 border-purple-500/60 shadow-2xl shadow-purple-900/30 scale-105"
                    : "bg-white/3 border-purple-900/30 hover:border-purple-700/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-lg font-bold text-white mb-1">{plan.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.checkoutPath}
                  className={`block text-center font-bold py-3 rounded-full transition-opacity text-sm ${
                    plan.highlighted
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-white/8 border border-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ / Guarantee */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              All plans include a{" "}
              <span className="text-purple-400 font-medium">7-day free trial</span>. No credit card required to start.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
