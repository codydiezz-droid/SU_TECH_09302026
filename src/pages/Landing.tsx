import { useEffect, useState } from 'react'
import { ClipboardCheck, Menu, Scale, ShieldCheck, Trophy, UserCheck, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import './Landing.css'

// Where the "Join the pilot" button goes, e.g. 'mailto:team@example.com' or a
// Google Form link. While this is empty, the button is hidden.
const PILOT_URL = ''

const navLinks = [
  { href: '#problem', label: 'The problem' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#trust', label: 'Trust' },
  { href: '#team', label: 'Team' },
]

const steps = [
  {
    title: 'Share',
    body: 'Jorge uploads one document with his products, prices, stock, and hours.',
  },
  {
    title: 'Verify',
    body: 'Our AI workflow organizes it and flags gaps. Jorge approves every fact.',
  },
  {
    title: 'Connect',
    body: 'We set up his own MCP server, a direct line AI assistants can pull live data from, plus an optional AI-ready website.',
  },
  {
    title: 'Monitor',
    body: 'We check what AI assistants say about his store and help fix mistakes.',
  },
]

const promises = [
  'Jorge approves every fact before it is published.',
  'A person reviews anything uncertain.',
  'We watch AI answers and flag mismatches.',
]

const nonPromises = [
  'Guaranteed placement in any AI tool.',
  'Control over how other companies’ AI answers.',
]

const values = [
  { title: 'Governance', body: 'Clear rules for what gets published, and who approves it.', icon: ClipboardCheck },
  { title: 'Equality', body: 'A small shop shouldn’t need a tech team to be found.', icon: Scale },
  { title: 'Accountability', body: 'People make the final call, not AI.', icon: UserCheck },
  { title: 'Trust', body: 'Accuracy comes before visibility.', icon: ShieldCheck },
]

const planFeatures = [
  'Setup from the information you already have',
  'Your own MCP server, plus an optional AI-ready website',
  'Simple updates, no technical skills needed',
  'Monitoring and human review included',
]

const team = [
  { name: 'Asin Fathima Allavudeen', photo: 'asin-allavudeen', linkedin: 'https://www.linkedin.com/in/asin-fathima-allavudeen-a49631303/' },
  { name: 'Emma Sanchez', photo: 'emma-sanchez', linkedin: 'https://www.linkedin.com/in/emma-sanchez-618a54404/' },
  { name: 'Alyanna Martinez', photo: 'alyanna-martinez', linkedin: 'https://www.linkedin.com/in/alyanna-martinez088/' },
  { name: 'Elias Sarwana', photo: 'elias-sarwana', linkedin: 'https://www.linkedin.com/in/esarwana/' },
  { name: 'Juan Carlos Martinez', photo: 'juan-carlos', linkedin: 'https://www.linkedin.com/in/jcarlos-martinez/' },
  { name: 'Cody Diez', photo: 'cody-diez-jennings', linkedin: 'https://www.linkedin.com/in/codydiez/' },
  { name: 'Jade Cindy Foka', photo: 'jade-foka', linkedin: 'https://www.linkedin.com/in/foka/' },
]

function Logo() {
  return <img src="/brand/logo-wordmark.webp" alt="OneBridge" width="480" height="208" className="ob-logo" />
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="ob-header">
      <div className="ob-container ob-header-inner">
        <Link to="/" aria-label="OneBridge home"><Logo /></Link>
        <button
          type="button"
          className="ob-menu-toggle"
          aria-expanded={open}
          aria-controls="ob-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="ob-sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="ob-nav" className={`ob-nav${open ? ' is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Link className="ob-button ob-button-primary ob-button-small" to="/demo">See the demo</Link>
        </nav>
      </div>
    </header>
  )
}

export function Landing() {
  return (
    <div className="ob-landing">
      <a href="#main" className="ob-skip">Skip to content</a>
      <Header />

      <main id="main">
        <section className="ob-hero ob-container" aria-labelledby="hero-title">
          <div className="ob-hero-copy">
            <p className="ob-award">
              <Trophy size={16} aria-hidden="true" />
              <span>1st Place, Business Solution · HSI Battle of the Brains 2026</span>
            </p>
            <h1 id="hero-title">
              You know your business.
              <span>OneBridge helps AI understand it.</span>
            </h1>
            <p className="ob-lead">
              More customers ask AI assistants where to shop. We help small local businesses make sure the answer is right.
            </p>
            <div className="ob-actions">
              <Link className="ob-button ob-button-primary" to="/demo">See the live demo <span aria-hidden="true">→</span></Link>
              <a className="ob-button ob-button-outline" href="#how-it-works">How it works</a>
            </div>
          </div>
          <figure className="ob-hero-figure">
            <img
              src="/landing/onebridge-flow.svg"
              alt="A business's documents flow through OneBridge and owner review, then out to a website and an MCP connection for AI assistants."
            />
          </figure>
        </section>

        <section id="problem" className="ob-section ob-container" aria-labelledby="problem-title">
          <p className="ob-eyebrow">The problem</p>
          <h2 id="problem-title">Maria asks AI.<br />Jorge’s store isn’t in the answer.</h2>
          <div className="ob-story">
            <article className="ob-story-card ob-story-maria">
              <span className="ob-label">Maria, the customer</span>
              <p>She needs a brake rotor. She asks an AI assistant and gets a confident answer that’s wrong: an old price, a part that’s out of stock.</p>
            </article>
            <article className="ob-story-card ob-story-jorge">
              <span className="ob-label">Jorge, the owner</span>
              <p>He has the right part, at the right price, a few miles away. But it lives in a spreadsheet and an old website, so AI can’t see it.</p>
            </article>
          </div>
          <img
            className="ob-scene"
            src="/landing/jorge-and-maria.webp"
            alt="Illustration: Jorge at his auto parts store holding a tablet, connected to Maria, who is finding a brake rotor on her phone."
            width="1600"
            height="640"
            loading="lazy"
            decoding="async"
          />
          <p className="ob-bridge-line">OneBridge connects Jorge’s real, approved information to the places Maria is asking.</p>
        </section>

        <section id="how-it-works" className="ob-section ob-section-tint" aria-labelledby="how-title">
          <div className="ob-container">
            <p className="ob-eyebrow">How it works</p>
            <h2 id="how-title">Four steps. Jorge stays in charge.</h2>
            <ol className="ob-steps">
              {steps.map((step, i) => (
                <li className="ob-step" key={step.title}>
                  <div className="ob-step-top">
                    <img src={`/landing/step-${i + 1}.svg`} alt="" width="100" height="80" loading="lazy" />
                    <span className="ob-step-number" aria-hidden="true">{i + 1}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="trust" className="ob-section ob-trust" aria-labelledby="trust-title">
          <div className="ob-container">
            <p className="ob-eyebrow">Trust and risk</p>
            <h2 id="trust-title">Honest about what we can’t control.</h2>
            <p className="ob-lead">No one can promise how an AI assistant will answer. Here’s what we do instead.</p>
            <div className="ob-promise-grid">
              <div className="ob-promise">
                <h3>What we do</h3>
                <ul>{promises.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="ob-promise ob-promise-not">
                <h3>What we don’t promise</h3>
                <ul>{nonPromises.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
            <ul className="ob-values" aria-label="Core values">
              {values.map(({ title, body, icon: Icon }) => (
                <li key={title}>
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="ob-section ob-container" aria-labelledby="pricing-title">
          <p className="ob-eyebrow">Pricing</p>
          <h2 id="pricing-title">One simple plan.</h2>
          <article className="ob-plan">
            <div className="ob-plan-prices">
              <p><span className="ob-label">One-time setup</span><strong>$250</strong></p>
              <p><span className="ob-label">Monthly</span><strong>$149</strong><small>/ month</small></p>
            </div>
            <ul className="ob-checklist">
              {planFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </article>
        </section>

        <section id="team" className="ob-section ob-section-tint" aria-labelledby="team-title">
          <div className="ob-container">
            <p className="ob-eyebrow">The team</p>
            <h2 id="team-title">Built in 24 hours by seven Southwestern University students.</h2>
            <div className="ob-win">
              <span className="ob-win-icon"><Trophy size={26} aria-hidden="true" /></span>
              <div>
                <p className="ob-win-title">1st Place, Business Solution</p>
                <p>2026 HSI Battle of the Brains. We were also selected as finalists and presented OneBridge in the final round.</p>
              </div>
            </div>
            <ul className="ob-team">
              {team.map((m) => (
                <li key={m.name}>
                  <img src={`/team/${m.photo}.webp`} alt="" width="240" height="240" loading="lazy" decoding="async" />
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                    {m.name}
                    <span className="ob-sr-only"> on LinkedIn (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="ob-coaches">Coached by Dr. Debika Sihi, Dr. Abby Dings, and Adrian D. Ramirez.</p>
          </div>
        </section>

        <section id="contact" className="ob-section ob-container" aria-labelledby="contact-title">
          <div className="ob-final">
            <div>
              <h2 id="contact-title">Run a local business?</h2>
              <p>
                {PILOT_URL
                  ? 'We’re looking for a few local businesses to pilot OneBridge. Or walk through the demo as Jorge first.'
                  : 'Walk through the demo as Jorge, from the first upload to monitoring.'}
              </p>
            </div>
            <div className="ob-actions">
              {PILOT_URL && <a className="ob-button ob-button-primary" href={PILOT_URL}>Join the pilot</a>}
              <Link className={`ob-button ${PILOT_URL ? 'ob-button-ghost' : 'ob-button-primary'}`} to="/demo">
                See the live demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-container ob-footer-inner">
          <div>
            <Logo />
            <p>The Trusted Connection.</p>
          </div>
          <div>
            <p>Southwestern University · 1st Place, Business Solution, HSI Battle of the Brains 2026</p>
            <p>A working prototype with example data.</p>
          </div>
          <a href="https://github.com/jucax/SU_TECH_09302026" target="_blank" rel="noopener noreferrer">Source on GitHub ↗</a>
        </div>
      </footer>
    </div>
  )
}
