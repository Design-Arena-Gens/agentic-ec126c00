import Link from "next/link";

const features = [
  {
    title: "Adaptive Collections",
    description:
      "Prism rewrites the photo feed in realtime, clustering shared memories with AI-curated sequences that feel intentional every time.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 text-[#F3E68F]"
      >
        <rect
          x="3"
          y="6"
          width="26"
          height="20"
          rx="6"
          fill="currentColor"
          className="opacity-30"
        />
        <path
          d="M9 12h14M9 17h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="23" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Contextual Privacy",
    description:
      "Granular sharing lanes let you decide who sees what frame, with auto-blurred faces and access windows that expire on their own.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 text-[#4AF2EA]"
      >
        <path
          d="M16 6c-5 0-10 2.5-13 7 3 4.5 8 7 13 7s10-2.5 13-7c-3-4.5-8-7-13-7Z"
          fill="currentColor"
          className="opacity-30"
        />
        <circle cx="16" cy="13" r="4" fill="currentColor" />
        <path
          d="M12.5 19.5 10 26l6-2 6 2-2.5-6.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="opacity-80"
        />
      </svg>
    ),
  },
  {
    title: "Signal-First Analytics",
    description:
      "Heatmaps, retention pulses, and AI captions surface the emotional resonance behind every drop, in dashboards teams can actually read.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 text-[#EFA9B6]"
      >
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="6"
          fill="currentColor"
          className="opacity-30"
        />
        <path
          d="M12 20.5 14.5 18l3 3.5 4.5-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const pipeline = [
  {
    title: "Capture",
    body: "Upload or stream live from any device. Prism normalizes metadata, strips noise, and anchors every frame in a secure capsule.",
    accent: "#4AF2EA",
  },
  {
    title: "Intelligence",
    body: "Vision models detect moments, faces, and moods. Narrative AI drafts captions while anomaly checks keep the story aligned.",
    accent: "#F3E68F",
  },
  {
    title: "Distribution",
    body: "Publish to curated collectives, schedule drops, or trigger automated highlights—all with reversible permissions baked in.",
    accent: "#EFA9B6",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden bg-[#0E0E0E]">
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(74,242,234,0.18),_transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(243,230,143,0.16),_rgba(14,14,14,0))] blur-2xl" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:pt-16 lg:px-8">
        <header className="noise glass-panel flex flex-col gap-4 rounded-full px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_top,_rgba(243,230,143,0.32),_rgba(14,14,14,0.3))] text-base font-semibold text-black">
              ⚡
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Prism
            </span>
          </div>
          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-400 sm:flex">
            <a className="transition hover:text-white" href="#hero">
              Product
            </a>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#pipeline">
              AI Engine
            </a>
            <a className="transition hover:text-white" href="#gallery">
              Gallery
            </a>
          </nav>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button className="hidden rounded-full px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:text-white sm:inline-flex">
              Log In
            </button>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#F3E68F] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_24px_rgba(243,230,143,0.28)] transition hover:bg-[#f7e15c]"
              href="#cta"
            >
              Request Access
            </a>
          </div>
        </header>

        <section
          id="hero"
          className="grid gap-14 pt-10 md:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-3 text-sm tracking-tight text-zinc-400">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase text-zinc-300">
                Now Live
              </span>
              <span className="text-zinc-500">
                Intelligent, cinematic photo sharing for teams that move fast.
              </span>
            </div>
            <div className="space-y-7">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                A tech-noir vault for the photos your AI will never forget.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl">
                Prism orchestrates your collective’s visual memory with
                machine-guided stories, biometric access, and context-aware
                sharing that feels effortless, secure, and cinematic.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-[3.1rem] items-center justify-center gap-2 rounded-full bg-[#F3E68F] px-7 text-base font-semibold text-black transition hover:bg-[#f5dd53]"
                href="#cta"
              >
                Start the Beta
              </a>
              <a
                className="inline-flex min-h-[3.1rem] items-center justify-center rounded-full border border-white/15 px-7 text-base font-semibold text-zinc-200 transition hover:border-white/25 hover:text-white"
                href="#pipeline"
              >
                See the Workflow
              </a>
            </div>
            <dl className="grid grid-cols-1 gap-6 text-sm text-zinc-400 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <dt className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Collectives Migrated
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-white">
                  3,200+
                </dd>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <dt className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  AI Story Drafts Saved
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-white">
                  72%
                </dd>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <dt className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  End-to-End Latency
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-white">
                  1.7s
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(239,169,182,0.24),_transparent_65%)] blur-2xl" />
            <div className="glass-panel noise relative flex flex-col gap-6 overflow-hidden rounded-[2.5rem] border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.75)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Live Session
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Orbit Collective
                  </p>
                </div>
                <span className="rounded-full border border-pink-300/30 bg-[#EFA9B6]/30 px-4 py-2 text-xs font-semibold uppercase text-[#EFA9B6]">
                  Face ID Sync
                </span>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#111111]/90 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#EFA9B6]/40 bg-[#EFA9B6]/20 text-base font-semibold text-white">
                      <span className="absolute inset-0 animate-ping rounded-full border border-[#EFA9B6]/20" />
                      3D
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Identity Mesh
                      </p>
                      <p className="text-sm text-zinc-300">
                        4 new faces verified
                      </p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#EFA9B6]">
                    Synced
                  </span>
                </div>
                <div className="grid gap-3 text-xs text-zinc-400 sm:grid-cols-2">
                  <div className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <span className="text-[10px] uppercase tracking-[0.34em] text-zinc-500">
                      Signal
                    </span>
                    <span className="text-sm font-semibold text-white">
                      98.2%
                    </span>
                    <span className="text-xs text-[#4AF2EA]">
                      +2.4% vs baseline
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <span className="text-[10px] uppercase tracking-[0.34em] text-zinc-500">
                      Clearance
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Tier Gamma
                    </span>
                    <span className="text-xs text-zinc-400">
                      Revoked in 6h 12m
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#4AF2EA]" />
                  Quantum noise removed
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#F3E68F]" />
                  Storyline remapped
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#EFA9B6]" />
                  Rights auto-synced
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="space-y-10 rounded-[2.5rem] border border-white/10 bg-[#101010] p-10 shadow-[0_35px_65px_-55px_rgba(243,230,143,0.45)]"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
                Signal Layers
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Engineered for creative collectives operating at the speed of
                AI.
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Modular intelligence lets you power instant drops, private
              briefings, and retro archives without ever compromising the vibe.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="relative flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#0E0E0E]/60">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#F3E68F]">
                  Explore
                  <span aria-hidden="true">↗</span>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pipeline"
          className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          <div className="flex flex-col gap-6 rounded-[2.25rem] border border-[#EFA9B6]/30 bg-[radial-gradient(circle_at_top_left,_rgba(239,169,182,0.22),_rgba(16,16,16,0.92))] p-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#EFA9B6]">
              Face ID Pulse
            </div>
            <h3 className="text-3xl font-semibold leading-tight text-white">
              Precision face matching with reversible biometric signatures.
            </h3>
            <p className="text-sm text-zinc-400">
              Pink-coded sequences hold sensitive approvals in encrypted shrouds
              while keeping your collective in flow. Toggle revocations, set
              geofence locks, and let Prism handle the audit trail.
            </p>
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              {["Geofenced Tokens", "Dual Consent", "Anomaly Alerts"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-xs text-zinc-300"
                  >
                    <span className="text-[10px] uppercase tracking-[0.32em] text-[#EFA9B6]">
                      Active
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="glass-panel rounded-[2.25rem] border-white/15 bg-[#0F0F0F]/95 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  AI Pipeline
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Quantum-grade processing without the enterprise drag.
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#4AF2EA]">
                1.7s Loop
              </span>
            </div>
            <div className="mt-8 space-y-6">
              {pipeline.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-black"
                    style={{
                      background: `${item.accent}`,
                      boxShadow: `0 0 18px ${item.accent}33`,
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-zinc-500">
                      {item.title}
                    </p>
                    <p className="text-base leading-relaxed text-zinc-300">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#050505] p-10"
        >
          <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(74,242,234,0.3),_transparent_60%)] blur-2xl" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
                Live Gallery
              </p>
              <h3 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Broadcast cinematic drops with crystalline fidelity.
              </h3>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:text-white">
              Preview Studio
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Neon Alley", "Submerged Neon", "Midnight Riot"].map(
              (title, index) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
                >
                  <div
                    className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_top,_rgba(243,230,143,0.18),_rgba(14,14,14,0.9))] transition duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        index === 1
                          ? "linear-gradient(135deg, rgba(74,242,234,0.2), rgba(239,169,182,0.12) 45%, rgba(14,14,14,0.85)), radial-gradient(circle at 20% 20%, rgba(239,169,182,0.4), transparent 50%), radial-gradient(circle at 80% 40%, rgba(74,242,234,0.4), transparent 45%)"
                          : index === 2
                            ? "linear-gradient(135deg, rgba(239,169,182,0.2), rgba(243,230,143,0.1) 45%, rgba(14,14,14,0.85)), radial-gradient(circle at 20% 30%, rgba(243,230,143,0.32), transparent 55%), radial-gradient(circle at 80% 65%, rgba(239,169,182,0.3), transparent 45%)"
                            : "linear-gradient(135deg, rgba(74,242,234,0.22), rgba(243,230,143,0.08) 45%, rgba(14,14,14,0.85)), radial-gradient(circle at 30% 25%, rgba(74,242,234,0.38), transparent 55%), radial-gradient(circle at 80% 65%, rgba(243,230,143,0.28), transparent 45%)",
                      backgroundBlendMode: "screen, lighten, normal",
                    }}
                  />
                  <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/70 px-4 py-3">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                      <span>Drop {index + 1}</span>
                      <span>Encrypted</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-zinc-400">
                      216 assets · 12 collaborators synched in real time.
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        <section
          id="cta"
          className="glass-panel noise flex flex-col gap-6 rounded-[2.25rem] border-white/10 bg-[#141414]/95 p-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Secure Access
            </p>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Get the Prism link and unlock the future of photo intelligence.
            </h3>
            <p className="max-w-2xl text-sm text-zinc-400">
              We onboard crews in under 48 hours with migration playbooks,
              custom AI calibrations, and concierge launch support.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              className="h-12 min-w-[16rem] rounded-full border border-white/15 bg-black/60 px-5 text-sm text-white placeholder:text-zinc-600 focus:border-[#F3E68F] focus:outline-none"
              placeholder="you@collective.run"
              type="email"
            />
            <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#F3E68F] px-7 text-sm font-semibold text-black transition hover:bg-[#f5dd53]">
              Request Invite
            </button>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {currentYear} Prism Systems. All signal reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-[0.3em]">
            <Link className="transition hover:text-white" href="/">
              Status
            </Link>
            <Link className="transition hover:text-white" href="/">
              Privacy
            </Link>
            <Link className="transition hover:text-white" href="/">
              Terms
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
