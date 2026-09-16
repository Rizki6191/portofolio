import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Terminal,
  Code2,
  Cpu,
  ArrowRight,
  Mail,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export function HeroSection({ profileData, setPage, isDark = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-6 sm:py-10"
    >
      {/* Top Banner / Status Badge */}
      <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-3">
        <div
          className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 backdrop-blur-md ${
            isDark
              ? 'border-emerald-500/25 bg-emerald-950/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
              : 'border-emerald-600/30 bg-emerald-50 text-emerald-800'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <span className="text-xs font-mono font-medium tracking-wide">
            {profileData.status}
          </span>
        </div>

        <div
          className={`hidden sm:inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${
            isDark
              ? 'border-white/10 bg-white/5 text-slate-400'
              : 'border-slate-200 bg-slate-100 text-slate-600'
          }`}
        >
          <Terminal className="h-3 w-3 text-emerald-400" />
          <span>x86_64 ELF & Backend Specialist</span>
        </div>
      </motion.div>

      {/* Hero Main Grid */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <p
              className={`font-mono text-xs font-semibold uppercase tracking-[0.28em] ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              SYS.PROFILE // {profileData.handle}
            </p>

            <h1
              className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl leading-tight ${
                isDark
                  ? 'bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'
                  : 'text-slate-900'
              }`}
            >
              {profileData.name}
            </h1>

            <p
              className={`mt-3 flex items-center gap-2 text-base sm:text-lg font-medium ${
                isDark ? 'text-emerald-300' : 'text-emerald-700'
              }`}
            >
              <Shield className="h-4 w-4" />
              <span>{profileData.title}</span>
            </p>
          </div>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {profileData.about}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setPage('projects')}
              className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-mono font-semibold transition-all duration-300 cursor-pointer ${
                isDark
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
              }`}
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => setPage('writeups')}
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/30'
                  : 'border-emerald-600/30 bg-white text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>CySec Writeups</span>
            </button>

            {profileData.socials?.email && (
              <a
                href={`mailto:${profileData.socials.email}`}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-mono transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
                }`}
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Contact</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-sm">
            <div
              className={`absolute -inset-1 rounded-3xl blur-2xl transition-opacity duration-500 ${
                isDark
                  ? 'bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-emerald-400/10 opacity-70 group-hover:opacity-100'
                  : 'bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-transparent opacity-60'
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-3xl border p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 ${
                isDark
                  ? 'border-white/10 bg-[#0d1210]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-emerald-500/40'
                  : 'border-slate-200 bg-white/80 shadow-xl group-hover:border-emerald-600/30'
              }`}
            >
              {/* Corner Cyber Accents */}
              <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-emerald-400/60" />
              <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-emerald-400/60" />
              <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-emerald-400/60" />
              <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-emerald-400/60" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/40">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="h-72 w-full sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[11px] text-white font-medium tracking-wide">
                      VERIFIED
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-emerald-400 uppercase">
                    ID
                  </span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="font-mono text-xs font-semibold text-white">
                    {profileData.handle}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Backend & Cyber Security
                  </p>
                </div>

                {profileData.socials?.github && (
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>github</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Metrics */}
      {profileData.stats && profileData.stats.length > 0 && (
        <motion.div variants={itemVariants} className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl border p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-white/[0.04] shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]'
                    : 'border-slate-200 bg-white/70 hover:border-emerald-600/30 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {stat.value}
                  </span>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                      isDark
                        ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                        : 'border-emerald-600/20 bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {idx === 0 && <Terminal className="h-4 w-4" />}
                    {idx === 1 && <Code2 className="h-4 w-4" />}
                    {idx === 2 && <Shield className="h-4 w-4" />}
                    {idx === 3 && <Cpu className="h-4 w-4" />}
                  </div>
                </div>

                <p
                  className={`mt-2 font-mono text-xs uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Skills & Stacks */}
      <motion.div variants={itemVariants} className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Skills */}
        <div
          className={`rounded-2xl border p-6 backdrop-blur-xl ${
            isDark
              ? 'border-white/10 bg-white/[0.02]'
              : 'border-slate-200 bg-white/70'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-emerald-400" />

            <h3
              className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              Core Capabilities
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-colors duration-200 ${
                  isDark
                    ? 'border-emerald-500/20 bg-emerald-950/20 text-slate-200 hover:border-emerald-400/50 hover:text-white'
                    : 'border-emerald-600/20 bg-emerald-50/70 text-slate-800 hover:border-emerald-600'
                }`}
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className={`rounded-2xl border p-6 backdrop-blur-xl ${
            isDark
              ? 'border-white/10 bg-white/[0.02]'
              : 'border-slate-200 bg-white/70'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="h-4 w-4 text-emerald-400" />

            <h3
              className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}
            >
              Tech Stack & Tooling
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {profileData.stacks.map((stack, index) => (
              <div
                key={stack.id || stack.name || index}
                className={`group flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 bg-white/5 hover:border-emerald-500/30 hover:bg-emerald-950/20'
                    : 'border-slate-200 bg-slate-100 hover:border-emerald-500/30 hover:bg-emerald-50'
                }`}
              >
                {/* Stack Logo */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                    isDark
                      ? 'border-white/10 bg-black/20'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {stack.logo ? (
                    <img
                      src={stack.logo}
                      alt=""
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Code2 className="h-4 w-4 text-emerald-400" />
                  )}
                </div>

                {/* Stack Name + Category */}
                <div className="min-w-0">
                  <p
                    className={`truncate text-xs font-mono font-semibold ${
                      isDark ? 'text-slate-100' : 'text-slate-800'
                    }`}
                  >
                    {stack.name}
                  </p>

                  {stack.category && (
                    <p
                      className={`truncate text-[9px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-500' : 'text-slate-500'
                      }`}
                    >
                      {stack.category}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}