import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-purple-900/20 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="font-bold text-white">Twin<span className="gradient-text">AI</span></span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              The AI platform that builds and runs faceless video channels on autopilot.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/how-it-works" className="hover:text-purple-400 transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:support@twin-ai.com" className="hover:text-purple-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Twin AI. All rights reserved.
          </p>
          <div className="text-center py-1 opacity-50 text-xs">
            <a href="https://madethis.com/r/nj2zj9gk" target="_blank" rel="noopener noreferrer" className="text-current no-underline inline-flex items-center gap-1 hover:opacity-75 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Built with MadeThis
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
