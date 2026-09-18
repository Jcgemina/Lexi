import { useState } from "react";
import { Check, Menu, Sparkles, X } from "lucide-react";
import Sidebar from "./components/Sidebar";

const paragraphs = [
  ["1. Acceptance of Terms", "By accessing or using ExampleSite, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, you may not access or use the Service."],
  ["2. User Accounts", "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account."],
  ["3. Use of Service", "You agree not to misuse the Service, interfere with its operation, or use it for unlawful purposes."],
  ["4. Payments", "Subscription fees are billed at the beginning of each billing period. Fees are generally non-refundable except where required by applicable law."],
  ["5. Subscriptions and Renewal", "Your subscription automatically renews for successive billing periods unless cancelled before the end of the current billing period."],
  ["6. Privacy", "We collect and process information as described in our Privacy Policy, including information needed to operate and improve the Service."],
  ["7. User Content", "You retain ownership of User Content. You grant the Company a non-exclusive, worldwide, royalty-free license to host, reproduce, and display User Content for operation and improvement of the Service."],
  ["8. Information Sharing", "The Company may disclose information to affiliated entities and third-party service providers where reasonably necessary to provide, maintain, or improve the Service."],
  ["9. Intellectual Property", "The Service and its original content, features, and functionality remain the property of the Company and its licensors."],
  ["10. Account Termination", "We may suspend or terminate accounts that violate these terms. You may also stop using the Service or request account closure."],
  ["11. Limitation of Liability", "To the extent permitted by law, the Company will not be liable for certain indirect, incidental, or consequential damages arising from use of the Service."],
  ["12. Dispute Resolution", "Except where prohibited by applicable law, disputes arising from or relating to the Service shall be resolved through binding arbitration in accordance with the procedures described below."]
];

export default function App() {
  const [termsOpen, setTermsOpen] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [lexiOpen, setLexiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <nav className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">⚖</div>
          <span className="font-bold">ExampleSite</span>
        </div>
        <div className="hidden items-center gap-7 text-sm text-slate-500 md:flex">
          <span>Products</span><span>Pricing</span><span>Resources</span><span>Company</span>
        </div>
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><Menu size={19} /></button>
      </nav>

      <main className="mx-auto max-w-6xl px-7 py-16">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Welcome</div>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">A simpler way to manage your work.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">ExampleSite helps teams organize projects, share files, and collaborate in one place.</p>
          <button onClick={() => setTermsOpen(true)} className="mt-8 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Get started</button>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            ["Projects", "Keep work organized in one place."],
            ["Collaboration", "Work together with your team."],
            ["Security", "Manage access and account controls."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-bold">{title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">{text}</div>
            </div>
          ))}
        </div>
      </main>

      {!lexiOpen && (
        <button onClick={() => setLexiOpen(true)} className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-xl hover:bg-slate-800">
          <Sparkles size={16} /> Lexi
        </button>
      )}

      {termsOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-[2px]">
          <div className="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ExampleSite</div>
                <h2 className="mt-1 text-xl font-bold">Terms & Conditions</h2>
              </div>
              <button onClick={() => setTermsOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={19} /></button>
            </header>

            <div className="overflow-y-auto px-6 py-5">
              <p className="text-sm leading-6 text-slate-500">Please review the following terms before continuing. Last updated September 12, 2026.</p>
              <div className="mt-5 space-y-7 text-sm leading-6 text-slate-600">
                {paragraphs.map(([heading, body]) => (
                  <section key={heading}>
                    <h3 className="mb-1.5 font-bold text-slate-900">{heading}</h3>
                    <p>{body}</p>
                  </section>
                ))}
              </div>
            </div>

            <footer className="border-t border-slate-200 bg-slate-50 px-6 py-4">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 h-4 w-4 accent-slate-900" />
                <span>I have read and agree to the Terms & Conditions.</span>
              </label>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button onClick={() => setLexiOpen(true)} className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  <Sparkles size={16} /> Understand with Lexi
                </button>
                <div className="flex gap-2">
                  <button onClick={() => setTermsOpen(false)} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">Decline</button>
                  <button disabled={!agreed} onClick={() => setTermsOpen(false)} className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
                    <Check size={15} /> Accept
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}

      {lexiOpen && <Sidebar onClose={() => setLexiOpen(false)} />}
    </div>
  );
}
