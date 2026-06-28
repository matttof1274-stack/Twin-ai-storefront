import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CheckoutCanceledPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-md w-full text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h1 className="text-3xl font-black text-white mb-3">
            Checkout Canceled
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            No worries — your order wasn&apos;t completed and you haven&apos;t been charged. Whenever you&apos;re ready, we&apos;d love to help you launch your first automated channel.
          </p>

          <div className="bg-white/3 border border-purple-900/30 rounded-2xl p-6 mb-8 text-left">
            <p className="text-sm font-semibold text-white mb-3">Still on the fence?</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                7-day free trial — no upfront payment needed
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Cancel any time, no questions asked
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                First channel live in under 10 minutes
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="gradient-bg text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-block"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="bg-white/5 border border-white/10 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
