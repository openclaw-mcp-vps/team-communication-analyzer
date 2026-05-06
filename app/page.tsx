export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-sm font-medium border border-[#30363d]">
          Team Coordination
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Analyze Team Communication Patterns for Bottlenecks
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Connect your Slack or Discord workspace and instantly surface response time patterns, collaboration gaps, and communication bottlenecks — so your team can move faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>
      </section>

      <section className="max-w-sm mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Slack &amp; Discord OAuth integration</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Response time &amp; bottleneck analysis</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Real-time collaboration dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Weekly insight reports via email</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Up to 5 workspaces</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to Slack or Discord?</h3>
            <p className="text-[#8b949e] text-sm">We use official OAuth flows — you authorize read-only access to your workspace messages. No passwords are stored, and you can revoke access at any time from your Slack or Discord settings.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What kind of bottlenecks does it detect?</h3>
            <p className="text-[#8b949e] text-sm">The analyzer identifies slow response threads, over-reliance on specific team members, channels with low engagement, and time-of-day patterns that delay decisions.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my team's message data private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Message content is processed in-memory for analysis and never stored long-term. Only aggregated metrics and anonymized patterns are retained for your dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Team Communication Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
