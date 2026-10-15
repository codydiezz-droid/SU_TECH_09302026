import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { HeroBridge } from '@/components/landing/HeroBridge'
import { StoryScroll } from '@/components/landing/StoryScroll'

import '@fontsource-variable/schibsted-grotesk'
import '@fontsource-variable/public-sans'
import './Landing.css'

const JORGE_SLUG = 'jorges-auto-parts'

const steps = [
  { title: 'Share', body: 'Jorge uploads one document with his products, prices, stock, and hours.' },
  { title: 'Verify', body: 'Our AI workflow organizes it and flags gaps. Jorge approves every fact.' },
  {
    title: 'Connect',
    body: 'We set up his own MCP server, a live feed AI assistants can read, plus an optional AI-ready website.',
  },
  { title: 'Monitor', body: 'We check what AI assistants say about him and help fix mistakes.' },
]

const included = [
  'Your business record, cleaned up by OneBridge AI and approved by you',
  'Your own MCP server for AI assistants',
  'A website built or tuned from the same facts',
  'Updates by form or plain-language chat',
  'Monitoring, activity tracking, and human review of risky changes',
]

const commitments = [
  { title: 'You approve every fact.', body: 'Nothing is published until the owner signs off.' },
  { title: 'People check the hard calls.', body: 'Uncertain, conflicting, or sensitive changes go to human review first.' },
  { title: 'We report what AI actually says.', body: 'We monitor assistants, flag mismatches, and help correct them.' },
]

const values = [
  { name: 'Governance', body: 'Clear rules for what gets published and who decides.' },
  { name: 'Equality', body: 'A corner shop deserves accurate answers as much as a national chain.' },
  { name: 'Accountability', body: 'Every fact traces back to an owner’s approval.' },
  { name: 'Trust', body: 'We say what AI can and cannot do, and we show our uncertainty.' },
]

// Portraits were provided by the team.
const team = [
  { name: 'Asin Fathima Allavudeen', photo: 'asin-allavudeen', linkedin: 'https://www.linkedin.com/in/asin-fathima-allavudeen-a49631303/' },
  { name: 'Emma Sanchez', photo: 'emma-sanchez', linkedin: 'https://www.linkedin.com/in/emma-sanchez-618a54404/' },
  { name: 'Alyanna Martinez', photo: 'alyanna-martinez', linkedin: 'https://www.linkedin.com/in/alyanna-martinez088/' },
  { name: 'Elias Sarwana', photo: 'elias-sarwana', linkedin: 'https://www.linkedin.com/in/esarwana/' },
  { name: 'Juan Carlos', photo: 'juan-carlos', linkedin: 'https://www.linkedin.com/in/jcarlos-martinez/' },
  { name: 'Cody Diez Jennings', photo: 'cody-diez-jennings', linkedin: 'https://www.linkedin.com/in/codydiez/' },
  { name: 'Jade Cindy Foka', photo: 'jade-foka', linkedin: 'https://www.linkedin.com/in/foka/' },
]

/**
 * Page-level motion, all opt-out for reduced-motion users:
 * - elements with data-reveal fade up once when they enter the viewport
 * - --ob-scroll (0 to 1 across the hero) drives the hero parallax
 * - --ob-line (0 to 1) draws the "how it works" line as it scrolls into view
 * - the header turns solid once the hero is behind it
 */
function usePageMotion(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const reveals = el.querySelectorAll<HTMLElement>('[data-reveal]')
    if (reduce) {
      reveals.forEach((r) => r.classList.add('is-in'))
    } else {
      el.classList.add('ob-motion')
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    if (!reduce) reveals.forEach((r) => io.observe(r))

    const line = el.querySelector<HTMLElement>('.ob-steps')
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const vh = window.innerHeight
        el.style.setProperty('--ob-scroll', String(Math.min(1, window.scrollY / vh)))
        el.classList.toggle('ob-scrolled', window.scrollY > vh * 0.75)
        if (line) {
          const r = line.getBoundingClientRect()
          const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35)
          el.style.setProperty('--ob-line', reduce ? '1' : String(Math.min(1, Math.max(0, p))))
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [root])
}

