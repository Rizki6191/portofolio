import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react'
import { GithubIcon } from './Icons'

export function Navbar({ page, setPage, theme, setTheme, navItems, profileData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 pb-2 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6 ${
          isDark
            ? 'border-white/10 bg-[#0c0f0d]/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'border-slate-200 bg-white/75 shadow-[0_8px_32px_rgba(15,23,42,0.06)]'
        }`}
      >
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => {
            setPage('home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group flex items-center gap-2.5 cursor-pointer text-left focus:outline-none"
        >
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDark
                ? 'border-emerald-500/30 bg-emerald-950/40 text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'border-emerald-600/30 bg-emerald-50 text-emerald-700 group-hover:border-emerald-600'
            }`}
          >
            <Terminal className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span
                className={`font-mono text-sm font-bold tracking-wider ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {profileData.handle || profileData.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p
              className={`text-[10px] font-mono tracking-widest uppercase ${
                isDark ? 'text-emerald-400/80' : 'text-emerald-700'
              }`}
            >
              PORTFOLIO
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links with Animated Active Indicator */}
        <nav
          className={`hidden md:flex items-center rounded-xl p-1 border ${
            isDark
              ? 'border-white/5 bg-white/[0.02]'
              : 'border-slate-200/60 bg-slate-100/60'
          }`}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = page === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={`relative px-4 py-1.5 text-xs font-mono font-medium tracking-wide transition-colors duration-200 cursor-pointer rounded-lg focus:outline-none ${
                  isActive
                    ? isDark
                      ? 'text-emerald-300'
                      : 'text-emerald-800 font-semibold'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-lg border ${
                      isDark
                        ? 'border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                        : 'border-emerald-600/20 bg-emerald-100/70'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Action Buttons: GitHub & Theme Toggle */}
        <div className="flex items-center gap-2">
          {profileData.socials?.github && (
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`hidden sm:flex items-center justify-center h-9 w-9 rounded-xl border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-950/30'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-600/40 hover:text-emerald-700'
              }`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex items-center justify-center h-9 w-9 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none ${
              isDark
                ? 'border-white/10 bg-white/5 text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/30'
                : 'border-slate-200 bg-slate-100 text-emerald-700 hover:border-emerald-600/40 hover:bg-emerald-50'
            }`}
          >
            {isDark ? (
              <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className={`md:hidden flex items-center justify-center h-9 w-9 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none ${
              isDark
                ? 'border-white/10 bg-white/5 text-slate-300 hover:text-emerald-400'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-emerald-700'
            }`}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-2 mx-auto max-w-6xl rounded-2xl border p-3 backdrop-blur-xl ${
              isDark
                ? 'border-white/10 bg-[#0c0f0d]/90 shadow-2xl'
                : 'border-slate-200 bg-white/95 shadow-xl'
            }`}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = page === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setPage(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-mono transition-colors duration-200 cursor-pointer text-left ${
                      isActive
                        ? isDark
                          ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                          : 'border border-emerald-600/30 bg-emerald-100/70 text-emerald-800 font-semibold'
                        : isDark
                        ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                  </button>
                )
              })}

              {profileData.socials?.github && (
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-mono transition-colors duration-200 ${
                    isDark
                      ? 'bg-white/5 text-slate-300 hover:text-white'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <GithubIcon className="h-4 w-4 text-emerald-400" />
                  <span>GitHub Profile</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
