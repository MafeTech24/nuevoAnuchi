import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, PlayCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ani5 from '../assets/ani5.png';

export default function MenopauseSpotlight() {
  return (
    <section className="relative overflow-hidden bg-brand-bg-dark py-20 text-brand-cream">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-brand-sage/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-sage/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sage">
            <Sparkles className="h-4 w-4" />
            Nueva propuesta
          </span>
          <h2 className="mb-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Programa Integral de Menopausia
          </h2>
          <p className="mb-7 max-w-2xl font-body text-base font-light leading-relaxed text-brand-cream/85 sm:text-lg">
            Un recorrido profesional y multidisciplinario para comprender los cambios de esta etapa, ordenar lo que te pasa y construir decisiones de autocuidado informadas, sin fórmulas mágicas ni miradas reduccionistas.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: BookOpen, label: 'Ebook y materiales' },
              { icon: PlayCircle, label: 'Videos profesionales' },
              { icon: Sparkles, label: 'Herramientas interactivas' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-cream/90">
                <item.icon className="h-4 w-4 shrink-0 text-brand-sage" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/menopausia"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-bg-dark shadow-md transition-all hover:scale-[1.02] hover:bg-brand-bg-sage"
          >
            Conocer el programa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative mx-auto max-w-[360px]">
            <div className="absolute -inset-3 rotate-2 rounded-[26px] border border-brand-sage/20" />
            <img
              src={ani5}
              alt="Lic. Ana Paris en su consultorio, coordinadora del Programa Integral de Menopausia"
              className="relative aspect-[4/5] w-full rounded-[24px_100px_24px_24px] object-cover object-center shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
