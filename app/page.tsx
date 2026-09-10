'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import {
  profile, quickExit, mission, vision, independencia,
  nosotrosIntro, equipo, ayudaIntro, confidencialidad, formUrl, contactEmail,
  garantias, recursos, faq, footerNote,
} from './content'

// ── Reveal ────────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal${inView ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const ic = 'w-[18px] h-[18px]'
const ShieldIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5l-8-3Z" /></svg>
const LockIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
const ExitIcon = () => <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></svg>
const DocIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v5h5" /></svg>
const Plus = () => <svg className="faq-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="M12 5v14M5 12h14" /></svg>

// ── Section shell ─────────────────────────────────────────────────────────────

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rule py-16 md:py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-y-6 gap-x-10">
        <div>
          <Reveal>
            <p className="idx md:sticky md:top-28">{n} — {title}</p>
          </Reveal>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState('')

  const doExit = useCallback(() => {
    window.location.replace(quickExit.href)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') doExit()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [doExit])

  useEffect(() => {
    const ids = ['inicio', 'nosotros', 'ayuda', 'protocolos', 'faq']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
        if (vis.length) setActive(vis[0].target.id)
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const navItems = [
    { id: 'nosotros', label: 'Quiénes somos' },
    { id: 'ayuda', label: 'Solicitar ayuda' },
    { id: 'protocolos', label: 'Protocolos' },
    { id: 'faq', label: 'Preguntas frecuentes' },
  ]

  return (
    <div className="min-h-[100dvh] relative overflow-hidden">
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 88%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3">
            <Image src={profile.logo} alt="" width={36} height={36} className="rounded-md" />
            <span className="serif text-[16px] font-semibold tracking-[0.01em]">{profile.name}</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[13px] tracking-[0.03em] uppercase font-medium">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`dim${active === n.id ? ' nav-on' : ''}`}>{n.label}</a>
            ))}
          </div>
          <button onClick={doExit} className="btn-exit" aria-label="Salida rápida — cerrar esta página de inmediato">
            <ExitIcon /> {quickExit.label}
          </button>
        </div>
      </nav>

      <main className="max-w-[1180px] mx-auto px-6 relative">

        {/* ── Hero ── */}
        <section id="inicio" className="relative pt-16 md:pt-24 pb-14 md:pb-20 overflow-hidden">
          <div className="deco-circle hidden md:block" style={{ width: 620, height: 620, top: -260, right: -220 }} />
          <div className="deco-circle hidden md:block" style={{ width: 420, height: 420, top: -100, right: 60, borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)' }} />

          <div className="rise relative max-w-[760px]">
            <p className="label mb-5">Red de Acompañamiento Integral</p>
            <h1 className="name mb-7">{profile.name}</h1>
            <p className="quote mb-4">{profile.fullName}</p>
            <p className="lead max-w-[620px] mb-10">{profile.tagline}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#ayuda" className="btn btn-solid">Solicitar acompañamiento</a>
              <a href="#protocolos" className="btn">Conocer protocolos</a>
            </div>
          </div>
        </section>

        {/* ── Independencia ── */}
        <section className="rule py-8 md:py-10">
          <Reveal>
            <div className="card px-6 py-6 md:px-8 md:py-7 flex items-start gap-4" style={{ borderLeft: '3px solid var(--accent)' }}>
              <div className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}><ShieldIcon /></div>
              <p className="text-[15.5px] leading-[1.7]" style={{ color: 'var(--gray)' }}>{independencia}</p>
            </div>
          </Reveal>
        </section>

        {/* ── Misión y Visión ── */}
        <Section id="mision" n="01" title="Misión y visión">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card px-7 py-8 h-full">
                <p className="label mb-3">Misión</p>
                <p className="text-[16px] leading-[1.75]" style={{ color: 'var(--gray)' }}>{mission}</p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="card px-7 py-8 h-full">
                <p className="label mb-3">Visión</p>
                <p className="text-[16px] leading-[1.75]" style={{ color: 'var(--gray)' }}>{vision}</p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ── Quiénes somos ── */}
        <Section id="nosotros" n="02" title="Quiénes somos">
          <Reveal>
            <p className="text-[16px] leading-[1.75] max-w-[62ch] mb-9" style={{ color: 'var(--gray)' }}>{nosotrosIntro}</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {equipo.map((e, i) => (
              <Reveal key={e.rol} delay={(i % 4) * 45}>
                <div className="card px-6 py-6 h-full">
                  <p className="h-card mb-2">{e.rol}</p>
                  <p className="text-[15px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Canal de ayuda ── */}
        <Section id="ayuda" n="03" title="Solicitar ayuda">
          <Reveal>
            <p className="lead max-w-[62ch] mb-8">{ayudaIntro}</p>

            <div className="space-y-3 mb-10">
              {confidencialidad.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                  <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--gray)' }}>{c}</p>
                </div>
              ))}
            </div>

            {formUrl ? (
              <div className="card overflow-hidden" style={{ borderColor: 'var(--border-strong)' }}>
                <iframe src={formUrl} title="Formulario de solicitud de ayuda" className="w-full" style={{ height: 900, border: 0 }} />
              </div>
            ) : (
              <div className="card px-7 py-9 text-center" style={{ borderColor: 'var(--border-strong)' }}>
                <div className="inline-flex mb-4" style={{ color: 'var(--accent)' }}><LockIcon /></div>
                <p className="h-card mb-2">El formulario seguro se está configurando</p>
                <p className="text-[15px] leading-[1.6] max-w-[46ch] mx-auto" style={{ color: 'var(--gray)' }}>
                  {contactEmail
                    ? <>Mientras tanto, podés escribir de forma confidencial a <a href={`mailto:${contactEmail}`} className="u">{contactEmail}</a>.</>
                    : 'Mientras tanto, este espacio va a mostrar la vía de contacto confidencial disponible.'}
                </p>
              </div>
            )}
          </Reveal>
        </Section>

        {/* ── Garantías ── */}
        <section className="rule py-16 md:py-24">
          <Reveal>
            <p className="label mb-8">Seguridad y garantías institucionales</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {garantias.map((g, i) => (
              <Reveal key={g.t} delay={(i % 4) * 45}>
                <div className="card px-6 py-6 h-full">
                  <p className="h-card mb-2" style={{ fontSize: 18 }}>{g.t}</p>
                  <p className="text-[15px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Protocolos y recursos ── */}
        <Section id="protocolos" n="04" title="Protocolos y recursos">
          <div className="space-y-1">
            {recursos.map((r, i) => (
              <Reveal key={r.t} delay={(i % 5) * 40}>
                <div className="rule row-hover py-5 flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0" style={{ color: 'var(--faint)' }}><DocIcon /></div>
                    <div>
                      <p className="h-card mb-1" style={{ fontSize: 17 }}>{r.t}</p>
                      <p className="text-[14.5px] leading-[1.6]" style={{ color: 'var(--gray)' }}>{r.d}</p>
                    </div>
                  </div>
                  {r.href ? (
                    <a href={r.href} className="u text-[14px] whitespace-nowrap shrink-0 mt-1">Descargar</a>
                  ) : (
                    <span className="meta whitespace-nowrap shrink-0 mt-1">Próximamente</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section id="faq" n="05" title="Preguntas frecuentes">
          <div className="space-y-3">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 5) * 40}>
                <details className="faq-item card px-6 py-5">
                  <summary className="flex items-center justify-between gap-4">
                    <span className="h-card" style={{ fontSize: 17 }}>{item.q}</span>
                    <span className="shrink-0" style={{ color: 'var(--accent)' }}><Plus /></span>
                  </summary>
                  <p className="text-[15px] leading-[1.7] mt-4" style={{ color: 'var(--gray)' }}>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Section>

      </main>

      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-10">
          <p className="text-[14px] leading-[1.7] max-w-[62ch] mb-6" style={{ color: 'var(--faint)' }}>{footerNote}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="meta">© {new Date().getFullYear()} {profile.name}</span>
            <button onClick={doExit} className="btn-exit"><ExitIcon /> {quickExit.label}</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
