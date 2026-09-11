import Link from "next/link";

export default function GalleryPreview() {
  return (
    <section className="min-h-screen flex items-center bg-slate-900 border-t border-slate-800 py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Visual Feed</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Moments from CES</h2>
          </div>
          <Link href="/gallery" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            View gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-40 bg-slate-950/60 border border-slate-800 rounded hover:border-slate-700 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          </div>
          <div className="h-40 bg-slate-950/60 border border-slate-800 rounded hover:border-slate-700 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          </div>
          <div className="h-40 bg-slate-950/60 border border-slate-800 rounded hover:border-slate-700 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          </div>
          <div className="h-40 bg-slate-950/60 border border-slate-800 rounded hover:border-slate-700 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          </div>
          <div className="h-40 bg-slate-950/60 border border-slate-800 rounded hover:border-slate-700 transition-colors md:col-span-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
