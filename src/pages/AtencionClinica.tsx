import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Heart, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import ani3 from '../assets/ani3.png';

const whatsappLink = `https://wa.me/5493515557316?text=${encodeURIComponent(
  'Hola Ana, quiero consultar por un proceso de psicología clínica individual.'
)}`;

export default function AtencionClinica() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const topics = [
    'Ansiedad y gestión de emociones',
    'Duelos, pérdidas y separaciones',
    'Vínculos tóxicos y codependencia',
    'Autoestima, límites e identidad',
    'Menopausia y otras transiciones vitales',
    'Impacto familiar de las adicciones',
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <SEOHead
        title="Psicología Clínica Individual de Adultos en Córdoba | Lic. Ana Paris"
        description="Atención psicológica individual para personas adultas: ansiedad, duelos, separaciones, vínculos tóxicos, codependencia, autoestima y menopausia. Presencial en Córdoba y virtual."
        canonicalUrl="https://licenciadaanaparis.com/atencion-clinica"
        keywords="psicóloga adultos Córdoba, terapia individual Córdoba, ansiedad, duelos, separaciones, codependencia, psicología menopausia"
      />

      <main>
        <section className="relative overflow-hidden bg-brand-bg-sage pb-20 pt-32">
          <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-brand-sage/20 blur-3xl" />
          <div className="relative z-10">
            <Breadcrumbs items={[{ label: 'Atención clínica de adultos' }]} />
            <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 pt-8 md:grid-cols-12">
              <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-cream/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark">
                  <Heart className="h-4 w-4" />
                  Proceso individual de adultos
                </span>
                <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-brand-bg-dark sm:text-6xl">Psicología clínica para atravesar, comprender y transformar</h1>
                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-brand-text/90">
                  Un espacio individual y confidencial para trabajar lo que hoy genera sufrimiento, ordenar emociones y construir recursos propios para afrontar vínculos, pérdidas, crisis y cambios vitales.
                </p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-brand-bg-dark">
                  Solicitar una entrevista
                  <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
                <img src={ani3} alt="Lic. Ana Paris durante una consulta de psicología clínica" className="mx-auto aspect-[4/5] w-full max-w-[360px] rounded-[100px_22px_22px_22px] object-cover shadow-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-20">
          <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-12 px-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Motivos de consulta</span>
              <h2 className="mb-5 font-display text-4xl font-semibold text-brand-bg-dark">No necesitás tener todo claro para comenzar</h2>
              <p className="font-light leading-relaxed text-brand-text-muted">
                A veces la consulta empieza con una situación concreta y otras con una sensación difícil de explicar. El proceso permite comprender qué está ocurriendo, reconocer patrones y definir objetivos posibles sin reducir la experiencia a una etiqueta.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-sage/20 bg-brand-cream p-7 shadow-sm md:col-span-6">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm leading-relaxed text-brand-text/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage-dark" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg-dark py-20 text-brand-cream">
          <div className="mx-auto w-full max-w-[900px] px-6 text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-sage">Modalidad presencial y virtual</span>
            <h2 className="mb-5 font-display text-4xl font-semibold">Un proceso construido alrededor de tu situación</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light leading-relaxed text-brand-cream/80">
              La primera entrevista permite conocer el motivo de consulta, responder dudas y evaluar el encuadre más adecuado. La atención puede realizarse en Córdoba Capital o mediante videollamada.
            </p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-bg-dark transition-all hover:bg-brand-bg-sage">
              Consultar disponibilidad
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
