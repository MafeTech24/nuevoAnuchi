/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoCover from './components/VideoCover';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenopauseSpotlight from './components/MenopauseSpotlight';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import SEOHead from './components/SEOHead';

const TalleresHub = lazy(() => import('./pages/TalleresHub'));
const TalleresAdicciones = lazy(() => import('./pages/Talleres'));
const TalleresMenopausia = lazy(() => import('./pages/TalleresMenopausia'));
const RecursosHub = lazy(() => import('./pages/RecursosHub'));
const RecursosAdicciones = lazy(() => import('./pages/Recursos'));
const RecursosMenopausia = lazy(() => import('./pages/RecursosMenopausia'));
const Menopausia = lazy(() => import('./pages/Menopausia'));
const AtencionClinica = lazy(() => import('./pages/AtencionClinica'));
const AcompanamientoPerinatal = lazy(() => import('./pages/AcompanamientoPerinatal'));

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-brand-bg text-brand-text font-body selection:bg-brand-sage/30 selection:text-brand-text text-base antialiased">
        {/* Dynamic Navigation */}
        <Navbar scrolled={scrolled} />

        <Suspense fallback={<div className="min-h-screen bg-brand-bg pt-36 text-center text-sm text-brand-text-muted">Cargando contenido…</div>}>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <main id="main-content-flow" className="flex flex-col">
              {/* Dynamic Route SEO & Canonical */}
              <SEOHead
                title="Lic. Ana Paris | Psicología Clínica, Menopausia y Acompañamiento Perinatal"
                description="Atención psicológica individual para personas adultas, vínculos, ansiedad, duelos, codependencia y menopausia. Acompañamiento perinatal y orientación a familias. Atención presencial en Córdoba y virtual."
                canonicalUrl="https://licenciadaanaparis.com/"
                keywords="psicóloga clínica Córdoba, terapia individual adultos Córdoba, psicología menopausia, acompañamiento perinatal Córdoba, codependencia, ansiedad, duelos, Ana Paris psicóloga UNC"
              />

              {/* Section 1: Video Portada */}
              <VideoCover />

              {/* Section 2: Hero Header */}
              <Hero />

              {/* Section 3: Clinical Specialties */}
              <Specialties />

              {/* Section 4: Menopause program spotlight */}
              <MenopauseSpotlight />

              {/* Section 5: Sobre mí / Bio */}
              <About />

              {/* Section 6: Presentación audiovisual */}

              {/* Section 6: FAQ Accordion */}
              <FAQ />

              {/* Section 7: Organic Grid Gallery */}
              <Gallery />

              {/* Section 8: Secure Consultation Contact Form */}
              <Contact />
            </main>
          } />

          {/* Talleres Route */}
          <Route path="/talleres" element={<TalleresHub />} />
          <Route path="/talleres/adicciones" element={<TalleresAdicciones />} />
          <Route path="/talleres/menopausia" element={<TalleresMenopausia />} />

          {/* Recursos Route */}
          <Route path="/recursos" element={<RecursosHub />} />
          <Route path="/recursos/adicciones" element={<RecursosAdicciones />} />
          <Route path="/recursos/menopausia" element={<RecursosMenopausia />} />

          {/* Menopausia Route */}
          <Route path="/menopausia" element={<Menopausia />} />

          {/* Clinical service routes */}
          <Route path="/atencion-clinica" element={<AtencionClinica />} />
          <Route path="/acompanamiento-perinatal" element={<AcompanamientoPerinatal />} />
        </Routes>
        </Suspense>

        {/* Footer block */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
}
