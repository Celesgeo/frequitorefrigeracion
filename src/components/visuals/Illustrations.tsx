/**
 * Decorative climate visuals. Illustrative only — not photographs of Fresquito jobs.
 */
export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-linear-to-br from-[#0a2746] to-[#07182c] p-5 shadow-[0_30px_80px_-32px_rgb(0_0_0_/_0.7)] sm:p-6">
      <div className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full bg-ice/18 blur-3xl" />
      <div className="mb-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-ice/80">
        <span>Panel técnico</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-[pulse-dot_2.4s_ease-in-out_infinite] rounded-full bg-ice" />
          Diagnóstico
        </span>
      </div>

      <svg viewBox="0 0 360 220" className="w-full" aria-hidden="true">
        <rect x="18" y="28" width="150" height="92" rx="16" fill="#0d3358" stroke="#7DD8F5" strokeOpacity="0.35" />
        <rect x="32" y="44" width="122" height="10" rx="5" fill="#7DD8F5" fillOpacity="0.22" />
        <rect x="32" y="62" width="122" height="10" rx="5" fill="#7DD8F5" fillOpacity="0.16" />
        <rect x="32" y="80" width="86" height="10" rx="5" fill="#7DD8F5" fillOpacity="0.12" />
        <path
          d="M176 70 C 214 42, 248 42, 286 70"
          fill="none"
          stroke="#7DD8F5"
          strokeWidth="2"
          strokeDasharray="6 8"
          style={{ animation: "airflow 2.8s linear infinite" }}
        />
        <path
          d="M176 88 C 220 62, 254 62, 304 92"
          fill="none"
          stroke="#087FBF"
          strokeWidth="2"
          strokeDasharray="5 9"
          style={{ animation: "airflow 3.4s linear infinite" }}
        />
        <rect x="214" y="118" width="118" height="72" rx="14" fill="#10243c" stroke="#087FBF" strokeOpacity="0.45" />
        <circle cx="248" cy="154" r="18" fill="none" stroke="#7DD8F5" strokeWidth="3" />
        <circle cx="248" cy="154" r="4" fill="#7DD8F5" />
        <rect x="276" y="138" width="40" height="8" rx="4" fill="#7DD8F5" fillOpacity="0.35" />
        <rect x="276" y="152" width="28" height="8" rx="4" fill="#087FBF" fillOpacity="0.45" />
        <rect x="276" y="166" width="34" height="8" rx="4" fill="#7DD8F5" fillOpacity="0.2" />
      </svg>

      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        {[
          ["Flujo", "Estable"],
          ["Unidad", "Split"],
          ["Zona", "Capital"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-white/5 px-2 py-3">
            <p className="text-[0.68rem] uppercase tracking-[0.14em] text-white/45">{label}</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpaceVisual({ variant }: { variant: "home" | "commerce" | "enterprise" }) {
  const frames = {
    home: ["#d7eef8", "#0b2d4f", "Estar"],
    commerce: ["#cfe4f2", "#087fbf", "Local"],
    enterprise: ["#b9d4e6", "#071b33", "Sala técnica"],
  } as const;
  const [bg, accent, caption] = frames[variant];

  return (
    <div className="relative overflow-hidden rounded-[1.2rem]" style={{ background: bg }}>
      <svg viewBox="0 0 320 180" className="h-40 w-full" aria-hidden="true">
        <rect x="36" y="48" width="120" height="72" rx="12" fill={accent} opacity="0.9" />
        <rect x="48" y="62" width="96" height="8" rx="4" fill="#7DD8F5" opacity="0.45" />
        <rect x="48" y="78" width="72" height="8" rx="4" fill="white" opacity="0.3" />
        <path d="M168 78 C206 48, 238 48, 276 86" fill="none" stroke="#7DD8F5" strokeWidth="3" />
        <circle cx="250" cy="128" r="18" fill="white" opacity="0.35" />
      </svg>
      <span className="sr-only">Ilustración de climatización para {caption}</span>
    </div>
  );
}
