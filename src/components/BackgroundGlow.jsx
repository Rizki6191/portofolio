import React from 'react'

export function BackgroundGlow({ isDark = true }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* Primary Emerald Ambient Glow */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] max-w-[90vw] rounded-full blur-[140px] transition-opacity duration-700 ${
          isDark
            ? 'bg-gradient-to-tr from-emerald-600/15 via-emerald-500/10 to-teal-400/5 opacity-80'
            : 'bg-gradient-to-tr from-emerald-500/10 via-emerald-400/10 to-teal-300/10 opacity-60'
        }`}
      />

      {/* Secondary Cyan Glow - Left */}
      <div
        className={`absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full blur-[120px] transition-opacity duration-700 ${
          isDark
            ? 'bg-emerald-950/40 via-cyan-900/15 to-transparent opacity-70'
            : 'bg-emerald-200/30 to-transparent opacity-40'
        }`}
      />

      {/* Tertiary Violet/Deep Noir Glow - Right */}
      <div
        className={`absolute top-2/3 -right-32 h-[400px] w-[400px] rounded-full blur-[130px] transition-opacity duration-700 ${
          isDark
            ? 'bg-emerald-900/20 via-teal-900/10 to-transparent opacity-60'
            : 'bg-teal-100/30 to-transparent opacity-40'
        }`}
      />

      {/* Vignette Overlay for Depth */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-radial from-transparent via-[#08090a]/40 to-[#08090a]/80'
            : 'bg-radial from-transparent via-white/20 to-white/60'
        }`}
      />
    </div>
  )
}
