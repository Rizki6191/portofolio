import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowUpRight } from 'lucide-react'

export function WriteupCard({ item, index, isDark = true }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? 'border-white/10 bg-[#0d1210]/60 hover:border-emerald-500/40 hover:bg-[#0f1714]/80 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
          : 'border-slate-200 bg-white/80 hover:border-emerald-600/40 hover:bg-white shadow-md hover:shadow-lg'
      }`}
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Thumbnail preview if available */}
        {item.image && (
          <div className="relative mb-4 overflow-hidden rounded-xl border border-white/5 bg-black/40">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Category tag on image */}
            {item.category && (
              <span className="absolute top-3 left-3 rounded-md border border-emerald-500/30 bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                {item.category}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag, tIndex) => (
              <span
                key={tIndex}
                className={`rounded-md px-2 py-0.5 font-mono text-[10px] ${
                  isDark
                    ? 'border border-white/5 bg-white/5 text-slate-300'
                    : 'border border-slate-200 bg-slate-100 text-slate-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-mono text-base font-bold tracking-tight transition-colors duration-200 group-hover:text-emerald-400 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2.5 text-xs sm:text-sm leading-relaxed line-clamp-3 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Card Action Link */}
      <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/5">
        <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
          <Terminal className="h-3 w-3 text-emerald-400" />
          <span>CHALLENGE REPO</span>
        </span>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open writeup for ${item.title}`}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
            isDark
              ? 'border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950'
              : 'border border-emerald-600/30 bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white'
          }`}
        >
          <span>View Exploit</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  )
}
