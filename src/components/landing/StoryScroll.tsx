import { CheckCircle2, EyeOff } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const QUESTION = 'Where can I get a front brake rotor for a 2015 Civic today?'

const beats: { kicker: string; title: string; body: string; sr?: string }[] = [
  {
    kicker: 'Maria',
    title: 'Needs a part today.',
    body: 'She asks an AI assistant where to buy a brake rotor nearby.',
  },
  {
    kicker: 'The assistant',
    title: 'Guesses.',
    body: 'It sends her to a chain store across town. It has never seen the shop around the corner.',
    sr: 'The assistant answers: Your best bet is a big chain store across town. Smaller shops may not carry it.',
  },
  {
    kicker: 'Jorge',
    title: 'Has it two blocks away.',
    body: 'The rotor is on his shelf for $49.99. His prices, stock, and hours live in a spreadsheet no assistant can read.',
  },
  {
    kicker: 'With OneBridge',
    title: 'The answer is right.',
    body: 'Jorge’s approved facts are published to an MCP server. A connected assistant reads them and gives Maria the right answer.',
    sr: 'The connected assistant answers: Jorge’s Auto Parts, two blocks away, has one in stock for $49.99. They’re open until 6 PM.',
  },
]

function Screen({ step }: { step: number }) {
  return (
    <div className="ob-phone" data-step={step}>
      <div className="ob-phone-bar">
        <span>{step === 2 ? 'Jorge’s Auto Parts · inventory' : 'AI assistant'}</span>
      </div>
      <div className="ob-phone-body">
        {step === 2 ? (
          <div className="ob-sheet">
            <div className="ob-sheet-row ob-sheet-head"><span>Item</span><span>Price</span><span>In stock</span></div>
            <div className="ob-sheet-row"><span>Front brake rotor, 2015 to 2020 Civic</span><span>$49.99</span><span>Yes</span></div>
            <div className="ob-sheet-row"><span>Ceramic brake pad set</span><span>$34.99</span><span>Yes</span></div>
            <div className="ob-sheet-row"><span>Cabin air filter</span><span>$12.99</span><span>Yes</span></div>
            <p className="ob-sheet-flag"><EyeOff size={14} aria-hidden="true" /> Not visible to AI assistants</p>
          </div>
        ) : (
          <div className="ob-thread">
            <p className="ob-msg ob-msg-me">{QUESTION}</p>
            {step === 0 && <p className="ob-msg ob-msg-typing" aria-label="The assistant is thinking"><i /><i /><i /></p>}
            {step === 1 && (
              <p className="ob-msg ob-msg-ai">
                Your best bet is a big chain store across town. Smaller shops may not carry it.
              </p>
            )}
            {step === 3 && (
              <>
                <p className="ob-msg ob-msg-ai ob-msg-good">
                  Jorge’s Auto Parts, two blocks away, has one in stock for $49.99. They’re open until 6 PM.
                </p>
                <p className="ob-source"><CheckCircle2 size={14} aria-hidden="true" /> Approved by the store, via OneBridge</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * The problem and the fix as one short story. On wide screens the phone stays
 * pinned while the four beats scroll past; on phones each beat shows its own
 * screen inline.
 */
export function StoryScroll() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.beat))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="ob-story">
      <ol className="ob-beats">
        {beats.map((b, i) => (
          <li
            key={b.kicker}
            data-beat={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            className={i === active ? 'ob-beat is-active' : 'ob-beat'}
          >
            <p className="ob-beat-kicker">{b.kicker}</p>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
            {b.sr && <p className="ob-sr">{b.sr}</p>}
            <div className="ob-beat-inline" aria-hidden="true">
              <Screen step={i} />
            </div>
          </li>
        ))}
      </ol>
      <div className="ob-story-stage" aria-hidden="true">
        <div className="ob-story-pin" data-step={active}>
          <Screen step={active} />
          <p className={active === 3 ? 'ob-stage-note is-shown' : 'ob-stage-note'}>
            Shown with an assistant connected to Jorge’s OneBridge MCP server.
          </p>
        </div>
      </div>
    </div>
  )
}
