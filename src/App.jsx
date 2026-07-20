import { useState } from 'react'
import { projects, writeups } from './data/siteData'

const ITEMS_PER_PAGE = 6

const stats = [
  { value: '120+', label: 'writeups reviewed' },
  { value: '30+', label: 'labs completed' },
  { value: '24/7', label: 'curiosity mode' },
]

function App() {
  const [page, setPage] = useState('home')
  const [pagination, setPagination] = useState({
    writeups: 1,
    projects: 1,
  })

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

  const [menuOpen, setMenuOpen] = useState(false)

  const goToPage = (section, nextPage) => {
    setPagination((current) => ({
      ...current,
      [section]: nextPage,
    }))
  }

  return (
    <div className="min-h-screen bg-[#0f110f] text-[#d9ddd6]">

      <header className="sticky top-0 z-20 border-b border-emerald-500/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Portofolio</p>
            </div>
          </div>

          <nav className="relative flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPage(item.id)}
                  className={`px-4 py-2 text-sm transition ${page === item.id
                      ? 'border -bg-conic-0 text-emerald-300'
                      : 'text-[#b7c0b1] hover:text-emerald-300'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label="Open menu"
                className="flex items-center justify-center rounded-lg p-2 text-emerald-300 transition hover:bg-white/5"
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

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 top-12 z-30 w-40 rounded-xl border border-emerald-500/10 bg-[#121512] p-2 shadow-xl">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setPage(item.id)
                        setMenuOpen(false)
                      }}
                      className={`block w-full rounded-lg px-4 py-3 text-left text-sm transition mt-1 ${page === item.id
                          ? 'border -bg-conic-0 text-emerald-300'
                          : 'text-[#b7c0b1] hover:bg-white/5 hover:text-emerald-300'
                        }`}
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
            {/* <div className="rounded-[28px] border border-emerald-500/10 bg-[#121512]/90 p-7 shadow-2xl shadow-black/30">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Home</p>
              <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[#f0f3ec] sm:text-5xl">
                Building calm, precise digital experiences.
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#bfc8bc]">
                I create simple, technical, and expressive web experiences. The goal is to stay clear,
                readable, and modern — without making the interface noisy.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPage('projects')}
                  className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#06110a] transition hover:bg-emerald-300"
                >
                  Open Project
                </button>
                <button
                  type="button"
                  onClick={() => setPage('writeups')}
                  className="rounded-full border border-emerald-500/30 bg-[#131613] px-5 py-3 text-sm font-semibold text-[#d9ddd6] transition hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  View Writeups
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-emerald-500/10 bg-black/20 p-4">
                    <div className="text-2xl font-bold text-[#f0f3ec]">{stat.value}</div>
                    <div className="mt-1 text-xs text-[#9da79d]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="rounded-2xl border border-emerald-500/10 bg-[#121512]/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Profile</p>
              <h2 className="mt-3 text-2xl font-bold text-[#f3f5ef]">Rizki Syahrul Ramadhan</h2>
              <p className="mt-2 text-sm leading-6 text-[#b7c0b1]">
                Passionate IT enthusiast dengan spesialisasi di bidang pengembangan website dan cyber security. Saya memiliki kebiasaan merencanakan segala sesuatu secara matang dan terstruktur sebelum mengeksekusi sebuah proyek — mulai dari analisis kebutuhan, perancangan arsitektur, pemilihan teknologi, hingga implementasi keamanan.
              </p>

              <div className="mt-5 space-y-3 text-sm text-[#d7ddd2]">
                <div className="rounded-2xl border border-emerald-500/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Skill</p>
                  <p className="mt-2">Scripting, debugging code, Data Flow Diagram.</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Stack</p>
                  <p className="mt-2">React Vite, React Native Expo, Tailwind CSS, Laravel, and research tooling.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === 'writeups' && (
          <section className="rounded-2xl border border-emerald-500/10 bg-[#121512]/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">writeups</p>


            {hasWriteups ? (
              <div className="mt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {paginatedWriteups.map((item, index) => (
                    <article key={`${item.title}-${index}`} className="flex rounded-2xl border border-emerald-500/10 bg-black/20 p-4">
                      <div className="flex w-full items-center justify-between gap-4">

                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">{item.title}</p>
                          <p className="mt-2 text-sm text-[#d7ddd2]">{item.description}</p>
                        </div>

                        <div className="flex items-center justify-end">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${item.title}`}
                            className="flex items-center justify-center rounded-lg bg-black/30 p-2 text-emerald-300 transition duration-200 hover:-translate-y-1 hover:text-emerald-200"
                          >
                            <svg xmlns="http://w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                              <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>

                      </div>
                    </article>
                  ))}
                </div>


                <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#b7c0b1]">
                  <button
                    type="button"
                    onClick={() => goToPage('writeups', pagination.writeups - 1)}
                    disabled={pagination.writeups === 1}
                    className="flex items-center gap-2 transition hover:text-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
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
                        className={`transition ${pagination.writeups === index + 1 ? 'text-emerald-300' : 'hover:text-emerald-300'}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => goToPage('writeups', pagination.writeups + 1)}
                    disabled={pagination.writeups === writeupPages}
                    className="flex items-center gap-2 transition hover:text-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                    </svg>

                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-emerald-500/20 bg-black/20 px-6 py-10 text-center text-sm text-[#b7c0b1]">
                404
              </div>
            )}
          </section>
        )}

        {page === 'projects' && (
          <section className="rounded-2xl border border-emerald-500/10 bg-[#121512]/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              projects
            </p>

            {hasProjects ? (
              <div className="mt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {paginatedProjects.map((item, index) => (
                    <article
                      key={`${item.title}-${index}`}
                      className="flex rounded-2xl border border-emerald-500/10 bg-black/20 p-4"
                    >
                      <div className="flex w-full items-center justify-between gap-4">

                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                            {item.title}
                          </p>

                          <p className="mt-2 text-sm text-[#d7ddd2]">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-end">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${item.title}`}
                            className="flex items-center justify-center rounded-lg bg-black/30 p-2 text-emerald-300 transition duration-200 hover:-translate-y-1 hover:text-emerald-200"
                          >
                            <svg xmlns="http://w3.org" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                              <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>

                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#b7c0b1]">
                  <button
                    type="button"
                    onClick={() => goToPage('projects', pagination.projects - 1)}
                    disabled={pagination.projects === 1}
                    className="flex items-center gap-2 transition hover:text-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
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

                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {Array.from({ length: projectPages }, (_, index) => (
                      <button
                        key={`project-${index + 1}`}
                        type="button"
                        onClick={() => goToPage('projects', index + 1)}
                        className={`transition ${pagination.projects === index + 1
                          ? 'text-emerald-300'
                          : 'hover:text-emerald-300'
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => goToPage('projects', pagination.projects + 1)}
                    disabled={pagination.projects === projectPages}
                    className="flex items-center gap-2 transition hover:text-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
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
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-emerald-500/20 bg-black/20 px-6 py-10 text-center text-sm text-[#b7c0b1]">
                404
              </div>
            )}
          </section>
        )}
      </main>
      <footer>
        <div className="mx-auto max-w-5xl border-t border-white/10">
          <div className="flex items-center justify-center gap-6 px-6 py-5 md:justify-end lg:px-8">
            <a
              href="mailto:sponge27riz@gmail.com"
              className="text-lg text-emerald-300 transition hover:underline md:text-xl"
            >
              Contact
            </a>

            <a
              href="https://github.com/Rizki6191"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-emerald-300 transition hover:underline md:text-xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
