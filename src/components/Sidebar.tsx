import { useState } from "react";
import { AlertTriangle, ArrowLeft, ChevronRight, CircleHelp, FileText, MessageCircle, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { answers, clauses, questions, type Clause } from "../data/mockAgreement";

type Props = {
  onClose?: () => void;
};

const attentionStyle = {
  high: { icon: "🔴", label: "High attention", bg: "bg-red-50", border: "border-red-100", dot: "bg-red-500" },
  medium: { icon: "🟠", label: "Worth reviewing", bg: "bg-orange-50", border: "border-orange-100", dot: "bg-orange-500" },
  low: { icon: "🟡", label: "Informational", bg: "bg-yellow-50", border: "border-yellow-100", dot: "bg-yellow-500" }
};

export default function Sidebar({ onClose }: Props) {
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Clause | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<{ text: string; source: string } | null>(null);
  const [showAll, setShowAll] = useState(false);

  const analyze = () => {
    setLoading(true);
    setSelected(null);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1100);
  };

  const ask = (q: string) => {
    setQuestion(q);
    setAnswer(answers[q] ?? {
      text: "This prototype only has a few demo questions. In the real product, the answer would be grounded in the agreement and linked to the relevant clause.",
      source: "Agreement"
    });
  };

  return (
    <aside className="fixed right-0 top-0 z-50 flex h-screen w-[430px] max-w-full flex-col border-l border-slate-200 bg-white shadow-2xl">
      <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ScaleIcon />
          </div>
          <div>
            <div className="font-bold leading-tight text-slate-900">Lexi</div>
            <div className="text-[11px] text-slate-500">Legal language, made human.</div>
          </div>
        </div>
        <button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
          <X size={18} />
        </button>
      </header>

      {!analyzed && !loading && (
        <div className="flex flex-1 flex-col justify-center px-7">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <FileText size={27} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Understand before you agree.</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Lexi reads the agreement on this page and turns important legal language into clear, practical explanations.
          </p>

          <div className="mt-7 space-y-3">
            {[
              ["Plain-language explanations", "Turn legal wording into something you can actually understand."],
              ["Attention points", "Find clauses that deserve a closer look."],
              ["Source-backed answers", "Trace explanations back to the original agreement."]
            ].map(([title, text]) => (
              <div key={title} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-slate-700" size={18} />
                <div>
                  <div className="text-sm font-semibold text-slate-800">{title}</div>
                  <div className="mt-0.5 text-xs leading-5 text-slate-500">{text}</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={analyze} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            <Sparkles size={17} /> Analyze this agreement
          </button>
          <p className="mt-3 text-center text-[11px] text-slate-400">Demo mode · No document is actually sent anywhere</p>
        </div>
      )}

      {loading && (
        <div className="flex flex-1 flex-col justify-center px-7">
          <div className="mx-auto flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Sparkles size={26} />
          </div>
          <h2 className="mt-5 text-center text-xl font-bold text-slate-900">Analyzing agreement...</h2>
          <p className="mt-1 text-center text-sm text-slate-500">Finding the parts that matter most.</p>
          <div className="mt-8 space-y-3">
            {["Reading agreement", "Finding important clauses", "Translating legal language", "Identifying attention points"].map((item, i) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${i < 3 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>
                  {i < 3 ? "✓" : "•"}
                </div>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-4/5 animate-pulse rounded-full bg-slate-900" />
          </div>
        </div>
      )}

      {analyzed && (
        <div className="min-h-0 flex-1 overflow-y-auto">
          {selected ? (
            <ClauseDetail clause={selected} onBack={() => setSelected(null)} />
          ) : (
            <>
              <div className="border-b border-slate-100 px-5 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-400">AGREEMENT ANALYZED</div>
                    <h2 className="mt-1 text-lg font-bold text-slate-900">ExampleSite Terms</h2>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">Complete</div>
                </div>
              </div>

              <div className="px-5 py-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <AlertTriangle size={17} /> 3 things to know
                  </div>
                  <div className="mt-4 space-y-3">
                    {clauses.slice(0, 3).map((clause) => {
                      const s = attentionStyle[clause.attention];
                      return (
                        <button key={clause.id} onClick={() => setSelected(clause)} className={`w-full rounded-xl border ${s.border} ${s.bg} p-3 text-left transition hover:-translate-y-0.5`}>
                          <div className="flex items-start gap-2">
                            <span>{s.icon}</span>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-semibold text-slate-800">{clause.title}</div>
                              <div className="mt-1 text-xs leading-5 text-slate-600">{clause.summary}</div>
                            </div>
                            <ChevronRight size={16} className="mt-0.5 shrink-0 text-slate-400" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Agreement breakdown</div>
                    <div className="text-xs text-slate-500">4 notable clauses found</div>
                  </div>
                  <button onClick={() => setShowAll(!showAll)} className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">{showAll ? "Show less" : "View all"}</button>
                </div>

                {showAll && (
                  <div className="mt-3 space-y-2">
                    {clauses.map(c => (
                      <button key={c.id} onClick={() => setSelected(c)} className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left hover:bg-slate-50">
                        <span>{attentionStyle[c.attention].icon}</span>
                        <span className="flex-1 text-sm font-medium text-slate-800">{c.title}</span>
                        <span className="text-[11px] text-slate-400">{c.category}</span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900"><MessageCircle size={16} /> Ask this agreement</div>
                  <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-slate-400">
                    <div className="flex gap-2">
                      <input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && question.trim()) ask(question.trim()); }} placeholder="Can they share my data?" className="min-w-0 flex-1 px-2 py-2 text-sm outline-none placeholder:text-slate-400" />
                      <button onClick={() => question.trim() && ask(question.trim())} className="rounded-lg bg-slate-900 px-3 text-white hover:bg-slate-800"><Search size={16} /></button>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {questions.slice(0, 3).map(q => <button key={q} onClick={() => ask(q)} className="rounded-full border border-slate-200 px-2.5 py-1.5 text-[11px] text-slate-600 hover:bg-slate-50">{q}</button>)}
                  </div>
                </div>

                {answer && (
                  <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-indigo-700">Lexi's explanation</div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{answer.text}</p>
                    <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-700 hover:text-indigo-900">
                      <FileText size={14} /> {answer.source}
                    </button>
                  </div>
                )}

                <div className="mt-6 rounded-xl border border-slate-100 p-3">
                  <div className="flex items-start gap-2">
                    <CircleHelp size={16} className="mt-0.5 shrink-0 text-slate-400" />
                    <p className="text-[11px] leading-5 text-slate-500">Lexi explains document language and highlights clauses for review. It is not a substitute for legal advice.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </aside>
  );
}

function ClauseDetail({ clause, onBack }: { clause: Clause; onBack: () => void }) {
  const s = attentionStyle[clause.attention];
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
        <button onClick={onBack} className="rounded-lg p-2 hover:bg-slate-100"><ArrowLeft size={18} /></button>
        <div className="font-semibold text-slate-900">Clause details</div>
      </div>
      <div className="px-5 py-5">
        <div className={`inline-flex items-center gap-2 rounded-full ${s.bg} px-3 py-1.5 text-xs font-semibold text-slate-700`}>
          {s.icon} {s.label}
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-900">{clause.title}</h2>
        <div className="mt-1 text-xs text-slate-400">{clause.category}</div>

        <section className="mt-6">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">What it means</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{clause.detail}</p>
        </section>

        <section className="mt-6">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Original clause</div>
          <blockquote className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            “{clause.original}”
          </blockquote>
        </section>

        <div className="mt-4 rounded-xl bg-indigo-50 p-3">
          <div className="text-xs font-bold text-indigo-800">Source</div>
          <div className="mt-1 text-xs text-indigo-700">{clause.source}</div>
        </div>
      </div>
    </div>
  );
}

function ScaleIcon() {
  return <span className="text-lg">⚖</span>;
}