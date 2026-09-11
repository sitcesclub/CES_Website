const upcomingEvents = [
  { date: "20 SEP", title: "Cloud Systems Workshop", status: "Registration open", accent: true },
  { date: "27 SEP", title: "CES DevSprint", status: "Coming soon", accent: false },
];

const recentActivity = [
  { detail: "Onboarded core management tracks for the current academic calendar cycle." },
  { detail: "Upgraded laboratory developer environments in coordination with department heads." },
];

export default function WhatIsHappening() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 border-t border-slate-800 py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Activity Stream</p>
          <h2 className="text-3xl font-bold tracking-tight text-white">What's happening</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase border-b border-slate-800 pb-2">
              Upcoming
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded">
                  <span className="text-sm font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 shrink-0">
                    {ev.date}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{ev.title}</h4>
                    <p className={`text-xs mt-0.5 ${ev.accent ? 'text-slate-300 font-medium' : 'text-slate-500'}`}>
                      {ev.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase border-b border-slate-800 pb-2">
              Recent Log
            </h3>
            <div className="space-y-4">
              {recentActivity.map((rc, i) => (
                <div key={i} className="p-4 border-l-2 border-slate-700 bg-slate-900/20 text-sm text-slate-400 leading-relaxed">
                  {rc.detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
