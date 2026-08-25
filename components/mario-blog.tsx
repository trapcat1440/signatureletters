'use client'

import { useEffect, useState } from 'react'

const posts = [
  {
    id: 'post1',
    title: 'Nothin New',
    kicker: 'Internet culture & everyday discoveries',
    image: 'https://i.imghippo.com/files/cEcO4830xso.png',
    href: 'https://clublss.com/directory3.html',
    color: 'blue',
  },
  {
    id: 'fashion1',
    title: 'Fashion Flashy',
    kicker: 'Style, brands & cultural aesthetics',
    image: 'https://i.imghippo.com/files/dS2301HQ.png',
    href: 'https://clublss.com/directory2.html',
    color: 'red',
  },
  {
    id: 'post3',
    title: 'Hollywood',
    kicker: 'Entertainment, media & notable figures',
    image: 'https://i.imghippo.com/files/OR5825eo.png',
    href: 'https://clublss.com/directory1.html',
    color: 'green',
  },
]

export function MarioBlog() {
  const [time, setTime] = useState('00:00:00')
  const [likes, setLikes] = useState<Record<string, number>>({})

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour12: false }))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    let audioContext: AudioContext | null = null

    const playClick = () => {
      const AudioContextClass = window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AudioContextClass) return

      audioContext ??= new AudioContextClass()
      if (audioContext.state === 'suspended') void audioContext.resume()

      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()
      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(520, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(280, audioContext.currentTime + 0.045)
      gain.gain.setValueAtTime(0.045, audioContext.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.055)
      oscillator.connect(gain)
      gain.connect(audioContext.destination)
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.06)
    }

    document.addEventListener('click', playClick)
    return () => {
      document.removeEventListener('click', playClick)
      void audioContext?.close()
    }
  }, [])

  return (
    <main className="mario-page">
      <div className="sky-dots" aria-hidden="true" />
      <div className="floating-timer" aria-label={`Current time ${time}`}>
        <span>TIME</span>
        <strong>{time}</strong>
      </div>
      <header className="mario-header">
        <div className="header-inner">
          <div className="brand-lockup">
            <div className="paper-note" aria-hidden="true"><span>:0</span><i /></div>
            <div>
              <p className="eyebrow">Page contribution to the  PLATFORM</p>
              <h1>Signature &amp; Letter SS</h1>
              <p className="subtitle">Blog / home · fashion · culture · digital life</p>
            </div>
          </div>
          <div className="clock-card" aria-label={`Current time ${time}`}>
            <span>Release 1.1</span>
            <strong>{time}</strong>
          </div>
        </div>

      </header>

      <nav className="mario-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="https://mdxpress-lyart.vercel.app/">EDITOR&apos;S CHOICE</a>
          <a href="clublss.com/storesignatureblog.html">MERCH SHOP</a>
          <span className="nav-status"><i /> Reader </span>
        </div>
      </nav>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="level-label">Public Forum</p>
          <h2 id="page-title">The.<br /><span>true blog.</span></h2>
          <p>Three worlds of fresh observations, flashy fashion, and Hollywood energy. Jump in and explore.</p>
        </div>
        <div className="question-block" aria-hidden="true">
          <span>+-</span>
        </div>
      </section>

      <section className="world-grid" aria-label="Story categories">
        {posts.map((post, index) => (
          <article className={`world-card ${post.color}`} key={post.id}>
            <div className="card-topline"><span>Series {index + 1}–{index + 1}</span><span>● ● ●</span></div>
            <a className="post-link" href={post.href} target="_blank" rel="noreferrer">
              <div className="image-frame"><img src={post.image} alt={post.kicker} /></div>
              <div className="card-copy">
                <p className="card-kicker">{post.kicker}</p>
                <h3>{post.title}</h3>
                <span className="visit"> Here <b>→</b></span>
              </div>
            </a>
            <button className="like-button" onClick={() => setLikes((current) => ({ ...current, [post.id]: (current[post.id] ?? 0) + 1 }))} aria-label={`Like ${post.title}`}>
              <span aria-hidden="true">♥</span> {likes[post.id] ?? 0} Ups
            </button>
          </article>
      
        ))}
      </section>
 <img src="https://i.imghippo.com/files/rDa4191ag.png"></img>
      <footer className="mario-footer">
        <img src="https://i.imghippo.com/files/rDa4191ag.png"></img>
        <div className="footer-star" aria-hidden="true">★</div>
        <p>2026 SIGNATURE &amp; LETTER SS · ALL RIGHTS RESERVED</p>
        <a href="https://www.trustpilot.com/review/clublss.com" target="_blank" rel="noreferrer">RATE THIS BLOG ON TRUSTPILOT →</a>
      </footer>
    </main>
  )
}

export default MarioBlog
