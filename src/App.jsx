import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Terminal,
  ArrowRight,
  Sparkles,
  Inbox,
} from 'lucide-react'

import { profileData, navItems, writeups, projects } from './data/siteData'
import { BackgroundGlow } from './components/BackgroundGlow'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SectionHeader } from './components/SectionHeader'
import { WriteupCard } from './components/WriteupCard'
import { ProjectCard } from './components/ProjectCard'
import { Pagination } from './components/Pagination'
import { Footer } from './components/Footer'

const ITEMS_PER_PAGE = 6

export default function App() {
  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site-theme') || 'dark'
    }
    return 'dark'
  })

  const [writeupCategory, setWriteupCategory] = useState('All')
  const [writeupSearch, setWriteupSearch] = useState('')
  const [projectCategory, setProjectCategory] = useState('All')
  const [projectSearch, setProjectSearch] = useState('')

  const [pagination, setPagination] = useState({
    writeups: 1,
    projects: 1,
  })

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    document.documentElement.classList.toggle('theme-dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('site-theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  // Scroll to top when changing tabs
  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Categories extraction
  const writeupCategories = useMemo(() => {
    const categories = new Set(writeups.map((w) => w.category).filter(Boolean))
    return ['All', ...Array.from(categories)]
  }, [])

  const projectCategories = useMemo(() => {
    const categories = new Set(projects.map((p) => p.category).filter(Boolean))
    return ['All', ...Array.from(categories)]
  }, [])

  // Filtered lists
  const filteredWriteups = useMemo(() => {
    return writeups.filter((item) => {
      const matchesCategory =
        writeupCategory === 'All' || item.category === writeupCategory
      const matchesSearch =
        item.title.toLowerCase().includes(writeupSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(writeupSearch.toLowerCase()) ||
        (item.tags &&
          item.tags.some((t) =>
            t.toLowerCase().includes(writeupSearch.toLowerCase()),
          ))
      return matchesCategory && matchesSearch
    })
  }, [writeupCategory, writeupSearch])

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchesCategory =
        projectCategory === 'All' || item.category === projectCategory
      const matchesSearch =
        item.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
        (item.tags &&
          item.tags.some((t) =>
            t.toLowerCase().includes(projectSearch.toLowerCase()),
          ))
      return matchesCategory && matchesSearch
    })
  }, [projectCategory, projectSearch])

  // Paginated Slices
  const paginatedWriteups = useMemo(() => {
    const start = (pagination.writeups - 1) * ITEMS_PER_PAGE
    return filteredWriteups.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredWriteups, pagination.writeups])

  const paginatedProjects = useMemo(() => {
    const start = (pagination.projects - 1) * ITEMS_PER_PAGE
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProjects, pagination.projects])

  const writeupPages = Math.ceil(filteredWriteups.length / ITEMS_PER_PAGE)
  const projectPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  }

  return (
    <div
      className={`relative min-h-screen selection:bg-emerald-500/20 selection:text-emerald-300 transition-colors duration-300 ${
        isDark ? 'bg-[#08090a] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Background Ambient Glow & Grid Mesh */}
      <BackgroundGlow isDark={isDark} />

      {/* Floating Glassmorphism Navigation */}
      <Navbar
        page={page}
        setPage={handlePageChange}
        theme={theme}
        setTheme={setTheme}
        navItems={navItems}
        profileData={profileData}
      />

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-16 sm:space-y-24"
            >
              {/* Profile Executive Hero */}
              <HeroSection
                profileData={profileData}
                setPage={handlePageChange}
                isDark={isDark}
              />

              {/* Featured CTF Writeups Section */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <SectionHeader
                    eyebrow="Security Research"
                    title="Featured CySec Writeups"
                    description="Deep-dives into binary exploitation, format string vulnerabilities, and low-level memory corruption."
                    isDark={isDark}
                  />

                  <button
                    type="button"
                    onClick={() => handlePageChange('writeups')}
                    className={`inline-flex items-center gap-2 font-mono text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto ${
                      isDark
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-emerald-700 hover:text-emerald-800'
                    }`}
                  >
                    <span>View All Writeups</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {writeups.slice(0, 3).map((item, index) => (
                    <WriteupCard
                      key={item.id || item.title}
                      item={item}
                      index={index}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </section>

              {/* Featured Projects Section */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <SectionHeader
                    eyebrow="Engineering"
                    title="Highlighted Projects"
                    description="Web applications, architectural prototypes, and security tooling."
                    isDark={isDark}
                  />

                  <button
                    type="button"
                    onClick={() => handlePageChange('projects')}
                    className={`inline-flex items-center gap-2 font-mono text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto ${
                      isDark
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-emerald-700 hover:text-emerald-800'
                    }`}
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.slice(0, 3).map((item, index) => (
                    <ProjectCard
                      key={item.id || item.title}
                      item={item}
                      index={index}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </section>

              {/* Call to Collaboration Terminal Banner */}
              <section
                className={`relative overflow-hidden rounded-3xl border p-8 sm:p-12 backdrop-blur-xl ${
                  isDark
                    ? 'border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-[#0a0f0d] to-[#08090a] shadow-[0_0_50px_rgba(16,185,129,0.08)]'
                    : 'border-emerald-600/20 bg-gradient-to-br from-emerald-50/60 via-white to-slate-50 shadow-lg'
                }`}
              >
                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>OPEN FOR COLLABORATION</span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Interested in building secure backends or tackling security challenges together?
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    Feel free to reach out for backend development roles, security auditing collaborations, or CTF teamups.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {profileData.socials?.email && (
                      <a
                        href={`mailto:${profileData.socials.email}`}
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          isDark
                            ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                      >
                        <span>Send Message</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}

                    {profileData.socials?.github && (
                      <a
                        href={profileData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-mono text-xs sm:text-sm font-medium transition-colors ${
                          isDark
                            ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>Explore GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Terminal watermark */}
                <Terminal className="pointer-events-none absolute right-4 -bottom-10 h-64 w-64 text-emerald-500/5 rotate-12" />
              </section>
            </motion.div>
          )}

          {page === 'writeups' && (
            <motion.div
              key="writeups"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <SectionHeader
                eyebrow="Security Archives"
                title="CTF & Binary Exploitation Writeups"
                description="Technical breakdowns of vulnerabilities, exploit development payloads, and ELF x86_64 reverse engineering proofs."
                isDark={isDark}
              />

              {/* Filters & Search Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {writeupCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setWriteupCategory(cat)
                        setPagination((prev) => ({ ...prev, writeups: 1 }))
                      }}
                      className={`rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer ${
                        writeupCategory === cat
                          ? isDark
                            ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                            : 'border-emerald-600 bg-emerald-100 text-emerald-800 font-semibold'
                          : isDark
                          ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
                          : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[240px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={writeupSearch}
                    onChange={(e) => {
                      setWriteupSearch(e.target.value)
                      setPagination((prev) => ({ ...prev, writeups: 1 }))
                    }}
                    placeholder="Search writeups, tags..."
                    className={`w-full rounded-xl border pl-9 pr-4 py-2 font-mono text-xs transition-all duration-200 focus:outline-none ${
                      isDark
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:bg-white/[0.07]'
                        : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-emerald-600'
                    }`}
                  />
                </div>
              </div>

              {/* Writeup Cards Grid */}
              {paginatedWriteups.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedWriteups.map((item, index) => (
                    <WriteupCard
                      key={item.id || item.title}
                      item={item}
                      index={index}
                      isDark={isDark}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className={`rounded-2xl border border-dashed p-12 text-center backdrop-blur-md ${
                    isDark
                      ? 'border-white/10 bg-white/[0.02] text-slate-400'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <Inbox className="mx-auto h-8 w-8 text-slate-500 mb-3" />
                  <p className="font-mono text-sm font-semibold">No Writeups Found</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try adjusting your search query or selected category filter.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <Pagination
                currentPage={pagination.writeups}
                totalPages={writeupPages}
                onPageChange={(nextPage) =>
                  setPagination((prev) => ({ ...prev, writeups: nextPage }))
                }
                isDark={isDark}
              />
            </motion.div>
          )}

          {page === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <SectionHeader
                eyebrow="Engineering Showcase"
                title="Featured Software & Tools"
                description="Engineered web systems, responsive frontend interfaces, and developer utility projects."
                isDark={isDark}
              />

              {/* Filters & Search Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setProjectCategory(cat)
                        setPagination((prev) => ({ ...prev, projects: 1 }))
                      }}
                      className={`rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer ${
                        projectCategory === cat
                          ? isDark
                            ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                            : 'border-emerald-600 bg-emerald-100 text-emerald-800 font-semibold'
                          : isDark
                          ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
                          : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[240px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => {
                      setProjectSearch(e.target.value)
                      setPagination((prev) => ({ ...prev, projects: 1 }))
                    }}
                    placeholder="Search projects, tags..."
                    className={`w-full rounded-xl border pl-9 pr-4 py-2 font-mono text-xs transition-all duration-200 focus:outline-none ${
                      isDark
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:bg-white/[0.07]'
                        : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-emerald-600'
                    }`}
                  />
                </div>
              </div>

              {/* Projects Grid */}
              {paginatedProjects.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedProjects.map((item, index) => (
                    <ProjectCard
                      key={item.id || item.title}
                      item={item}
                      index={index}
                      isDark={isDark}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className={`rounded-2xl border border-dashed p-12 text-center backdrop-blur-md ${
                    isDark
                      ? 'border-white/10 bg-white/[0.02] text-slate-400'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <Inbox className="mx-auto h-8 w-8 text-slate-500 mb-3" />
                  <p className="font-mono text-sm font-semibold">No Projects Found</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try adjusting your search query or selected category filter.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <Pagination
                currentPage={pagination.projects}
                totalPages={projectPages}
                onPageChange={(nextPage) =>
                  setPagination((prev) => ({ ...prev, projects: nextPage }))
                }
                isDark={isDark}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Luxury Terminal-style Footer */}
      <Footer
        profileData={profileData}
        navItems={navItems}
        setPage={handlePageChange}
        isDark={isDark}
      />
    </div>
  )
}
