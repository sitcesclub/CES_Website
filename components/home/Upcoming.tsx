const upcomingEvents = [
  { date: "20 SEP", title: "Cloud Systems Workshop", status: "Registration open", accent: true },
  { date: "27 SEP", title: "CES DevSprint", status: "Coming soon", accent: false },
];

const recentActivity = [
  { detail: "Onboarded core management tracks for the current academic calendar cycle." },
  { detail: "Upgraded laboratory developer environments in coordination with department heads." },
];

export default function Upcoming() {
  return (
    <section className="min-h-screen flex flex-col justify-center border-t border-white/[0.03] py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12">
          <p className="text-[11px] font-medium tracking-[2px] text-[var(--ces-text-secondary)] uppercase mb-2">Activity Stream</p>
          <h2 className="text-3xl font-medium text-[var(--ces-text-primary)] tracking-tight">What's happening</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[2px] text-[var(--ces-text-muted)] uppercase border-b border-white/[0.05] pb-2">
              Upcoming
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/[0.04] rounded-xl backdrop-blur-sm relative overflow-hidden">
                  {ev.accent && <div className="absolute left-0 top-0 bottom-0 w-[3px] accent-stripe" />}

                  <span className="text-xs font-mono font-medium text-[var(--ces-text-primary)] bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.03] shrink-0">
                    {ev.date}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-[var(--ces-text-primary)]">{ev.title}</h4>
                    <p className={`text-xs mt-0.5 ${ev.accent ? 'text-[var(--ces-gold)] font-medium' : 'text-[var(--ces-text-muted)]'}`}>
                      {ev.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[2px] text-[var(--ces-text-muted)] uppercase border-b border-white/[0.05] pb-2">
              Recent Log
            </h3>
            <div className="space-y-4">
              {recentActivity.map((rc, i) => (
                <div key={i} className="p-4 border-l border-white/[0.08] bg-white/[0.002] text-[13px] text-[var(--ces-text-muted)] leading-relaxed rounded-r-xl">
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
