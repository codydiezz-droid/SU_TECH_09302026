import { BadgeCheck, CircleCheck, Eye, Scale, ShieldCheck, Trophy, UserCheck, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import './Landing.css'

const JORGE_SLUG = 'jorges-auto-parts'
const ASSET = '/landing/'

const steps = [
  { title: 'Share', body: 'Jorge uploads one document with his products, prices, stock, and hours.' },
  { title: 'Verify', body: 'Our AI workflow organizes it and flags gaps. Jorge approves every fact.' },
  {
    title: 'Connect',
    body: 'We set up his own MCP server, a live connection AI assistants can read from, plus an optional AI-ready website.',
  },
  { title: 'Monitor', body: 'We check what AI assistants say about him and help fix mistakes.' },
]

const promises = [
  'Nothing goes live until the owner approves it.',
  'A person reviews anything uncertain or sensitive before it is published.',
  'We watch what AI assistants say and flag anything that does not match.',
]

const values: { name: string; body: string; icon: LucideIcon }[] = [
  { name: 'Governance', body: 'Clear rules for what gets published, and who decides.', icon: ShieldCheck },
  { name: 'Equality', body: 'A corner shop deserves accurate answers as much as a national chain.', icon: Scale },
  { name: 'Accountability', body: 'Every fact traces back to an owner’s approval.', icon: UserCheck },
  { name: 'Trust', body: 'We earn it by being honest about what AI can and cannot do.', icon: BadgeCheck },
]

// Portraits were provided by the team (see public/team/).
const team = [
  { name: 'Asin Fathima Allavudeen', photo: 'asin-allavudeen', linkedin: 'https://www.linkedin.com/in/asin-fathima-allavudeen-a49631303/' },
  { name: 'Emma Sanchez', photo: 'emma-sanchez', linkedin: 'https://www.linkedin.com/in/emma-sanchez-618a54404/' },
  { name: 'Alyanna Martinez', photo: 'alyanna-martinez', linkedin: 'https://www.linkedin.com/in/alyanna-martinez088/' },
  { name: 'Elias Sarwana', photo: 'elias-sarwana', linkedin: 'https://www.linkedin.com/in/esarwana/' },
  { name: 'Juan Carlos', photo: 'juan-carlos', linkedin: 'https://www.linkedin.com/in/jcarlos-martinez/' },
  { name: 'Cody Diez Jennings', photo: 'cody-diez-jennings', linkedin: 'https://www.linkedin.com/in/codydiez/' },
  { name: 'Jade Cindy Foka', photo: 'jade-foka', linkedin: 'https://www.linkedin.com/in/foka/' },
]

const prototypeLinks = [
  { label: 'Jorge’s website', href: `/site/${JORGE_SLUG}` },
  { label: 'llms.txt', href: `/site/${JORGE_SLUG}/llms.txt` },
  { label: 'MCP endpoint', href: `/site/${JORGE_SLUG}/mcp` },
  { label: 'AI accuracy check', href: `/dashboard/monitoring?slug=${JORGE_SLUG}` },
]

// Lucide no longer ships brand icons. Path from Simple Icons (CC0).
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Landing() {
  return (
    <div className="ob-landing">
      <a href="#main" className="ob-skip">Skip to content</a>

      <header className="ob-header">
        <div className="ob-wrap ob-header-inner">
          <Link to="/" aria-label="OneBridge home">
            <img src="/brand/logo-small.webp" alt="OneBridge" width="132" height="66" className="ob-logo" />
          </Link>
          <nav className="ob-nav" aria-label="Main">
            <a className="ob-nav-section" href="#problem">The problem</a>
            <a className="ob-nav-section" href="#how-it-works">How it works</a>
            <a className="ob-nav-section" href="#trust">Trust</a>
            <a className="ob-nav-section" href="#team">Team</a>
            <Link className="ob-nav-login" to="/login">Log in</Link>
            <a className="ob-btn ob-btn-primary ob-btn-small" href="#pilot">Join the pilot</a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero: the promise in one line, then Jorge and Maria. */}
        <section className="ob-hero" aria-labelledby="hero-title">
          <div className="ob-wrap">
            <div className="ob-hero-text">
              <p className="ob-win">
                <Trophy size={16} aria-hidden="true" />
                <span><strong>1st place, Business Solution</strong> · HSI Battle of the Brains 2026</span>
              </p>
              <h1 id="hero-title">
                You know your business.
                <span>OneBridge helps AI understand it.</span>
              </h1>
              <p className="ob-lead">
                When someone asks an AI assistant where to buy something, local shops can be missing or described
                wrong. OneBridge puts the real facts where AI can find them.
              </p>
              <div className="ob-actions">
                <Link className="ob-btn ob-btn-primary" to="/demo">See it work: Jorge’s Auto Parts</Link>
                <a className="ob-btn ob-btn-ghost" href="#pilot">Join the pilot</a>
              </div>
            </div>
            <img
              className="ob-hero-art"
              src={`${ASSET}jorge-and-maria.webp`}
              width="1600"
              height="640"
              alt="Illustration: Jorge at his auto parts store with a tablet, and Maria looking for a brake rotor on her phone, connected by OneBridge."
              fetchPriority="high"
            />
          </div>
        </section>

        {/* The problem, told through one moment from each side. */}
        <section id="problem" className="ob-section" aria-labelledby="problem-title">
          <div className="ob-wrap">
            <h2 id="problem-title" className="ob-h2">Maria asks. The AI guesses.</h2>
            <div className="ob-story">
              <article className="ob-story-card">
                <h3 className="ob-story-who">Maria, a customer</h3>
                <div className="ob-chat">
                  <p className="ob-bubble ob-bubble-user">
                    <span className="ob-sr">Maria asks: </span>Where can I get a front brake rotor for a 2015 Civic today?
                  </p>
                  <p className="ob-bubble ob-bubble-ai">
                    <span className="ob-sr">The AI answers: </span>Your best bet is a big chain store across town. Smaller shops may not have it.
                  </p>
                </div>
                <p className="ob-story-end">She drives across town for a part that was two blocks away.</p>
              </article>
              <article className="ob-story-card">
                <h3 className="ob-story-who">Jorge, a shop owner</h3>
                <div className="ob-record">
                  <div>
                    <strong>Front brake rotor, 2015 Civic</strong>
                    <span>$54.99 · In stock · Open until 6 PM</span>
                  </div>
                  <span className="ob-hidden-tag"><Eye size={14} aria-hidden="true" /> Invisible to AI</span>
                </div>
                <p className="ob-story-end">His real prices, stock, and hours sit in a spreadsheet no AI assistant can read.</p>
              </article>
            </div>
            <p className="ob-bridge-line">Both lose. OneBridge connects them.</p>
          </div>
        </section>

        <section id="how-it-works" className="ob-section ob-section-tint" aria-labelledby="how-title">
          <div className="ob-wrap">
            <h2 id="how-title" className="ob-h2">How it works</h2>
            <p className="ob-sub">Four steps. Jorge stays in charge of every one.</p>
            <ol className="ob-steps">
              {steps.map((step, i) => (
                <li className="ob-step" key={step.title}>
                  <div className="ob-step-top">
                    <img src={`${ASSET}step-${i + 1}.svg`} alt="" width="100" height="80" loading="lazy" />
                    <span className="ob-step-num" aria-hidden="true">{i + 1}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="trust" className="ob-section ob-trust" aria-labelledby="trust-title">
          <div className="ob-wrap">
            <div className="ob-trust-top">
              <div>
                <h2 id="trust-title" className="ob-h2">Honest about what we can promise.</h2>
                <p className="ob-sub">
                  No one can guarantee an AI assistant will recommend a business, and we will not claim to. Here is
                  what we do promise.
                </p>
              </div>
              <ul className="ob-promises">
                {promises.map((p) => (
                  <li key={p}><CircleCheck size={20} aria-hidden="true" />{p}</li>
                ))}
              </ul>
            </div>
            <h3 className="ob-values-title">What we stand for</h3>
            <ul className="ob-values">
              {values.map(({ name, body, icon: Icon }) => (
                <li key={name}>
                  <Icon size={22} aria-hidden="true" />
                  <h4>{name}</h4>
                  <p>{body}</p>
                </li>
              ))}
            </ul>
            <p className="ob-status">
              <strong>Prototype today:</strong> Jorge’s example runs end to end. More file types and wider AI monitoring
              are in progress.
            </p>
          </div>
        </section>

        <section id="team" className="ob-section" aria-labelledby="team-title">
          <div className="ob-wrap">
            <div className="ob-award">
              <Trophy size={28} aria-hidden="true" />
              <div>
                <p className="ob-award-title">1st place, Business Solution</p>
                <p>2026 HSI Battle of the Brains</p>
              </div>
            </div>
            <h2 id="team-title" className="ob-h2">The team behind OneBridge</h2>
            <p className="ob-sub">
              Seven Southwestern University students built OneBridge in 24 hours for the prompt “The New Front Door:
              Trustworthy AI Product Discovery.”
            </p>
            <ul className="ob-team">
              {team.map((m) => (
                <li key={m.name}>
                  <img src={`/team/${m.photo}.webp`} alt={`Portrait of ${m.name}`} width="160" height="160" loading="lazy" />
                  <p className="ob-team-name">{m.name}</p>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="ob-team-link">
                    <LinkedInIcon /> LinkedIn
                    <span className="ob-sr">: {m.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="ob-coaches">Coached by Dr. Debika Sihi, Dr. Abby Dings, and Adrian D. Ramirez.</p>
          </div>
        </section>

        <section id="pilot" className="ob-section ob-section-last" aria-labelledby="pilot-title">
          <div className="ob-wrap">
            <div className="ob-pilot">
              <div>
                <h2 id="pilot-title">Run a local business? Join the pilot.</h2>
                <p>
                  We are looking for small businesses to try OneBridge with us. Set up your shop in a few minutes, or
                  walk through Jorge’s example first.
                </p>
              </div>
              <div className="ob-actions">
                <Link className="ob-btn ob-btn-primary" to="/register">Set up your business</Link>
                <Link className="ob-btn ob-btn-light" to="/demo">See Jorge’s demo</Link>
              </div>
              <p className="ob-pilot-contact">
                Questions first? <a href="#team">Message any of us on LinkedIn.</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-wrap ob-footer-inner">
          <div>
            <img src="/brand/logo-small.webp" alt="OneBridge" width="104" height="52" loading="lazy" />
            <p className="ob-footer-tag">The Trusted Connection.</p>
            <p>Built at the 2026 HSI Battle of the Brains by Southwestern University students. A working prototype with example data.</p>
          </div>
          <nav aria-labelledby="footer-explore">
            <p id="footer-explore" className="ob-footer-label">Explore the prototype</p>
            <ul>
              {prototypeLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
              <li>
                <a href="https://github.com/jucax/SU_TECH_09302026" target="_blank" rel="noopener noreferrer">
                  Source on GitHub<span className="ob-sr"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
