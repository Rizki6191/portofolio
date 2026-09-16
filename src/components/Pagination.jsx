import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination({ currentPage, totalPages, onPageChange, isDark = true }) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-10 flex items-center justify-center gap-2 font-mono text-xs">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 ${
          isDark
            ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/30 hover:text-white'
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
        }`}
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1
          const isActive = currentPage === pageNum
          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              className={`h-8 w-8 rounded-xl border font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? isDark
                    ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                    : 'border-emerald-600 bg-emerald-100 text-emerald-800'
                  : isDark
                  ? 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 ${
          isDark
            ? 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/30 hover:text-white'
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
