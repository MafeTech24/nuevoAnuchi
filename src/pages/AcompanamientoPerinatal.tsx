import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Baby, CheckCircle2, Heart, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import consultorio from '../assets/consultorio.png';

const whatsappLink = `https://wa.me/5493515557316?text=${encodeURIComponent(
  'Hola Ana, quiero consultar por acompañamiento perinatal durante la gestación, nacimiento o crianza.'
)}`;

export default function AcompanamientoPerinatal() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const stages = [
    { title: 'Gestación', text: 'Preparación emocional, temores, cambios de identidad y construcción de confianza para transitar el embarazo.' },
    { title: 'Nacimiento', text: 'Información, presencia y sostén emocional para vivir el parto de manera acompañada y respetada.' },
    { title: 'Puerperio y lactancia', text: 'Acompañamiento ante el cansancio, la reorganización familiar, las emociones intensas y los desafíos de la lactancia.' },
    { title: 'Crianza temprana', text: 'Un espacio para revisar expectativas, vínculos, necesidades y decisiones durante los primeros momentos de la crianza.' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <SEOHead
        title="Acompañamiento Perinatal en Córdoba | Lic. Ana Paris, Psicóloga y Doula"
        description="Sostén emocional durante la gestación, el nacimiento, el puerperio, la lactancia y la crianza temprana. Atención de la Lic. Ana Paris, Psicóloga y Doula en Córdoba."
        canonicalUrl="https://licenciadaanaparis.com/acompanamiento-perinatal"
        keywords="doula Córdoba, acompañamiento perinatal, psicología embarazo, puerperio, lactancia, crianza, preparación parto Córdoba"
      />

      <main>
        <section className="relative overflow-hidden bg-brand-bg-sage pb-20 pt-32">
          <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="relative z-10">
            <Breadcrumbs items={[{ label: 'Acompañamiento perinatal' }]} />
            <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 pt-8 md:grid-cols-12">
              <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-cream/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark">
                  <Baby className="h-4 w-4" />
                  Gestación, nacimiento y crianza
                </span>
                <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-brand-bg-dark sm:text-6xl">Acompañamiento perinatal con escucha, información y sostén emocional</h1>
                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-brand-text/90">
                  Un espacio cuidado para transitar la gestación, el nacimiento, el puerperio, la lactancia y los primeros momentos de la crianza con mayor confianza y sin sentir que tenés que poder con todo.
                </p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-brand-bg-dark">
                  Consultar acompañamiento
                  <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
                <img src={consultorio} alt="Consultorio de psicología perinatal de la Lic. Ana Paris en Córdoba" className="mx-auto aspect-[4/5] w-full max-w-[360px] rounded-[22px_100px_22px_22px] object-cover shadow-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-20">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Acompañamiento en cada momento</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Cada etapa trae necesidades diferentes</h2>
              <p className="font-light leading-relaxed text-brand-text-muted">El acompañamiento se adapta al momento que estés viviendo, a tu historia y a la red de apoyo disponible.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stages.map((stage, index) => (
                <motion.div key={stage.title} className="rounded-2xl border border-brand-sage/20 bg-brand-cream p-7 shadow-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-bg-sage text-brand-sage-dark">
                    {index % 2 === 0 ? <Heart className="h-5 w-5" /> : <Baby className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-brand-bg-dark">{stage.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-brand-text-muted">{stage.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-bg-dark py-20 text-brand-cream">
          <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-10 px-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-sage">Psicóloga y Doula</span>
              <h2 className="mb-4 font-display text-4xl font-semibold">Una mirada que integra lo emocional y lo perinatal</h2>
              <p className="font-light leading-relaxed text-brand-cream/80">
                La formación clínica permite reconocer cuándo una experiencia necesita escucha psicológica específica, mientras que el rol de Doula aporta sostén, información y presencia durante un período de grandes transformaciones.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-5">
              <ul className="space-y-3">
                {['Atención presencial en Córdoba', 'Modalidad virtual', 'Acompañamiento individual', 'Orientación para la red de apoyo'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-cream/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-[900px] px-6 text-center">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-bg-dark transition-all hover:bg-brand-bg-sage">
              Conversar sobre tu situación
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
