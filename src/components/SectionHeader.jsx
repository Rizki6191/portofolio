import React from 'react'
import { motion } from 'framer-motion'

export function SectionHeader({ eyebrow, title, description, isDark = true }) {
  return (
    <div className="mb-10 text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-emerald-400"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark
            ? 'bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'
            : 'text-slate-900'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