function LinkedInIcon() {
  // Lucide no longer ships brand icons. Path from Simple Icons (CC0).
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Landing() {
  const root = useRef<HTMLDivElement>(null)
  usePageMotion(root)

  return (
    <div className="ob-landing" ref={root}>
      <a href="#main" className="ob-skip">Skip to content</a>

      <header className="ob-header">
        <div className="ob-wrap ob-header-inner">
          <Link to="/" className="ob-brand" aria-label="OneBridge home">
            <img src="/brand/mark.webp" alt="" width="40" height="10" />
            <span>OneBridge</span>
          </Link>
          <Link className="ob-btn ob-btn-small" to="/demo">See it work</Link>
        </div>
      </header>

      <main id="main">
        <section className="ob-hero" aria-labelledby="hero-title">
          <HeroBridge />
          <div className="ob-wrap ob-hero-content">
            <p className="ob-award-line">
              <span className="ob-award-rule" aria-hidden="true" />
              1st place, Business Solution · HSI Battle of the Brains 2026
            </p>
            <h1 id="hero-title">
              You know your business.
              <span>OneBridge helps AI understand it.</span>
            </h1>
            <p className="ob-hero-lead">
              When customers ask an AI assistant where to buy, local shops are easy to miss. OneBridge gives assistants
              the facts the owner has approved.
            </p>
            <div className="ob-actions">
              <Link className="ob-btn" to="/demo">See it work: Jorge’s Auto Parts</Link>
              <a className="ob-btn ob-btn-quiet" href="#pricing">Pricing</a>
            </div>
          </div>
          <a className="ob-scroll-cue" href="#story" aria-label="Read the story">
            <span aria-hidden="true" />
          </a>
        </section>

        <section id="story" className="ob-section ob-story-section" aria-labelledby="story-title">
          <div className="ob-wrap">
            <h2 id="story-title" className="ob-h2" data-reveal>
              Maria asks. The AI guesses.
            </h2>
            <StoryScroll />
          </div>
        </section>

        <section id="how-it-works" className="ob-section ob-how" aria-labelledby="how-title">
          <div className="ob-wrap">
            <div className="ob-section-head" data-reveal>
              <h2 id="how-title" className="ob-h2">How it works</h2>
              <p className="ob-sub">Four steps. The owner stays in charge of every one.</p>
            </div>
            <ol className="ob-steps">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={{ '--i': i } as React.CSSProperties}>
                  <span className="ob-step-dot" aria-hidden="true" />
                  <span className="ob-step-num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="ob-section ob-pricing" aria-labelledby="pricing-title">
          <div className="ob-wrap ob-pricing-grid">
            <div data-reveal>
              <h2 id="pricing-title" className="ob-h2">One plan. Two prices.</h2>
              <dl className="ob-prices">
                <div>
                  <dt>One-time setup</dt>
                  <dd>$250</dd>
                </div>
                <div>
                  <dt>Monthly service</dt>
                  <dd>$149<span>/month</span></dd>
                </div>
              </dl>
            </div>
            <div data-reveal>
              <h3 className="ob-label">Included</h3>
              <ul className="ob-included">
                {included.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="trust" className="ob-section ob-trust" aria-labelledby="trust-title">
          <div className="ob-wrap">
            <div className="ob-trust-head" data-reveal>
              <h2 id="trust-title" className="ob-h2">We won’t promise you a ranking.</h2>
              <p className="ob-sub">
                No one can guarantee what an AI assistant recommends. What we can control is whether the facts it reads
                are true.
              </p>
            </div>
            <ol className="ob-commitments">
              {commitments.map((c, i) => (
                <li key={c.title} data-reveal>
                  <span className="ob-commit-num" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ob-values" data-reveal>
              <h3 className="ob-label">What we stand for</h3>
              <dl>
                {values.map((v) => (
                  <div key={v.name}>
                    <dt>{v.name}</dt>
                    <dd>{v.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="ob-status" data-reveal>
              <strong>Prototype status.</strong> Jorge’s example runs end to end today. More file types and wider AI
              monitoring are in development.
            </p>
          </div>
        </section>

        <section id="team" className="ob-section ob-team-section" aria-labelledby="team-title">
          <div className="ob-wrap">
            <div className="ob-win" data-reveal>
              <p className="ob-win-big" aria-hidden="true">1st</p>
              <div>
                <h2 id="team-title" className="ob-h2">Built in 24 hours. Placed first.</h2>
                <p className="ob-sub">
                  Seven Southwestern University students built OneBridge for the 2026 HSI Battle of the Brains prompt,
                  “The New Front Door: Trustworthy AI Product Discovery.” The judges awarded it 1st place for business
                  solution.
                </p>
              </div>
            </div>
            <ul className="ob-team" data-reveal>
              {team.map((m) => (
                <li key={m.name}>
                  <img src={`/team/${m.photo}.webp`} alt={`Portrait of ${m.name}`} width="160" height="160" loading="lazy" />
                  <p className="ob-team-name">{m.name}</p>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="ob-team-link">
                    <LinkedInIcon />
                    <span className="ob-sr">LinkedIn profile of {m.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="ob-coaches" data-reveal>Coached by Dr. Debika Sihi, Dr. Abby Dings, and Adrian D. Ramirez.</p>
          </div>
        </section>

        <section id="pilot" className="ob-pilot" aria-labelledby="pilot-title">
          <div className="ob-wrap ob-pilot-inner" data-reveal>
            <h2 id="pilot-title">Own a local shop? Be one of our first pilots.</h2>
            <p>Walk through Jorge’s setup, then message any of us to talk about your business.</p>
            <div className="ob-actions">
              <Link className="ob-btn" to="/demo">See it work</Link>
              <a className="ob-btn ob-btn-quiet" href="#team">Contact the team</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-wrap ob-footer-inner">
          <p>OneBridge · Southwestern University · HSI Battle of the Brains 2026</p>
          <nav aria-label="Prototype">
            <a href={`/site/${JORGE_SLUG}`}>Jorge’s website</a>
            <a href={`/site/${JORGE_SLUG}/llms.txt`}>llms.txt</a>
            <a href={`/site/${JORGE_SLUG}/mcp`}>MCP endpoint</a>
            <a href="https://github.com/jucax/SU_TECH_09302026" target="_blank" rel="noopener noreferrer">
              Source<span className="ob-sr"> on GitHub (opens in a new tab)</span>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
