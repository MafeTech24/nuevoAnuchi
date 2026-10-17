import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Heart, Leaf, MessageCircle, Salad, Sparkles, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOHead from '../components/SEOHead';
import ani4 from '../assets/ani4.png';

const informationLink = `https://wa.me/5493515557316?text=${encodeURIComponent(
  'Hola Ana, quiero recibir información sobre los talleres de menopausia.'
)}`;

const workshopThemes = [
  {
    icon: Brain,
    title: 'Cuerpo y cerebro',
    text: 'Cambios cognitivos, emocionales y corporales que pueden aparecer durante la transición.',
  },
  {
    icon: Heart,
    title: 'Salud y placer',
    text: 'Sexualidad, vínculos, deseo y formas de habitar el cuerpo con información y cuidado.',
  },
  {
    icon: Sparkles,
    title: 'Hormonas',
    text: 'Claves para comprender los cambios hormonales y preparar preguntas para la consulta profesional.',
  },
  {
    icon: Salad,
    title: 'Nutrición',
    text: 'Hábitos posibles y sostenibles que acompañan el bienestar cotidiano durante esta etapa.',
  },
  {
    icon: Stethoscope,
    title: 'Suelo pélvico',
    text: 'Movimiento, fuerza y cuidado corporal desde una perspectiva integral e interdisciplinaria.',
  },
];

export default function TalleresMenopausia() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg pb-24 pt-28 text-brand-text">
      <SEOHead
        title="Talleres de Menopausia | Lic. Ana Paris"
        description="Talleres interdisciplinarios sobre menopausia, emociones, hormonas, nutrición, sexualidad, movimiento y suelo pélvico coordinados por la Lic. Ana Paris."
        canonicalUrl="https://licenciadaanaparis.com/talleres/menopausia"
        keywords="talleres menopausia, clases menopausia, psicología menopausia, climaterio, perimenopausia, Ana Paris"
      />

      <Breadcrumbs items={[{ label: 'Talleres', path: '/talleres' }, { label: 'Menopausia' }]} />

      <main>
        <section className="relative overflow-hidden pb-20 pt-6">
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-bg-sage blur-3xl" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
            <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-bg-sage px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sage-dark">
                <Leaf className="h-4 w-4" />
                El cuerpo que habito
              </span>
              <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-brand-bg-dark sm:text-6xl">Talleres de Menopausia</h1>
              <p className="mb-5 max-w-2xl text-lg font-light leading-relaxed text-brand-text/90">
                Encuentros y clases para comprender esta etapa desde distintas dimensiones, transformar información en autocuidado y transitar los cambios con mayor claridad.
              </p>
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
                Propuestas coordinadas por la Lic. Ana Paris con aportes de psicología, ginecología, endocrinología, nutrición y fisioterapia.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={informationLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-bg-dark">
                  Recibir novedades
                  <MessageCircle className="h-4 w-4" />
                </a>
                <Link to="/menopausia" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-sage px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark transition-all hover:bg-brand-bg-sage">
                  Ver programa integral
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <img src={ani4} alt="Muestra de una clase sobre menopausia del programa coordinado por Ana Paris" className="w-full rounded-2xl border border-brand-sage/20 object-cover shadow-xl" />
            </motion.div>
          </div>
        </section>

        <section className="bg-brand-bg-sage py-20">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Temáticas</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Una mirada amplia sobre la transición</h2>
              <p className="font-light leading-relaxed text-brand-text-muted">Cada propuesta podrá abordar un eje específico o integrarse en un recorrido más completo.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {workshopThemes.map((theme, index) => (
                <motion.article key={theme.title} className="rounded-2xl border border-brand-sage/20 bg-brand-cream p-5 text-center shadow-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}>
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-bg-sage text-brand-sage-dark"><theme.icon className="h-5 w-5" /></div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-brand-bg-dark">{theme.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-brand-text-muted">{theme.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1000px] px-6 py-20">
          <div className="rounded-2xl border border-brand-sage/20 bg-brand-cream p-8 text-center shadow-sm sm:p-12">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Agenda en preparación</span>
            <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Los próximos talleres se publicarán aquí</h2>
            <p className="mx-auto mb-7 max-w-2xl font-light leading-relaxed text-brand-text-muted">
              A medida que se confirmen formatos, fechas y modalidades, esta página incorporará cada propuesta. Podés solicitar información para enterarte cuando haya novedades.
            </p>
            <a href={informationLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-bg-dark">
              Quiero recibir información
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
