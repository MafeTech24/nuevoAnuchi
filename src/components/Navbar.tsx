/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ChevronDown, Leaf, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

type DropdownKey = 'talleres' | 'recursos';

const dropdowns: Record<DropdownKey, { label: string; root: string; items: { label: string; path: string; description: string }[] }> = {
  talleres: {
    label: 'Talleres',
    root: '/talleres',
    items: [
      { label: 'Adicciones', path: '/talleres/adicciones', description: 'Programa de Acompañamiento para Familiar…' },
      { label: 'Menopausia', path: '/menopausia', description: 'Programa Integral de Menopausia' },
    ],
  },
  recursos: {
    label: 'Recursos',
    root: '/recursos',
    items: [
      { label: 'Adicciones', path: '/recursos/adicciones', description: 'Ebook, audiolibro y guías' },
      { label: 'Menopausia', path: '/recursos/menopausia', description: 'Ebook, videos y herramientas' },
    ],
  },
};

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<DropdownKey | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDesktopDropdown(null);
        setMobileDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const handleLogoClick = (event: React.MouseEvent) => {
    if (isHomePage) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnchorClick = (event: React.MouseEvent, anchor: string) => {
    event.preventDefault();
    if (isHomePage) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate('/');
    setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  const basicLinks = [
    { label: 'Sobre mí', href: '#sobre-mi', isRoute: false },
    { label: 'Áreas de atención', href: '#especialidades', isRoute: false },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav id="main-nav" className={`fixed inset-x-0 top-0 z-50 border-b-[0.5px] border-brand-sage/30 bg-[#FAF6EE]/95 backdrop-blur-md transition-all duration-500 ${scrolled ? 'py-3 shadow-sm' : 'py-4'}`}>
      <div className="mx-auto flex max-w-[1000px] items-center justify-between px-6">
        <Link id="nav-logo" to="/" onClick={handleLogoClick} className="group flex items-center gap-2 focus:outline-none">
          <Leaf className="h-5 w-5 text-brand-sage-dark transition-transform duration-300 group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold italic tracking-wide text-brand-text">Ana Paris</span>
            <span className="font-body text-xs uppercase tracking-[0.15em] text-brand-text-muted">Psicóloga & Doula</span>
          </div>
        </Link>

        <div id="nav-desktop-links" className="hidden items-center gap-4 md:flex lg:gap-6">
          {basicLinks.map((link) => link.isRoute ? (
            <Link key={link.label} to={link.href} className="font-body text-sm tracking-wider text-brand-text transition-colors hover:text-brand-sage-dark">{link.label}</Link>
          ) : (
            <a key={link.label} href={link.href} onClick={(event) => handleAnchorClick(event, link.href)} className="font-body text-sm tracking-wider text-brand-text transition-colors hover:text-brand-sage-dark">{link.label}</a>
          ))}

          {(Object.keys(dropdowns) as DropdownKey[]).map((key) => {
            const dropdown = dropdowns[key];
            const isOpen = desktopDropdown === key;
            const isActive = location.pathname.startsWith(dropdown.root);
            return (
              <div key={key} className="relative" onMouseEnter={() => setDesktopDropdown(key)} onMouseLeave={() => setDesktopDropdown(null)}>
                <button type="button" aria-haspopup="true" aria-expanded={isOpen} onClick={() => setDesktopDropdown(isOpen ? null : key)} onFocus={() => setDesktopDropdown(key)} className={`flex items-center gap-1 font-body text-sm tracking-wider transition-colors ${isActive ? 'text-brand-sage-dark' : 'text-brand-text hover:text-brand-sage-dark'}`}>
                  {dropdown.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
                  <div className="overflow-hidden rounded-2xl border border-brand-sage/20 bg-[#FAF6EE] p-2 shadow-xl">
                    <Link to={dropdown.root} className="block rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-widest text-brand-accent transition-colors hover:bg-brand-bg-sage">Ver todo</Link>
                    <div className="my-1 h-px bg-brand-sage/15" />
                    {dropdown.items.map((item) => (
                      <Link key={item.path} to={item.path} className="block rounded-xl px-4 py-3 transition-colors hover:bg-brand-bg-sage">
                        <span className="block text-sm font-semibold text-brand-bg-dark">{item.label}</span>
                        <span className="mt-0.5 block text-xs text-brand-text-muted">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <a href="#contacto" onClick={(event) => handleAnchorClick(event, '#contacto')} className="rounded-full bg-brand-sage-dark px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-bg-dark hover:shadow-md">Agendar Consulta</a>
        </div>

        <button id="nav-mobile-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-brand-text transition-colors hover:text-brand-sage-dark md:hidden" aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-brand-sage/20 bg-[#FAF6EE] px-6 py-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {basicLinks.map((link) => link.isRoute ? (
              <Link key={link.label} to={link.href} onClick={closeMobile} className="py-1 font-body text-base tracking-wider text-brand-text hover:text-brand-sage-dark">{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href} onClick={(event) => { closeMobile(); handleAnchorClick(event, link.href); }} className="py-1 font-body text-base tracking-wider text-brand-text hover:text-brand-sage-dark">{link.label}</a>
            ))}

            {(Object.keys(dropdowns) as DropdownKey[]).map((key) => {
              const dropdown = dropdowns[key];
              const isOpen = mobileDropdown === key;
              return (
                <div key={key} className="border-t border-brand-sage/15 pt-3">
                  <button type="button" onClick={() => setMobileDropdown(isOpen ? null : key)} className="flex w-full items-center justify-between py-1 text-left font-body text-base tracking-wider text-brand-text" aria-expanded={isOpen}>
                    {dropdown.label}
                    <ChevronDown className={`h-4 w-4 text-brand-sage-dark transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="mt-2 flex flex-col gap-1 rounded-xl bg-brand-bg-sage/70 p-2">
                      <Link to={dropdown.root} onClick={closeMobile} className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">Ver todo</Link>
                      {dropdown.items.map((item) => (
                        <Link key={item.path} to={item.path} onClick={closeMobile} className="rounded-lg px-3 py-2 hover:bg-brand-cream">
                          <span className="block text-sm font-semibold text-brand-bg-dark">{item.label}</span>
                          <span className="block text-xs text-brand-text-muted">{item.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a href="#contacto" onClick={(event) => { closeMobile(); handleAnchorClick(event, '#contacto'); }} className="mt-2 rounded-full bg-brand-sage-dark px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white shadow-sm">Agendar Consulta</a>
          </div>
        </div>
      )}
    </nav>
  );
}
