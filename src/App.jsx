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

          <nav className="flex items-center gap-2">
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

            <div className="justify-center rounded-2xl border border-emerald-500/10 bg-[#121512]/80 p-6">
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
          <section className="rounded-2xl border border-emerald-500/10 bg-[#121512]/90 p-7">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Writeups</p>
              <h2 className="mt-3 text-3xl font-bold text-[#f0f3ec]">Research notes</h2>
            </div>

            {hasWriteups ? (
              <>
                <div className="grid gap-4 md:grid-cols-3">
                  {paginatedWriteups.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-emerald-500/10 bg-black/20 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-[#f4f6f1]">{item.title}</h3>
                          <p className="mt-3 text-xs tracking-[0.24em] text-emerald-300">{item.description}</p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${item.title}`}
                          className="mt-1 text-2xl text-emerald-300 transition hover:text-emerald-200"
                        >
                          ↗
                        </a>
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
                    <span aria-hidden="true">←</span>
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
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-emerald-500/20 bg-black/20 px-6 py-10 text-center text-sm text-[#b7c0b1]">
                404
              </div>
            )}
          </section>
        )}

        {page === 'projects' && (
          <section className="rounded-2xl border border-emerald-500/10 bg-[#121512]/90 p-7">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Project</p>
              <h2 className="mt-3 text-3xl font-bold text-[#f0f3ec]">Selected works</h2>
            </div>

            {hasProjects ? (
              <>
                <div className="grid gap-4 md:grid-cols-3">
                  {paginatedProjects.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-emerald-500/10 bg-black/20 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-[#f4f6f1]">{item.title}</h3>
                          <p className="mt-3 text-xs tracking-[0.24em] text-emerald-300">{item.description}</p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${item.title}`}
                          className="mt-1 text-2xl text-emerald-300 transition hover:text-emerald-200"
                        >
                          ↗
                        </a>
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
                    <span aria-hidden="true">←</span>
                    <span>Previous</span>
                  </button>
                  <div className="flex items-center gap-3">
                    {Array.from({ length: projectPages }, (_, index) => (
                      <button
                        key={`project-${index + 1}`}
                        type="button"
                        onClick={() => goToPage('projects', index + 1)}
                        className={`transition ${pagination.projects === index + 1 ? 'text-emerald-300' : 'hover:text-emerald-300'}`}
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
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-emerald-500/20 bg-black/20 px-6 py-10 text-center text-sm text-[#b7c0b1]">
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
