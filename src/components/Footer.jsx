import React from 'react'
import { Terminal, Mail, ArrowUp } from 'lucide-react'
import { GithubIcon } from './Icons'

export function Footer({ profileData, navItems, setPage, isDark = true }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`mt-20 border-t transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#060807]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Brand & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                  isDark
                    ? 'border-emerald-500/30 bg-emerald-950/50 text-emerald-400'
                    : 'border-emerald-600/30 bg-emerald-50 text-emerald-700'
                }`}
              >
                <Terminal className="h-4 w-4" />
              </div>
              <span
                className={`font-mono text-sm font-bold tracking-wider ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {profileData.name}
              </span>
            </div>

            <p
              className={`max-w-md text-xs sm:text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {profileData.tagline}
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>STATUS: ALL SYSTEMS VERIFIED & SECURE</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setPage(item.id)
                  scrollToTop()
                }}
                className={`transition-colors cursor-pointer ${
                  isDark
                    ? 'text-slate-400 hover:text-emerald-300'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {profileData.socials?.email && (
              <a
                href={`mailto:${profileData.socials.email}`}
                aria-label="Email Me"
                className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-950/40'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-600/40 hover:text-emerald-700'
                }`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}

            {profileData.socials?.github && (
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-950/40'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-600/40 hover:text-emerald-700'
                }`}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300'
              }`}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div
          className={`mt-8 border-t pt-6 text-center sm:flex sm:items-center sm:justify-between font-mono text-[11px] ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}
        >
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <span>Encrypted with React & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
