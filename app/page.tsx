import {
  Activity,
  Cpu,
  Gauge,
  Radar,
  Shield,
  Zap,
} from "lucide-react";

const systems = [
  { label: "Arc Reactor", value: "98%", trend: "+2.1", icon: Zap },
  { label: "Flight Core", value: "Stable", trend: "Nominal", icon: Gauge },
  { label: "Threat Grid", value: "3 Alerts", trend: "Tracking", icon: Radar },
  { label: "Armor Matrix", value: "Online", trend: "Synced", icon: Shield },
];

export default function Home() {
  return (
    <main className="jarvis-bg flex min-h-screen w-full items-center justify-center px-4 py-6 text-cyan-100">
      <section className="jarvis-panel mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-cyan-400/30 p-4 shadow-[0_0_80px_rgba(0,220,255,0.15)]">
        <header className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-cyan-300/80">STARK INDUSTRIES</p>
            <h1 className="text-2xl font-semibold tracking-wide text-cyan-100">JARVIS Mobile</h1>
          </div>
          <div className="jarvis-glow flex items-center gap-1 rounded-full border border-cyan-300/40 px-3 py-1 text-xs">
            <Activity className="h-3.5 w-3.5" />
            LIVE
          </div>
        </header>

        <div className="mb-5 rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-4">
          <p className="text-[0.65rem] tracking-[0.35em] text-cyan-300/70">SUIT STATUS</p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <p className="text-4xl font-bold leading-none text-cyan-100">87%</p>
              <p className="mt-1 text-xs text-cyan-300/80">Energy Remaining</p>
            </div>
            <div className="h-20 w-20 rounded-full border border-cyan-300/40 bg-[radial-gradient(circle,_rgba(34,211,238,0.45)_0%,_rgba(14,116,144,0.08)_60%,_transparent_100%)]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {systems.map(({ label, value, trend, icon: Icon }) => (
            <article
              key={label}
              className="rounded-xl border border-cyan-300/20 bg-black/30 p-3"
            >
              <Icon className="mb-2 h-4 w-4 text-cyan-300" />
              <p className="text-xs text-cyan-200/80">{label}</p>
              <p className="mt-1 text-base font-semibold">{value}</p>
              <p className="text-[0.7rem] text-cyan-300/70">{trend}</p>
            </article>
          ))}
        </div>

        <footer className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-cyan-300/20 bg-black/20 p-2 text-center text-xs text-cyan-200/90">
          <button className="rounded-xl border border-cyan-300/25 bg-cyan-400/10 py-2">HUD</button>
          <button className="rounded-xl border border-transparent py-2 text-cyan-300/75">Commands</button>
          <button className="rounded-xl border border-transparent py-2 text-cyan-300/75">Telemetry</button>
        </footer>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-300/15 bg-cyan-500/5 px-3 py-2 text-[0.7rem] text-cyan-300/80">
          <span className="flex items-center gap-1">
            <Cpu className="h-3.5 w-3.5" /> Neural Sync: 12ms
          </span>
          <span>v6.2.1</span>
        </div>
      </section>
    </main>
  );
}
