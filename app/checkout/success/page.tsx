import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-md w-full text-center">
          {/* Success icon */}
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-900/40">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-3xl font-black text-white mb-3">
            You&apos;re in! 🎉
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Your Twin AI account is being set up. You&apos;ll receive a welcome email shortly with your login details and a quick-start guide to launch your first channel.
          </p>

          <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6 mb-8 text-left space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-gray-300">Account created & activated</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-gray-300">Welcome email sent to your inbox</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 bg-purple-900/50 border border-purple-700/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 text-xs font-bold">3</span>
              </div>
              <span className="text-gray-500">Set up your first channel (next step)</span>
            </div>
          </div>

          <Link
            href="/"
            className="gradient-bg text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-block"
          >
            Go to Dashboard
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
