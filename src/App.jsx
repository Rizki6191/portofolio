import { useEffect, useState } from 'react'
import { projects, writeups } from './data/siteData'

const profileImageUrl = 'https://res.cloudinary.com/ddknll80u/image/upload/v1785846664/image1_1_qkp0gf.jpg'

const ITEMS_PER_PAGE = 6

function App() {
  const [page, setPage] = useState('home')
  const [pagination, setPagination] = useState({
    writeups: 1,
    projects: 1,
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    document.documentElement.classList.toggle('theme-dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const isDark = theme === 'dark'

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'writeups', label: 'Writeups' },
    { id: 'projects', label: 'Project' },
  ]

  const paginatedWriteups = writeups.slice(
    (pagination.writeups - 1) * ITEMS_PER_PAGE,
    pagination.writeups * ITEMS_PER_PAGE,
  )

  const paginatedProjects = projects.slice(
    (pagination.projects - 1) * ITEMS_PER_PAGE,
    pagination.projects * ITEMS_PER_PAGE,
  )

  const writeupPages = Math.ceil(writeups.length / ITEMS_PER_PAGE)
  const projectPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const hasWriteups = writeups.length > 0
  const hasProjects = projects.length > 0

  const shellClass = isDark
    ? 'min-h-screen bg-[#0f110f] text-[#d9ddd6]'
    : 'min-h-screen bg-[#f3f7ee] text-[#18231c]'
  const headerClass = isDark
    ? 'sticky top-0 z-20 border-b border-emerald-500/10 bg-black/25 backdrop-blur-xl'
    : 'sticky top-0 z-20 border-b border-emerald-500/20 bg-white/70 backdrop-blur-xl'
  const sectionClass = isDark
    ? 'rounded-2xl border border-emerald-500/10 bg-[#121512]/80 p-6'
    : 'rounded-2xl border border-emerald-500/20 bg-white/80 p-6'
  const cardClass = isDark
    ? 'rounded-2xl border border-emerald-500/10 bg-black/20 p-4'
    : 'rounded-2xl border border-emerald-500/20 bg-[#f4f7ee] p-4'
  const mutedTextClass = isDark ? 'text-[#b7c0b1]' : 'text-[#516357]'
  const secondaryTextClass = isDark ? 'text-[#d7ddd2]' : 'text-[#2b3b2f]'
  const headingTextClass = isDark ? 'text-[#f3f5ef]' : 'text-[#0f1712]'
  const accentTextClass = isDark ? 'text-emerald-300' : 'text-emerald-700'
  const accentHoverClass = isDark ? 'hover:text-emerald-200' : 'hover:text-emerald-600'
  const navInactiveClass = isDark ? 'text-[#b7c0b1] hover:text-emerald-300' : 'text-[#4d5b4f] hover:text-emerald-700'
  const activeNavClass = isDark
    ? 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
    : 'border border-emerald-600/20 bg-emerald-100 text-emerald-700'
  const iconButtonClass = isDark
    ? 'text-emerald-300 hover:bg-white/5'
    : 'text-emerald-700 hover:bg-emerald-100'
  const menuClass = isDark
    ? 'rounded-xl border border-emerald-500/10 bg-[#121512] p-2 shadow-xl'
    : 'rounded-xl border border-emerald-500/20 bg-white/90 p-2 shadow-xl'
  const footerBorderClass = isDark ? 'border-t border-white/10' : 'border-t border-emerald-500/10'
  const iconSurfaceClass = isDark ? 'bg-black/30' : 'bg-white/70'

  const goToPage = (section, nextPage) => {
    setPagination((current) => ({
      ...current,
      [section]: nextPage,
    }))
  }

  return (
    <div className={shellClass}>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${accentTextClass}`}>Portofolio</p>
            </div>
          </div>

          <nav className="relative flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPage(item.id)}
                  className={`px-4 py-2 text-sm transition ${page === item.id ? activeNavClass : navInactiveClass}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className={`flex items-center justify-center rounded-lg p-2 transition ${iconButtonClass}`}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M8 1.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2.5A.75.75 0 0 1 8 1.75ZM8 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM3.5 8a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 3.5 8ZM11.75 7.25h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5ZM4.03 4.03a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 1 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06ZM10.21 10.21a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 0 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06ZM4.03 11.97a.75.75 0 0 1 0-1.06l.7-.7a.75.75 0 0 1 1.06 1.06l-.7.7a.75.75 0 0 1-1.06 0ZM10.21 5.79a.75.75 0 0 1 0-1.06l.7-.7a.75.75 0 1 1 1.06 1.06l-.7.7a.75.75 0 0 1-1.06 0ZM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M12.25 10.8A5.75 5.75 0 0 1 5.2 3.75a5.75 5.75 0 1 0 7.05 7.05Z" />
                </svg>
              )}
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label="Open menu"
                className={`flex items-center justify-center rounded-lg p-2 transition ${iconButtonClass}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {menuOpen && (
                <div className={`absolute right-0 top-12 z-30 w-40 ${menuClass}`}>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setPage(item.id)
                        setMenuOpen(false)
                      }}
                      className={`mt-1 block w-full rounded-lg px-4 py-3 text-left text-sm transition ${page === item.id ? activeNavClass : navInactiveClass}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        {page === 'home' && (
          <section>
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className={sectionClass}>
                <p className={`text-xs uppercase tracking-[0.3em] ${accentTextClass}`}>Profile</p>
                <h2 className={`mt-3 text-2xl font-bold ${headingTextClass}`}>Rizki Syahrul Ramadhan</h2>
                <p className={`mt-2 text-sm leading-6 ${mutedTextClass}`}>
                  Saya adalah seorang yang memiliki minat dalam bidang pengembangan website, khususnya backend
                  development, serta cyber security. Saya tertarik dalam membangun sistem backend yang terstruktur dan
                  efektif serta terus mengembangkan kemampuan dalam memahami database, API, arsitektur sistem, dan
                  keamanan aplikasi.
                </p>

                <div className={`mt-5 space-y-3 text-sm ${secondaryTextClass}`}>
                  <div className={cardClass}>
                    <p className={`text-xs uppercase tracking-[0.25em] ${accentTextClass}`}>Skills</p>
                    <p className="mt-2">Scripting, code debugging, Data Flow Diagram, penetration testing.</p>
                    <p className={`text-xs uppercase tracking-[0.25em] ${accentTextClass}`}>Skills</p>
                    <p className="mt-2">Scripting, code debugging, Data Flow Diagram, penetration testing.</p>
                  </div>
                  <div className={cardClass}>
                    <p className={`text-xs uppercase tracking-[0.25em] ${accentTextClass}`}>Stacks</p>
                    <p className="mt-2">React Vite, Tailwind CSS, fastAPI, and research tooling.</p>
                  </div>
                </div>
              </div>

              <div className="order-first lg:order-none">
                <div className="mx-auto flex max-w-sm justify-center lg:max-w-none">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-emerald-400/5 blur-2xl lg:rounded-[2.5rem]" />
                    <img
                      src={profileImageUrl}
                      alt="Rizki Syahrul Ramadhan"
                      className="relative h-64 w-64 max-w-[16rem] rounded-[1.75rem] border-2 border-emerald-500/30 object-cover object-center shadow-lg shadow-emerald-500/20 sm:h-72 sm:w-72 sm:max-w-[18rem] lg:h-[20rem] lg:w-[16rem] lg:rounded-[2rem] lg:border-2"
                    />
                    <div className="absolute -inset-1 rounded-[1.75rem] border border-emerald-500/20 lg:rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === 'writeups' && (
          <section className={sectionClass}>
            <p className={`text-xs uppercase tracking-[0.3em] ${accentTextClass}`}>writeups</p>

            {hasWriteups ? (
              <div className="mt-6">
                <div className="mt-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {paginatedWriteups.map((item, index) => (
                      <article key={`${item.title}-${index}`} className={`flex flex-col ${cardClass}`}>
                        {item.image && (
                          <img src={item.image} alt={item.title} className="mb-3 h-28 w-full rounded-xl object-cover" />
                        )}
                        <div className="flex w-full items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className={`text-xs font-bold uppercase tracking-[0.25em] ${accentTextClass}`}>{item.title}</p>
                            <p className={`mt-2 text-sm ${secondaryTextClass}`}>{item.description}</p>
                          </div>

                          <div className="flex items-center justify-end">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${item.title}`}
                              className={`flex items-center justify-center rounded-lg p-2 transition duration-200 hover:-translate-y-1 ${iconSurfaceClass} ${accentTextClass} ${accentHoverClass}`}
                            >
                              <svg xmlns="http://www.w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                          <div className="flex items-center justify-end">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${item.title}`}
                              className={`flex items-center justify-center rounded-lg p-2 transition duration-200 hover:-translate-y-1 ${iconSurfaceClass} ${accentTextClass} ${accentHoverClass}`}
                            >
                              <svg xmlns="http://www.w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className={`mt-6 flex items-center justify-center gap-3 text-sm ${mutedTextClass}`}>
                    <button
                      type="button"
                      onClick={() => goToPage('writeups', pagination.writeups - 1)}
                      disabled={pagination.writeups === 1}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >

                  <div className={`mt-6 flex items-center justify-center gap-3 text-sm ${mutedTextClass}`}>
                    <button
                      type="button"
                      onClick={() => goToPage('writeups', pagination.writeups - 1)}
                      disabled={pagination.writeups === 1}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >


                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
                      </svg>

                      <span>Previous</span>
                    </button>
                    <div className="flex items-center gap-3">
                      {Array.from({ length: writeupPages }, (_, index) => (
                        <button
                          key={`writeup-${index + 1}`}
                          type="button"
                          onClick={() => goToPage('writeups', index + 1)}
                          className={`transition ${pagination.writeups === index + 1 ? accentTextClass : `${accentHoverClass}`}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => goToPage('writeups', pagination.writeups + 1)}
                      disabled={pagination.writeups === writeupPages}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                      <span>Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                      <span>Previous</span>
                    </button>
                    <div className="flex items-center gap-3">
                      {Array.from({ length: writeupPages }, (_, index) => (
                        <button
                          key={`writeup-${index + 1}`}
                          type="button"
                          onClick={() => goToPage('writeups', index + 1)}
                          className={`transition ${pagination.writeups === index + 1 ? accentTextClass : `${accentHoverClass}`}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => goToPage('writeups', pagination.writeups + 1)}
                      disabled={pagination.writeups === writeupPages}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                      <span>Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`mt-6 rounded-2xl border border-dashed border-emerald-500/20 ${iconSurfaceClass} px-6 py-10 text-center text-sm ${mutedTextClass}`}>
                404
              </div>
            )}
          </section>
        )}

        {page === 'projects' && (
          <section className={sectionClass}>
            <p className={`text-xs uppercase tracking-[0.3em] ${accentTextClass}`}>
              projects
            </p>

            {hasProjects ? (
              <div className="mt-6">
                <div className="mt-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {paginatedProjects.map((item, index) => (
                      <article
                        key={`${item.title}-${index}`}
                        className={`flex flex-col ${cardClass}`}
                      >
                        {item.image && (
                          <img src={item.image} alt={item.title} className="mb-3 h-28 w-full rounded-xl object-cover" />
                        )}
                        <div className="flex w-full items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className={`text-xs uppercase tracking-[0.25em] ${accentTextClass}`}>
                              {item.title}
                            </p>
                <div className="mt-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {paginatedProjects.map((item, index) => (
                      <article
                        key={`${item.title}-${index}`}
                        className={`flex flex-col ${cardClass}`}
                      >
                        {item.image && (
                          <img src={item.image} alt={item.title} className="mb-3 h-28 w-full rounded-xl object-cover" />
                        )}
                        <div className="flex w-full items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className={`text-xs uppercase tracking-[0.25em] ${accentTextClass}`}>
                              {item.title}
                            </p>

                            <p className={`mt-2 text-sm ${secondaryTextClass}`}>
                              {item.description}
                            </p>
                          </div>
                            <p className={`mt-2 text-sm ${secondaryTextClass}`}>
                              {item.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-end">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${item.title}`}
                              className={`flex items-center justify-center rounded-lg p-2 transition duration-200 hover:-translate-y-1 ${iconSurfaceClass} ${accentTextClass} ${accentHoverClass}`}
                            >
                              <svg xmlns="http://www.w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                          <div className="flex items-center justify-end">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${item.title}`}
                              className={`flex items-center justify-center rounded-lg p-2 transition duration-200 hover:-translate-y-1 ${iconSurfaceClass} ${accentTextClass} ${accentHoverClass}`}
                            >
                              <svg xmlns="http://www.w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className={`mt-6 flex items-center justify-center gap-3 text-sm ${mutedTextClass}`}>
                    <button
                      type="button"
                      onClick={() => goToPage('projects', pagination.projects - 1)}
                      disabled={pagination.projects === 1}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                  <div className={`mt-6 flex items-center justify-center gap-3 text-sm ${mutedTextClass}`}>
                    <button
                      type="button"
                      onClick={() => goToPage('projects', pagination.projects - 1)}
                      disabled={pagination.projects === 1}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>Previous</span>
                    </button>
                      <span>Previous</span>
                    </button>


                    <div className="flex items-center gap-3">
                      {Array.from({ length: projectPages }, (_, index) => (
                        <button
                          key={`project-${index + 1}`}
                          type="button"
                          onClick={() => goToPage('projects', index + 1)}
                          className={`transition ${pagination.projects === index + 1 ? accentTextClass : `${accentHoverClass}`}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {Array.from({ length: projectPages }, (_, index) => (
                        <button
                          key={`project-${index + 1}`}
                          type="button"
                          onClick={() => goToPage('projects', index + 1)}
                          className={`transition ${pagination.projects === index + 1 ? accentTextClass : `${accentHoverClass}`}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>


                    <button
                      type="button"
                      onClick={() => goToPage('projects', pagination.projects + 1)}
                      disabled={pagination.projects === projectPages}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                      <span>Next</span>
                    <button
                      type="button"
                      onClick={() => goToPage('projects', pagination.projects + 1)}
                      disabled={pagination.projects === projectPages}
                      className={`flex items-center gap-2 transition ${accentHoverClass} disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                      <span>Next</span>


                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`mt-6 rounded-2xl border border-dashed border-emerald-500/20 ${iconSurfaceClass} px-6 py-10 text-center text-sm ${mutedTextClass}`}>
                404
              </div>
            )}
          </section>
        )}
      </main>
      <footer>
        <div className={`mx-auto max-w-5xl ${footerBorderClass}`}>
          <div className="flex items-center justify-center gap-6 px-6 py-5 md:justify-end lg:px-8">
            <a
              href="mailto:sponge27riz@gmail.com"
              className={`inline-flex items-center gap-2 text-lg transition hover:underline md:text-xl ${accentTextClass}`}
              className={`inline-flex items-center gap-2 text-lg transition hover:underline md:text-xl ${accentTextClass}`}
            >

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>



              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>


              Contact
            </a>

            <a
              href="https://github.com/Rizki6191"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-lg transition hover:underline md:text-xl ${accentTextClass}`}
              className={`inline-flex items-center gap-2 text-lg transition hover:underline md:text-xl ${accentTextClass}`}
            >
              {/* Menggunakan ikon SVG GitHub resmi */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              {/* Menggunakan ikon SVG GitHub resmi */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>


          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
